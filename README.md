# Radio Calico

Local prototype: Express web server + SQLite database, with a simple user
management page.

## Setup

Requires Node.js.

```sh
npm install
cp .env.example .env   # optional: adjust PORT / DATABASE_PATH
npm run db:init        # create the database from db/schema.sql (wipes existing data)
npm run dev            # start with auto-restart on file changes
```

Open http://localhost:3000.

Settings are read from `.env` (git-ignored) via dotenv:

- `PORT`: server port (default `3000`)
- `DATABASE_PATH`: SQLite file (default `data/radio_calico.db`, git-ignored)

## Layout

- `server.js`: Express app and routes
- `db/index.js`: shared SQLite connection (better-sqlite3)
- `db/schema.sql`: table definitions and seed data
- `scripts/init-db.js`: applies `db/schema.sql`
- `static/`: HTML, CSS, JS, images (served at `/`)

## Endpoints

CORS is enabled for all origins.

- `GET /`: user management page
- `GET /api/health`: server and database check
- `GET /api/users`: list users
- `POST /api/users`: create a user from JSON `{ "name": "...", "email": "..." }`
  - `201` with the new user
  - `400` if name or email is missing or the email is invalid
  - `409` if the email is already taken (emails are stored lowercased)

## Python

A Python virtual environment with Flask lives in `venv/` (git-ignored):

```sh
source venv/bin/activate
```
