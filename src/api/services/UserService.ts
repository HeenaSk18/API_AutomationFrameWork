import { APIRequestContext } from '@playwright/test';
import { ApiClient } from '../core/ApiClient';
//purpose is to use the token obtained during login
export class UserService extends ApiClient //this.get, post
{

    private token: string; //token string, private only this class can use it

constructor(request: APIRequestContext, token: string)
{
    super(request, 'https://dummyjson.com');
    this.token=token; //ABC123

  }
  //Dependency Injection - SOLID Principles
  //https://dummyjson.com/auth/me
  async getProfile()
  {
    return super.get('/auth/me',
        {
            headers: {
                Authorization: `Bearer ${this.token}`
            }//401
        });

  }
}
//Login API
