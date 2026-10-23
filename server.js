import express from "express";
import { pool } from "./db/index.js";

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());
app.use(express.static("static"));

app.get("/api/health", async (_req, res) => {
  const { rows } = await pool.query("SHOW server_version");
  res.json({ status: "ok", postgres: rows[0].server_version });
});

app.get("/api/messages", async (_req, res) => {
  const { rows } = await pool.query(
    "SELECT id, body, created_at FROM messages ORDER BY id",
  );
  res.json(rows);
});

app.listen(port, () => {
  console.log(`Radio Calico listening on http://localhost:${port}`);
});
