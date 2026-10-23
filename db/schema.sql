-- Running `npm run db:init` wipes and recreates everything below.

DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
    id         INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    body       TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

INSERT INTO messages (body) VALUES ('Hello from Radio Calico!');
