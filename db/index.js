import pg from "pg";

// Defaults connect over the local Unix socket as the current OS user, which
// matches the "barath" Postgres role. Set DATABASE_URL to override.
export const pool = new pg.Pool(
  process.env.DATABASE_URL
    ? { connectionString: process.env.DATABASE_URL }
    : {
        host: process.env.PGHOST ?? "/var/run/postgresql",
        database: process.env.PGDATABASE ?? "radio_calico",
      },
);
