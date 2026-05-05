import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { sql, initSchema } from '@/lib/db';

export const runtime = 'nodejs';

export async function GET() {
  const cookieStore = await cookies();
  if (cookieStore.get('admin_auth')?.value !== 'yes') {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  await initSchema();
  const rows = await sql`
    SELECT id, created_at, plan, full_name, role_title, company, industry,
           role_category, years_experience, company_type, location,
           d1_q1, d1_q2, d1_q3,
           d2_q1, d2_q2, d2_q3,
           d3_q1, d3_q2, d3_q3,
           d4_q1, d4_q2, d4_q3,
           d5_q1, d5_q2, d5_q3
    FROM responses ORDER BY created_at DESC
  `;

  return NextResponse.json(rows);
}
