import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login, register } from './authThunks';
import { AuthState, AuthResponse } from '../../utils/interfaces/IAuthTypes';
import { getStorageItem } from '../../utils/Storage';

const initialState: AuthState = {
  access_token: '',
  has_accepted_apprise_policy: false,
  email: '',
  name: '',
  require_password_update: false,
  user_id: '',
  status: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.access_token = action.payload ? getStorageItem('Token') : '';
    },
    logout: (state) => {
      state.access_token = '';
      state.has_accepted_apprise_policy = false;
      state.email = '';
      state.name = '';
      state.require_password_update = false;
      state.user_id = '';
      state.status = false;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.access_token = action.payload.accessToken;
        state.has_accepted_apprise_policy = action.payload.hasAcceptedApprisePolicy;
        state.email = action.payload.email;
        state.name = action.payload.name;
        state.require_password_update = action.payload.requirePasswordUpdate;
        state.user_id = action.payload.userId;
        state.status = action.payload.status;
        state.loading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Login failed';
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.access_token = action.payload.accessToken;
        state.has_accepted_apprise_policy = action.payload.hasAcceptedApprisePolicy;
        state.email = action.payload.email;
        state.name = action.payload.name;
        state.require_password_update = action.payload.requirePasswordUpdate;
        state.user_id = action.payload.userId;
        state.status = action.payload.status;
        state.loading = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Registration failed';
      });
  },
});

export const { logout, setAuthenticated } = authSlice.actions;

export default authSlice.reducer;