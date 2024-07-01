/* global Request */
import NetInfo from '@react-native-community/netinfo';
import Snackbar from 'react-native-snackbar';

// import UserPreference from 'config/UserPreferences';

import { IHttpResponse } from '../utils/interfaces/IHttpResponse';
// import { getAppInsights } from './TelemetryService';
import ErrorHandler from './ErrorHandler';
import store from '../processors/store';

class Service {
    env: any;
    appInsights: any;
    errorhandler: any;
    baseUrl: any;

    constructor(args?: any) {
        let config = store.getState().app.config;

        if (config) {
            let { AppConfig, notification } = config;

            this.env = AppConfig.env;
            // this.appInsights = getAppInsights(this.env.aiInstrumentationKey);
            this.errorhandler = ErrorHandler(notification).errorhandler;
            this.baseUrl = args?.useOtherDomain
                ? args?.useOtherDomain
                : args?.useSocialUrl
                ? this.env.socialUrl
                : this.env.apiUrl;
        }
    }

    buildBodyAttach = (document: any) => {
        const formData = new FormData();
        const file = {
            uri: document.uri,
            name: document.name,
            type: document.type,
        };
        formData.append('file', file);
        return formData;
    };

    addAuthHeader = async (args: RequestInit): Promise<RequestInit> => {
        // const tokenModel = await UserPreference.instance.getToken();
        // if (tokenModel?.token) {
            if(true){
            // const token = tokenModel.token?.replace(/\r\n|\n|\r/gm, '');
            args.headers = {
                ...args.headers,
                // EngagedlyAuth: token,
            };
        }
        return args;
    };

    tryGetJson = async (response: Response): Promise<any> => {
        if (!response) {
            return null;
        }
        try {
            return await response.json();
        } catch {
            return null;
        }
    };

    internalFetch = async <T>(
        path: string,
        args: RequestInit,
        errorHandler?: any,
    ): Promise<IHttpResponse<T>> => {
        return new Promise(async (resolve, reject) => {
            try {
                let { isConnected } = await NetInfo.fetch();
                if (!isConnected) {
                    throw new Error('No Internet Connection Found !');
                }
                console.log(`==== ${args.method} || ${this.baseUrl}${path}`);
                const request = new Request(`${this.baseUrl}${path}`, args);
                const start = this.startMessure(request);
                const response: IHttpResponse<T> = await fetch(request);
                this.endMessure(request, start);
                await this.errorhandler(response);
                response.parsedBody = await this.tryGetJson(response);
                console.log(
                    `==== RESPONSE ==== ${response.status} ::`,
                    response.parsedBody,
                );
                resolve(response);
            } catch (error: any) {
                if (errorHandler && typeof errorHandler == 'function') {
                    errorHandler();
                } else {
                    Snackbar.show({
                        text:
                            error.message ||
                            'Something went wrong. Please contact support',
                        duration: Snackbar.LENGTH_SHORT,
                    });
                }
                reject(error);
            }
        });
    };

    startMessure = (request: Request): number => {
        const start = new Date().getTime();

        this.appInsights.trackEvent({
            name: 'start messure',
            properties: {
                request,
            },
        });
        return start;
    };
    endMessure = (request: Request, start: number): number => {
        const end = new Date().getTime();
        const milliseconds = end - start;
        const seconds = ((milliseconds % 60000) / 1000).toFixed(0);

        this.appInsights.trackEvent({
            name: 'end messure',
            properties: {
                request,
                milliseconds,
                seconds,
            },
        });
        return start;
    };

    get = async <T>(
        path: string,
        args?: RequestInit,
        json?: boolean,
        errorHandler?: Function,
    ): Promise<IHttpResponse<T>> => {
        return this.internalFetch(
            path,
            await this.addAuthHeader({ ...args, method: 'GET' }),
            errorHandler,
        );
    };
    post = async <T>(
        path: string,
        args?: RequestInit,
        json?: boolean,
    ): Promise<IHttpResponse<T>> =>
        this.internalFetch(
            path,
            await this.addAuthHeader({ ...args, method: 'POST' }),
        );
    put = async <T>(
        path: string,
        args?: RequestInit,
        json?: boolean,
    ): Promise<IHttpResponse<T>> =>
        this.internalFetch(
            path,
            await this.addAuthHeader({ ...args, method: 'PUT' }),
        );
    deletefn = async <T>(
        path: string,
        args?: RequestInit,
        json?: boolean,
    ): Promise<IHttpResponse<T>> =>
        this.internalFetch(
            path,
            await this.addAuthHeader({ ...args, method: 'DELETE' }),
        );
    patch = async <T>(
        path: string,
        args?: RequestInit,
        json?: boolean,
    ): Promise<IHttpResponse<T>> =>
        this.internalFetch(
            path,
            await this.addAuthHeader({ ...args, method: 'PATCH' }),
        );
}

export default Service;
