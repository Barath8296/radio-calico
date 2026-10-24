import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
import Database from "better-sqlite3";

// The database is a single file, created on first use. Set DATABASE_PATH to
// point somewhere else.
const path = process.env.DATABASE_PATH ?? "data/radio_calico.db";
mkdirSync(dirname(path), { recursive: true });

export const db = new Database(path);
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");
