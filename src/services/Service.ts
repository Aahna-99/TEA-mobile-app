import NetInfo from '@react-native-community/netinfo';
import Snackbar from 'react-native-snackbar';
import { getStorageItem } from '../utils/Storage';
import errorHandler from './ErrorHandler';

// Define the structure of the HTTP response
export interface IHttpResponse<T> extends Response {
  parsedBody?: T;
}

const baseUrl = 'http://localhost:3030/';

// Helper function to check if the response is JSON
const tryGetJson = async (response: Response): Promise<any> => {
  if (!response) {
    return null;
  }
  try {
    return await response.json();
  } catch {
    return null;
  }
};

// Helper function to add authorization headers
const addAuthHeader = async (args: RequestInit): Promise<RequestInit> => {
  const token = getStorageItem('token');
  if (token) {
    return {
      ...args,
      headers: {
        ...args.headers,
        Authorization: `Bearer ${token}`,
      },
    };
  }
  return args;
};

// Internal fetch function to handle all requests
const internalFetch = async <T>(
  path: string,
  args: RequestInit,
  errorHandlerFn?: (error: Error) => void
): Promise<IHttpResponse<T>> => {
  try {
    const { isConnected } = await NetInfo.fetch();
    if (!isConnected) {
      throw new Error('No Internet Connection Found!');
    }

    console.log(`==== ${args.method} || ${baseUrl}${path}`);
    const request = new Request(`${baseUrl}${path}`, args);
    const response: IHttpResponse<T> = await fetch(request);

    response.parsedBody = await tryGetJson(response);
    console.log(`==== RESPONSE ==== ${response.status} ::`, response.parsedBody);

    if (!response.ok) {
      await errorHandler(response);
    }

    return response;
  } catch (error: any) {
    if (errorHandlerFn) {
      errorHandlerFn(error);
    } else {
      Snackbar.show({
        text: error.message || 'Something went wrong. Please contact support',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
    throw error;
  }
};

export const get = async <T>(
  path: string,
  args?: RequestInit,
  errorHandlerFn?: (error: Error) => void
): Promise<IHttpResponse<T>> => {
  return internalFetch<T>(
    path,
    await addAuthHeader({ ...args, method: 'GET' }),
    errorHandlerFn
  );
};

export const post = async <T>(
  path: string,
  args?: RequestInit,
  errorHandlerFn?: (error: Error) => void
): Promise<IHttpResponse<T>> => {
  return internalFetch<T>(
    path,
    await addAuthHeader({ ...args, method: 'POST' }),
    errorHandlerFn
  );
};

export const put = async <T>(
  path: string,
  args?: RequestInit,
  errorHandlerFn?: (error: Error) => void
): Promise<IHttpResponse<T>> => {
  return internalFetch<T>(
    path,
    await addAuthHeader({ ...args, method: 'PUT' }),
    errorHandlerFn
  );
};

export const patch = async <T>(
  path: string,
  args?: RequestInit,
  errorHandlerFn?: (error: Error) => void
): Promise<IHttpResponse<T>> => {
  return internalFetch<T>(
    path,
    await addAuthHeader({ ...args, method: 'PATCH' }),
    errorHandlerFn
  );
};

export const del = async <T>(
  path: string,
  args?: RequestInit,
  errorHandlerFn?: (error: Error) => void
): Promise<IHttpResponse<T>> => {
  return internalFetch<T>(
    path,
    await addAuthHeader({ ...args, method: 'DELETE' }),
    errorHandlerFn
  );
};
