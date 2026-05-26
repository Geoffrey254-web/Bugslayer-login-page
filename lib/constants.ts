export const BRAND = {
  NAME: "BUGSLAYER",
  MOBILE_NAME: "Bugslayer",
  COLOR: "#3F3FF3",
  COPYRIGHT: "Copyright © 2025 Bugslayer Enterprises limited.",
} as const;

export const FORM_VIEWS = {
  LOGIN: "login",
  REGISTER: "register",
  FORGOT: "forgot",
} as const;

export const FORM_MESSAGES = {
  LOGIN: {
    TITLE: "Welcome Back",
    DESCRIPTION: "Enter your email and password to access your account.",
    SUBMIT: "Log In",
  },
  REGISTER: {
    TITLE: "Create Account",
    DESCRIPTION: "Create a new account to get started with Bugslayer.",
    SUBMIT: "Create Account",
  },
  FORGOT: {
    TITLE: "Reset Password",
    DESCRIPTION: "Enter your email address and we'll send you a reset link.",
    SUBMIT: "Send Reset Link",
  },
} as const;

export const OAUTH_PROVIDERS = [
  {
    name: "Google",
    icon: "google",
  },
  {
    name: "Apple",
    icon: "apple",
  },
] as const;

export const INPUT_CLASS = {
  DEFAULT: "h-12 border-gray-200 focus:ring-0 shadow-none rounded-lg bg-white",
  FOCUS: `focus:border-[${BRAND.COLOR}]`,
} as const;
