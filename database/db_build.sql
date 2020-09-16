BEGIN;

    DROP TABLE IF EXISTS users, spells
    CASCADE;


CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    username VARCHAR(225) NOT NULL UNIQUE,
    password TEXT NOT NULL,
);

CREATE TABLE spells
(
    id SERIAL PRIMARY KEY,
    author_id INTEGER REFERENCES users(id),
    spell_name TEXT NOT NULL,
    post_date DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO users (username, password) VALUES 
    ("shivani", "ilikebooks"),
    ("meeran", "ilikerunescape");

INSERT INTO facts (author_id, spell_name) VALUES 
    (1, "Incendio"),
    (2, "Expelliamus");

COMMIT;