# API Automation Framework

## Setup

Install dependencies with `npm install`. No Playwright browser installation is needed for API tests.

Set `BASE_URL` and, when needed, `API_TOKEN` in `.env`.

## Commands

- `npm run typecheck` — check TypeScript types.
- `npm test` — run the full test suite.
- `npm run report` — open the latest HTML report.
- `npm run test:users` — run the user API tests.
- `npm run test:posts` — run the JSONPlaceholder posts tests.
- `npm run test:ui` — open the Playwright test UI.

## Folder structure

- `src/api/core` contains the shared API client.
- `src/api/services` contains endpoint-specific services.
- `src/api/fixtures` wires services into Playwright tests.
- `tests/api_tests` and `tests` contain the API test suites.
- `specs` contains the test plan.
- `.github/workflows` contains CI configuration.
