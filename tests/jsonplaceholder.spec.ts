import { test, expect } from '@api/fixtures/apiFixture';

test.describe('JSONPlaceholder posts', () => {
  test('filters posts by userId', async ({ postService }) => {
    const response = await postService.getAll(1);
    expect(response.status()).toBe(200);

    const posts: Array<{ userId: number }> = await response.json();
    expect(posts.length).toBeGreaterThan(0);
    expect(posts.every((post) => post.userId === 1)).toBe(true);
  });

  test('GET /posts/1 returns a post with the expected shape', async ({ postService }) => {
    const response = await postService.getById(1);
    expect(response.status()).toBe(200);
    expect(await response.json()).toEqual({
      userId: expect.any(Number),
      id: 1,
      title: expect.any(String),
      body: expect.any(String),
    });
  });

  test('POST /posts creates and returns the post', async ({ postService }) => {
    const payload = { userId: 1, title: 'Test post', body: 'Post body' };
    const response = await postService.create(payload);
    expect(response.status()).toBe(201);
    expect(await response.json()).toMatchObject(payload);
  });

  test('GET /posts finishes in under 2000 ms', async ({ postService }) => {
    const warmupResponse = await postService.getAll();
    expect(warmupResponse.status()).toBe(200);

    const startedAt = Date.now();
    const response = await postService.getAll();
    const elapsed = Date.now() - startedAt;

    expect(response.status()).toBe(200);
    expect(elapsed).toBeLessThan(2000);
  });
});
