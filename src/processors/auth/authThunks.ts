import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginPayload, RegisterPayload, AuthResponse } from '../../utils/interfaces/IAuthTypes';
import { loginSerivce } from '../../services/AuthService';
import { getStorageItem, setStorageItem } from '../../utils/Storage';
import { NavigationProp } from '@react-navigation/native';

// Create an async thunk for the login action
export const login = createAsyncThunk<AuthResponse, { payload: LoginPayload, navigation: NavigationProp<any> }>(
  'auth/login',
  async ({ payload, navigation }) => {
    const data = await loginSerivce(payload);
    if (data?.accessToken) {
      setStorageItem('Token', data?.accessToken);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    }
    return data;
  }
);

// Create an async thunk for the register action
export const register = createAsyncThunk<AuthResponse, RegisterPayload>(
  'auth/register',
  async (payload) => {
    const response = await fetch('YOUR_REGISTER_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    const data: AuthResponse = await response.json();
    return data;
  }
);