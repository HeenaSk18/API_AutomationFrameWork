import { APIRequestContext, expect } from '@playwright/test';
import { ApiClient } from '../core/ApiClient';

export class AuthService extends ApiClient
{
  private token:string | null = null;

  constructor(request:APIRequestContext)
  {
    super(request, 'https://dummyjson.com');
  }

  async login(username: string, password: string): Promise<string>
  {
  const response = await this.post('/auth/login',
    {
      username,
      password
    });
    const body = await response.json();
    console.log('Login Response:', body);
      if (!body.accessToken) {
    throw new Error('Token not received');
      }
  this.token = body.accessToken;
  console.log('Token Generated:', this.token);
  return this.token!;
  }
}















//create Auth service class -> calls APiClient constructor - Store Base URL ->
//call login() -> Post() - Receive response -> check accessToken
//1 . if token goes missing - throw error
//2. if token is present - save token - return token