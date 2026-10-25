# API Test Plan

| Area | Endpoints | Scenarios |
|---|---|---|
| Users | `GET /users`, `GET /users/{id}`, `POST /users`, `PUT /users/{id}`, `DELETE /users/{id}` | List users, retrieve an existing or missing user, create, update, and delete |
| Posts | `GET /posts`, `GET /posts/{id}`, `POST /posts` | Filter by user, retrieve a post, create a post, and check response time |
| Auth | `POST /login` | Reject failed login responses and store a returned bearer token |
