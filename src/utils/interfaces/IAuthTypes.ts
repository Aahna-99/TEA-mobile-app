// Define the payload types for login and register actions
export interface LoginPayload {
  email: string;
  password: string;
  account: string;
  callbackUrl: string;
}

export interface RegisterPayload {
  email: string;
  password: string;
  account: string;
  firstName: string;
  lastName: string;
  callbackUrl: string;
}

// Define the response type from the server
export interface AuthResponse {
  accessToken: string;
  hasAcceptedApprisePolicy: boolean;
  email: string;
  name: string;
  requirePasswordUpdate: boolean;
  userId: string;
  status: boolean;
}

// Define the initial state and its type
export interface AuthState {
  access_token: string;
  has_accepted_apprise_policy: boolean;
  email: string;
  name: string;
  require_password_update: boolean;
  user_id: string;
  status: boolean;
  loading: boolean;
  error: string | null;
}
