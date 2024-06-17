export type LoginDto = {
  email: string;
  password: string;
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
};
