export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  created_at: Date;
  updated_at: Date;
}

export interface CreateUserDTO {
  email: string;
  password: string;
  name: string;
}

export interface LoginUserDTO {
  email: string;
  password: string;
}

export interface UserResponse {
  id: number;
  email: string;
  name: string;
}
