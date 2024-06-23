export type LoginDto = {
  email: string;
  password: string;
};

export type ForgotPasswordDto = {
  email: string;
};

export type ResetPasswordDto = {
  password: string;
  confirmPassword: string;
};

export type RegisterDto = {
  fullName: string;
  username: string;
  email: string;
  password: string;
};

export type AuthUser = {
  id: string;
  fullName: string;
  username: string;
  email: string;
  photoProfile?: string;
  bio?: string;
  coverImage?: string;
  followers: number;
  followings: number;
  createdAt: string;
};
