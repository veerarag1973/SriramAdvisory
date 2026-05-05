import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { sql, initSchema } from '@/lib/db';
import AdminDetailClient from './_detail';

export const dynamic = 'force-dynamic';

export default async function AdminDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const cookieStore = await cookies();
  if (cookieStore.get('admin_auth')?.value !== 'yes') {
    redirect('/admin');
  }

  const { id } = await params;
  await initSchema();
  const rows = await sql`SELECT * FROM responses WHERE id = ${id}` as Record<string, unknown>[];
  const row = rows[0];

  if (!row) redirect('/admin');

  return <AdminDetailClient row={row} />;
}
