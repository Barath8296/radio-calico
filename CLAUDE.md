# Radio Calico

## Architecture

The app has two parts:

- **Webserver: Express.js.** Serves the site (`static/`) and is our default
  webserver for development and testing.
- **Backend: Flask + SQLite.** Handles the API and database access. Flask is
  installed in the Python virtual environment at `venv/`
  (`source venv/bin/activate`).

Current state: the Flask backend has not been built yet. The users API
(`/api/users`) and SQLite access still live in the Express app (`server.js`,
`db/`) until they are moved to Flask.

Planned future architecture: Express serves the site; a Flask API with SQLite will come later.

## Development server (Express)

- `npm start`: run the server
- `npm run dev`: run with auto-restart on file changes (`node --watch`)

The server listens on http://localhost:3000 (override with `PORT` in `.env`).

`npm run dev` has sometimes missed changes to `server.js` and kept serving old
routes. After editing server code, restart it before testing.

## Database (SQLite)

Stored at `data/radio_calico.db` (override with `DATABASE_PATH` in `.env`).
`npm run db:init` recreates the tables from `db/schema.sql` and wipes existing
data. Express currently accesses it through better-sqlite3.
