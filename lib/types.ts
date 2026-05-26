export type FormView = "login" | "register" | "forgot";

export interface LoginFormData {
  email: string;
  password: string;
  remember?: boolean;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ForgotPasswordFormData {
  email: string;
}

export type FormData = LoginFormData | RegisterFormData | ForgotPasswordFormData;
