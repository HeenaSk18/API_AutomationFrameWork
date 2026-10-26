import { APIRequestContext } from "@playwright/test";

// Call in Playwright - API -> HTTP
export class ApiClient {
  protected request: APIRequestContext;
  protected baseURL: string;
  //readonly - properties cannot be changed
  //NOT having value - NOT having value through my framework

  constructor(request: APIRequestContext, baseURL: string) {
    this.request = request;
    this.baseURL = baseURL;
  }


  async get(
    endpoint: string,
    options?: {
      headers?: Record<string, string>;
      params?: Record<string, string | number | boolean>;
    },
  ) {
    return this.request.get(`${this.baseURL}${endpoint}`, {
      headers: options?.headers,
      params: options?.params,
    });
  }
  async post(endpoint: string, data?: Record<string, unknown>) {
    return this.request.post(`${this.baseURL}${endpoint}`, {
      data,
    });
  }
}
