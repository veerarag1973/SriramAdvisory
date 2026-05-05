'use client';
import { useRouter } from 'next/navigation';

type Row = Record<string, unknown> & { score: number | null };

function tierLabel(score: number | null) {
  if (score === null) return { label: '—', color: '#7080A0', bg: '#F0F2F7' };
  if (score <= 2.9) return { label: 'Structural Safety', color: '#0A6B55', bg: '#EDFAF5' };
  if (score <= 5.5) return { label: 'Transitional Zone', color: '#7A5000', bg: '#FFF8E8' };
  if (score <= 7.9) return { label: 'Active Risk', color: '#B8510A', bg: '#FFF0E5' };
  return { label: 'Immediate Risk', color: '#B00020', bg: '#FEE' };
}

function planBadge(plan: string) {
  if (plan === 'free') return { label: 'Free', color: '#0A6B55', bg: '#EDFAF5' };
  if (plan === 'report') return { label: 'Report', color: '#1B2D52', bg: '#E8EDF8' };
  return { label: 'Advisory', color: '#7A5000', bg: '#FFF8E8' };
}

export default function AdminTable({ rows }: { rows: Row[] }) {
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    router.refresh();
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F7F8FC', fontFamily: 'var(--font-dm-sans),sans-serif' }}>
      {/* Header */}
      <div style={{ background: '#1B2D52', padding: '16px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-playfair),Georgia,serif', fontSize: 20, fontWeight: 700, color: '#fff' }}>
            SA-AIRS™ Admin
          </div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>Response Dashboard</div>
        </div>
        <button onClick={handleLogout} style={{
          background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: 8, padding: '8px 16px', fontSize: 13, cursor: 'pointer',
        }}>Log out</button>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 24px' }}>
        {/* Stats row */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 32, flexWrap: 'wrap' }}>
          {[
            { label: 'Total Responses', value: rows.length },
            { label: 'Free', value: rows.filter(r => r.plan === 'free').length },
            { label: 'Full Report', value: rows.filter(r => r.plan === 'report').length },
            { label: 'Advisory', value: rows.filter(r => r.plan === 'advisory').length },
          ].map(s => (
            <div key={s.label} style={{ background: '#fff', borderRadius: 10, padding: '16px 24px', border: '1px solid #E0E5F0', minWidth: 120 }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#1B2D52', fontFamily: 'var(--font-playfair),Georgia,serif' }}>{s.value}</div>
              <div style={{ fontSize: 12, color: '#7080A0', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {rows.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: '#7080A0', fontSize: 15 }}>
            No responses yet. Share the assessment link to get started.
          </div>
        ) : (
          <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #E0E5F0', overflow: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #E0E5F0', background: '#F7F8FC' }}>
                  {['Date', 'Name', 'Role', 'Company', 'Plan', 'Score', 'Tier', ''].map(h => (
                    <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700, color: '#46567A', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map(row => {
                  const tier = tierLabel(row.score);
                  const plan = planBadge(row.plan as string);
                  const date = new Date(row.created_at as string).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
                  return (
                    <tr key={row.id as string}
                      style={{ borderBottom: '1px solid #F0F2F7', cursor: 'pointer' }}
                      onClick={() => router.push(`/admin/${row.id}`)}
                      onMouseEnter={e => (e.currentTarget.style.background = '#F7F8FC')}
                      onMouseLeave={e => (e.currentTarget.style.background = '')}
                    >
                      <td style={{ padding: '14px 16px', color: '#7080A0', whiteSpace: 'nowrap' }}>{date}</td>
                      <td style={{ padding: '14px 16px', fontWeight: 600, color: '#1B2D52' }}>{row.full_name as string}</td>
                      <td style={{ padding: '14px 16px', color: '#46567A' }}>{row.role_title as string}</td>
                      <td style={{ padding: '14px 16px', color: '#46567A' }}>{row.company as string}</td>
                      <td style={{ padding: '14px 16px' }}>
                        <span style={{ background: plan.bg, color: plan.color, borderRadius: 100, padding: '3px 10px', fontSize: 11, fontWeight: 700 }}>
                          {plan.label}
                        </span>
                      </td>
                      <td style={{ padding: '14px 16px', fontWeight: 800, fontSize: 16, color: '#1B2D52', fontFamily: 'var(--font-playfair),Georgia,serif' }}>
                        {row.score ?? '—'}
                      </td>
                      <td style={{ padding: '14px 16px' }}>
                        <span style={{ background: tier.bg, color: tier.color, borderRadius: 100, padding: '3px 10px', fontSize: 11, fontWeight: 700, whiteSpace: 'nowrap' }}>
                          {tier.label}
                        </span>
                      </td>
                      <td style={{ padding: '14px 16px', color: '#2D5BE3', fontWeight: 600, whiteSpace: 'nowrap' }}>View →</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
