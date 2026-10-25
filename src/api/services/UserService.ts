import type { APIResponse } from '@playwright/test';
import { ApiClient } from '../core/ApiClient';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone?: string;
  website?: string;
}

export type CreateUserPayload = Omit<User, 'id'>;

export class UserService {
  constructor(private readonly api: ApiClient) {}

  getAll(): Promise<APIResponse> {
    return this.api.get('/users');
  }

  getById(id: number): Promise<APIResponse> {
    return this.api.get(`/users/${id}`);
  }

  create(payload: CreateUserPayload): Promise<APIResponse> {
    return this.api.post('/users', payload);
  }

  update(id: number, payload: Partial<User>): Promise<APIResponse> {
    return this.api.put(`/users/${id}`, payload);
  }

  remove(id: number): Promise<APIResponse> {
    return this.api.delete(`/users/${id}`);
  }
}
