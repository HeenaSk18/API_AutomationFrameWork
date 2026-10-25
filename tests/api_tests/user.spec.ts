import { test, expect } from '@api/fixtures/apiFixture';

test.describe('Users API', () => {
  test('GET /users returns 10 users with email properties', async ({ userService }) => {
    const response = await userService.getAll();
    expect(response.status()).toBe(200);

    const users: Array<{ email?: string }> = await response.json();
    expect(users).toHaveLength(10);
    expect(users.every((user) => 'email' in user)).toBe(true);
  });

  test('GET /users/1 returns the expected user', async ({ userService }) => {
    const response = await userService.getById(1);
    expect(response.status()).toBe(200);
    expect(await response.json()).toMatchObject({ id: 1, username: 'Bret' });
  });

  test('GET /users/9999 returns 404', async ({ userService }) => {
    const response = await userService.getById(9999);
    expect(response.status()).toBe(404);
  });

  test('POST /users creates and returns the user', async ({ userService }) => {
    const payload = {
      name: 'Test User',
      username: 'testuser',
      email: 'test@example.com',
    };
    const response = await userService.create(payload);
    expect(response.status()).toBe(201);

    const user = await response.json();
    expect(user).toMatchObject(payload);
    expect(typeof user.id).toBe('number');
  });

  test('PUT /users/1 updates the user name', async ({ userService }) => {
    const response = await userService.update(1, { name: 'Updated User' });
    expect(response.status()).toBe(200);
    expect(await response.json()).toMatchObject({ name: 'Updated User' });
  });

  test('DELETE /users/1 removes the user', async ({ userService }) => {
    const response = await userService.remove(1);
    expect(response.status()).toBe(200);
  });
});
