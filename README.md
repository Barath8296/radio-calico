# Radio Calico

Local prototype: Express web server + SQLite database.

## Setup

Requires Node.js.

```sh
npm install
npm run db:init   # create data/radio_calico.db from db/schema.sql (wipes existing data)
npm run dev       # start with auto-restart on file changes
```

Open http://localhost:3000.

The database lives in `data/radio_calico.db` (git-ignored). Point it elsewhere
with `DATABASE_PATH`. Change the port with `PORT`.

## Layout

- `server.js`: Express app and routes
- `db/index.js`: shared SQLite connection (better-sqlite3)
- `db/schema.sql`: table definitions and seed data
- `scripts/init-db.js`: applies `db/schema.sql`
- `static/`: HTML, CSS, JS, images (served at `/`)

## Endpoints

- `/`: home page
- `/api/health`: server and database check
- `/api/messages`: sample table as JSON
