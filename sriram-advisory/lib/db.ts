import { neon } from '@neondatabase/serverless';

export function sql(...args: Parameters<ReturnType<typeof neon>>) {
  const url = process.env.DATABASE_URL;
  if (!url || url.startsWith('postgresql://user:password')) {
    throw new Error('DATABASE_URL is not configured. Set it in .env.local or Vercel env vars.');
  }
  return neon(url)(...args);
}

export async function initSchema() {
  await sql`
    CREATE TABLE IF NOT EXISTS responses (
      id              TEXT PRIMARY KEY,
      created_at      TIMESTAMPTZ DEFAULT NOW(),
      plan            TEXT,

      full_name             TEXT,
      role_title            TEXT,
      company               TEXT,
      industry              TEXT,
      role_category         TEXT,
      years_experience      TEXT,
      company_type          TEXT,
      core_responsibilities TEXT,
      location              TEXT,

      d1_q1           INTEGER,
      d1_q2           INTEGER,
      d1_q3           INTEGER,
      d1_evidence     TEXT,
      d1_calibration  TEXT,

      d2_q1           INTEGER,
      d2_q2           INTEGER,
      d2_q3           INTEGER,
      d2_evidence     TEXT,
      d2_calibration  TEXT,

      d3_q1           INTEGER,
      d3_q2           INTEGER,
      d3_q3           INTEGER,
      d3_evidence     TEXT,
      d3_calibration  TEXT,

      d4_q1           INTEGER,
      d4_q2           INTEGER,
      d4_q3           INTEGER,
      d4_evidence     TEXT,
      d4_calibration  TEXT,

      d5_q1           INTEGER,
      d5_q2           INTEGER,
      d5_q3           INTEGER,
      d5_evidence     TEXT,
      d5_calibration  TEXT
    )
  `;
}
