-- Running `npm run db:init` wipes and recreates everything below.

DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    body       TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

INSERT INTO messages (body) VALUES ('Hello from Radio Calico!');
