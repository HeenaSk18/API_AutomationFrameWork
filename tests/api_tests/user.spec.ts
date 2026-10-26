import { test, expect } from '../../src/api/fixtures/apiFixture';
// OR (after alias)
// import { test, expect } from '@api/fixtures/apiFixture';

test('Validate user profile', async ({ userService }) => {
  const response = await userService.getProfile();

  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  expect(body.username).toBe('emilys');
});

//FIRST LAYER
//1. core layer - ApiClient.ts
//click, fill,
//GET, POST, PUT, DELETE


//2. service layer - Token based mechanism
//API - request -> response - user who has made this request is correct/valid - Token
//Request- 10 mins, 20 mins - refresh token
//json.placeholder.typicode.com = free open API
//AuthService - generate access Token
//UserService - token with the rest of APIs

//FIXTURE LAYER (apiFixture.ts)
//TEST LAYER