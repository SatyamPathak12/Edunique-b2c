CREATE TABLE options (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id UUID REFERENCES questions(id) ON DELETE CASCADE,
  option_text TEXT,
  image_url TEXT, -- Optional image for option
  option_index INT CHECK (option_index >= 1 AND option_index <= 10), -- Index like 1 for A, 2 for B
  created_at TIMESTAMPTZ DEFAULT NOW()
);