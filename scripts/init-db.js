// Must be imported first so .env values are set before db/index.js reads them.
import "dotenv/config";
import { readFileSync } from "node:fs";
import { db } from "../db/index.js";

const schema = readFileSync(new URL("../db/schema.sql", import.meta.url), "utf8");

try {
  db.exec(schema);
  console.log(`Initialized database at ${db.name}`);
} finally {
  db.close();
}
