import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import { sql, initSchema } from '@/lib/db';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    await initSchema();
    const body = await req.json();
    const id = randomUUID();

    await sql`
      INSERT INTO responses (
        id, plan,
        full_name, role_title, company, industry,
        role_category, years_experience, company_type,
        core_responsibilities, location,
        d1_q1, d1_q2, d1_q3, d1_evidence, d1_calibration,
        d2_q1, d2_q2, d2_q3, d2_evidence, d2_calibration,
        d3_q1, d3_q2, d3_q3, d3_evidence, d3_calibration,
        d4_q1, d4_q2, d4_q3, d4_evidence, d4_calibration,
        d5_q1, d5_q2, d5_q3, d5_evidence, d5_calibration
      ) VALUES (
        ${id}, ${body.plan},
        ${body.full_name}, ${body.role_title}, ${body.company}, ${body.industry},
        ${body.role_category}, ${body.years_experience}, ${body.company_type},
        ${body.core_responsibilities}, ${body.location},
        ${body.d1_q1}, ${body.d1_q2}, ${body.d1_q3}, ${body.d1_evidence}, ${body.d1_calibration},
        ${body.d2_q1}, ${body.d2_q2}, ${body.d2_q3}, ${body.d2_evidence}, ${body.d2_calibration},
        ${body.d3_q1}, ${body.d3_q2}, ${body.d3_q3}, ${body.d3_evidence}, ${body.d3_calibration},
        ${body.d4_q1}, ${body.d4_q2}, ${body.d4_q3}, ${body.d4_evidence}, ${body.d4_calibration},
        ${body.d5_q1}, ${body.d5_q2}, ${body.d5_q3}, ${body.d5_evidence}, ${body.d5_calibration}
      )
    `;

    return NextResponse.json({ ok: true, id });
  } catch (err) {
    console.error('[submit]', err);
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 });
  }
}
