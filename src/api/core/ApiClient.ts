import type { APIRequestContext, APIResponse } from '@playwright/test';

export class ApiClient {
  constructor(
    private readonly request: APIRequestContext,
    private token?: string,
  ) {}

  setToken(token: string): void {
    this.token = token;
  }

  private headers(): Record<string, string> {
    return this.token ? { Authorization: `Bearer ${this.token}` } : {};
  }

  get(url: string, params?: Record<string, string | number | boolean>): Promise<APIResponse> {
    return this.request.get(url, { headers: this.headers(), params });
  }

  post(url: string, data?: unknown): Promise<APIResponse> {
    return this.request.post(url, { headers: this.headers(), data });
  }

  put(url: string, data?: unknown): Promise<APIResponse> {
    return this.request.put(url, { headers: this.headers(), data });
  }

  patch(url: string, data?: unknown): Promise<APIResponse> {
    return this.request.patch(url, { headers: this.headers(), data });
  }

  delete(url: string): Promise<APIResponse> {
    return this.request.delete(url, { headers: this.headers() });
  }
}
