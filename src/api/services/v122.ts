import type { APIResponse } from '@playwright/test';
import { ApiClient } from '../core/ApiClient';

export class PostService {
  constructor(private readonly api: ApiClient) {}

  getAll(userId?: number): Promise<APIResponse> {
    return this.api.get('/posts', userId === undefined ? undefined : { params: { userId } });
  }

  getById(id: number): Promise<APIResponse> {
    return this.api.get(`/posts/${id}`);
  }

  create(payload: { userId: number; title: string; body: string }): Promise<APIResponse> {
    return this.api.post('/posts', payload);
  }
}
