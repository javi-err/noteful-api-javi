
CREATE TABLE IF NOT EXISTS notes (
  id TEXT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  content TEXT NOT NULL,
  folder_id TEXT REFERENCES folders(id) ON DELETE CASCADE NOT NULL,
  modified TIMESTAMPTZ NOT NULL DEFAULT now()
);