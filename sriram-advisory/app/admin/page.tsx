import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { sql, initSchema } from '@/lib/db';
import AdminLoginClient from './_login';
import AdminTable from './_table';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const cookieStore = await cookies();
  const authed = cookieStore.get('admin_auth')?.value === 'yes';

  if (!authed) return <AdminLoginClient />;

  await initSchema();
  const rows = await sql`
    SELECT id, created_at, plan, full_name, role_title, company, industry,
           role_category, years_experience,
           d1_q1, d1_q2, d1_q3,
           d2_q1, d2_q2, d2_q3,
           d3_q1, d3_q2, d3_q3,
           d4_q1, d4_q2, d4_q3,
           d5_q1, d5_q2, d5_q3
    FROM responses ORDER BY created_at DESC
  ` as Record<string, unknown>[];

  // Compute quick score for each row
  const rowsWithScore = rows.map(r => {
    const avg = (a: number, b: number, c: number) => (a + b + c) / 3;
    const d1 = avg(r.d1_q1 as number, r.d1_q2 as number, r.d1_q3 as number);
    const d2 = avg(r.d2_q1 as number, r.d2_q2 as number, r.d2_q3 as number);
    const d3 = avg(r.d3_q1 as number, r.d3_q2 as number, r.d3_q3 as number);
    const d4 = avg(r.d4_q1 as number, r.d4_q2 as number, r.d4_q3 as number);
    const d5 = avg(r.d5_q1 as number, r.d5_q2 as number, r.d5_q3 as number);
    const score = d1 * 0.25 + d2 * 0.25 + d3 * 0.20 + (10 - d4) * 0.15 + (10 - d5) * 0.15;
    return { ...r, score: isNaN(score) ? null : Math.round(score * 10) / 10 };
  });

  return <AdminTable rows={rowsWithScore} />;
}
