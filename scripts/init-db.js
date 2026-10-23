import { readFile } from "node:fs/promises";
import { pool } from "../db/index.js";

const schema = await readFile(new URL("../db/schema.sql", import.meta.url), "utf8");

try {
  await pool.query(schema);
  const { rows } = await pool.query("SELECT current_database() AS db");
  console.log(`Initialized database ${rows[0].db}`);
} finally {
  await pool.end();
}
