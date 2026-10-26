import { test as base } from '@playwright/test';
import { ApiClient } from '../core/ApiClient';
import { AuthService } from '../services/AuthService';
import { PostService } from '../services/v122';
import { UserService } from '../services/UserService';

type MyFixtures = {
  userService: UserService;
  postService: PostService;
};

export const test = base.extend<MyFixtures>({
  userService: async ({ request }, use) => {
    const authService = new AuthService(request);
    const token = await authService.login('emilys', 'emilyspass');

    const userService = new UserService(request, token);

    await use(userService);//Fixture execution/call
  },
  postService: async ({ request }, use) => {
    const api = new ApiClient(request, 'https://jsonplaceholder.typicode.com');
    await use(new PostService(api));
  },
});

export { expect } from '@playwright/test';
//uname - incorrect, pwd - correct - token will not generate
//uname - correct, pwd - incorrect - token will not generate
//both incorrect - token will not generate
//token generate - getProfile
//Suite - 45 mins, token - 30 mins
//31st min Suite token - 401 unauthorized
//0-30 mins token is valid - request succeeding
//refresh token -login - retry all requests
//Token (Auth service) -> API Request endpoint

//Token generation - Authservice.ts (correct username & password)
//Token storage - UserService.ts
//TOken expiration - Server
//Token refresh - fixtures is ensuring refresh token - reinforcing the steps from beginning
//401 unauthorized - authentication is missing or invalid or token is invalid