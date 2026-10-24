// Must be imported first so .env values are set before db/index.js reads them.
import "dotenv/config";
import cors from "cors";
import express from "express";
import { db } from "./db/index.js";

const app = express();
const port = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("static"));

app.get("/api/health", (_req, res) => {
  const { version } = db.prepare("SELECT sqlite_version() AS version").get();
  res.json({ status: "ok", sqlite: version });
});

app.get("/api/users", (_req, res) => {
  const users = db
    .prepare("SELECT id, name, email, created_at FROM users ORDER BY id")
    .all();
  res.json(users);
});

app.post("/api/users", (req, res) => {
  const { name: rawName, email: rawEmail } = req.body ?? {};
  const name = typeof rawName === "string" ? rawName.trim() : "";
  const email = typeof rawEmail === "string" ? rawEmail.trim().toLowerCase() : "";
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Email address is not valid." });
  }

  try {
    const user = db
      .prepare(
        "INSERT INTO users (name, email) VALUES (?, ?) RETURNING id, name, email, created_at",
      )
      .get(name, email);
    res.status(201).json(user);
  } catch (err) {
    if (err.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return res.status(409).json({ error: "A user with that email already exists." });
    }
    throw err;
  }
});

app.listen(port, () => {
  console.log(`Radio Calico listening on http://localhost:${port}`);
});
