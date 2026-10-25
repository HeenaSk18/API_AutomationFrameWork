import { ApiClient } from '../core/ApiClient';

export class AuthService {
  constructor(private readonly api: ApiClient) {}

  async login(email: string, password: string): Promise<string> {
    const response = await this.api.post('/login', { email, password });

    if (!response.ok()) {
      throw new Error(`Login failed with status ${response.status()}`);
    }

    const result: { token: string } = await response.json();
    this.api.setToken(result.token);
    return result.token;
  }
}
