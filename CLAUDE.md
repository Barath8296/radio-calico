# Radio Calico

## Development server

Express.js is our default webserver for development and testing. Start it with:

- `npm start`: run the server
- `npm run dev`: run with auto-restart on file changes (`node --watch`)

The server listens on http://localhost:3000 (override with `PORT` in `.env`).
Use Express for running and testing the app; the Python `venv/` with Flask is
not the dev server.

`npm run dev` has sometimes missed changes to `server.js` and kept serving old
routes. After editing server code, restart it before testing.

## Database

SQLite via better-sqlite3, stored at `data/radio_calico.db` (override with
`DATABASE_PATH` in `.env`). `npm run db:init` recreates the tables from
`db/schema.sql` and wipes existing data.
