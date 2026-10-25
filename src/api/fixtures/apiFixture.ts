import { test as base, expect } from '@playwright/test';
import { ApiClient } from '../core/ApiClient';
import { AuthService } from '../services/AuthService';
import { PostService } from '../services/v122';
import { UserService } from '../services/UserService';

type ApiFixtures = {
  api: ApiClient;
  authService: AuthService;
  userService: UserService;
  postService: PostService;
};

export const test = base.extend<ApiFixtures>({
  api: async ({ request }, use) => {
    await use(new ApiClient(request, process.env.API_TOKEN || undefined));
  },
  authService: async ({ api }, use) => {
    await use(new AuthService(api));
  },
  userService: async ({ api }, use) => {
    await use(new UserService(api));
  },
  postService: async ({ api }, use) => {
    await use(new PostService(api));
  },
});

export { expect };
