# Radio Calico

Local prototype: Express web server + PostgreSQL database.

## Setup

Requires Node.js and a local PostgreSQL with a `radio_calico` database owned by
a role matching your OS username.

```sh
npm install
npm run db:init   # create tables from db/schema.sql (wipes existing data)
npm run dev       # start with auto-restart on file changes
```

Open http://localhost:3000.

By default the app connects over the Unix socket at `/var/run/postgresql`.
Override with `DATABASE_URL` (e.g. `postgresql://user:pass@localhost/radio_calico`),
or with `PGHOST` / `PGDATABASE`. Change the port with `PORT`.

## Layout

- `server.js`: Express app and routes
- `db/index.js`: shared Postgres connection pool
- `db/schema.sql`: table definitions and seed data
- `scripts/init-db.js`: applies `db/schema.sql`
- `static/`: HTML, CSS, JS, images (served at `/`)

## Endpoints

- `/`: home page
- `/api/health`: server and database check
- `/api/messages`: sample table as JSON
