import express from "express";
import { db } from "./db/index.js";

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());
app.use(express.static("static"));

app.get("/api/health", (_req, res) => {
  const { version } = db.prepare("SELECT sqlite_version() AS version").get();
  res.json({ status: "ok", sqlite: version });
});

app.get("/api/messages", (_req, res) => {
  const rows = db
    .prepare("SELECT id, body, created_at FROM messages ORDER BY id")
    .all();
  res.json(rows);
});

app.listen(port, () => {
  console.log(`Radio Calico listening on http://localhost:${port}`);
});
