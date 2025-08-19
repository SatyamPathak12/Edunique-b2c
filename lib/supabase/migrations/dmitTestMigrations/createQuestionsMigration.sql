CREATE TABLE questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  test_id UUID REFERENCES tests(id) ON DELETE CASCADE,
  question_text TEXT NOT NULL,
  image_url TEXT, -- Optional image for the question (JPEG/PNG)
  points INT NOT NULL,
  category TEXT,
  number_of_options INT NOT NULL,
  tips TEXT,
  correct_option_id UUID, -- FK to options(id), nullable initially, updated after options inserted
  created_at TIMESTAMPTZ DEFAULT NOW()
);