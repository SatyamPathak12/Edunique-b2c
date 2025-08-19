CREATE TABLE tests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  min_age INT DEFAULT 0,
  max_age INT DEFAULT 100,
  duration_hours INT,
  duration_minutes INT,
  total_points INT NOT NULL,
  pass_points INT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);