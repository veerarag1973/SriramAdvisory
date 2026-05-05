import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { sql, initSchema } from '@/lib/db';

export const runtime = 'nodejs';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const cookieStore = await cookies();
  if (cookieStore.get('admin_auth')?.value !== 'yes') {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const { id } = await params;
  await initSchema();
  const rows = await sql`SELECT * FROM responses WHERE id = ${id}`;

  if (!rows.length) return NextResponse.json({ ok: false }, { status: 404 });
  return NextResponse.json(rows[0]);
}
