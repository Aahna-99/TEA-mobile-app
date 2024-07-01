import { AuthResponse, LoginPayload } from '../utils/interfaces/IAuthTypes';
import { post } from './Service';

export const loginSerivce = async (data: LoginPayload): Promise<AuthResponse> => {
  const response = await post<AuthResponse>('auth/login', {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.parsedBody!;
};