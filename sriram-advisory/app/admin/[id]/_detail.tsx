'use client';
import Link from 'next/link';

type Row = Record<string, unknown>;

function avg3(a: unknown, b: unknown, c: unknown) {
  const n = [a, b, c].map(Number).filter(x => !isNaN(x) && x > 0);
  return n.length ? n.reduce((s, x) => s + x, 0) / n.length : null;
}

function scoreBar(val: number, max = 10) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ flex: 1, height: 8, background: '#E0E5F0', borderRadius: 4, overflow: 'hidden' }}>
        <div style={{ width: `${(val / max) * 100}%`, height: '100%', background: '#2D5BE3', borderRadius: 4 }} />
      </div>
      <span style={{ fontWeight: 700, fontSize: 14, color: '#1B2D52', minWidth: 28 }}>{val.toFixed(1)}</span>
    </div>
  );
}

function DimCard({ icon, num, name, weight, q1, q2, q3, evidence, calibration, protective }: {
  icon: string; num: number; name: string; weight: string; protective?: boolean;
  q1: unknown; q2: unknown; q3: unknown; evidence: unknown; calibration: unknown;
}) {
  const a = avg3(q1, q2, q3);
  const questions = [
    { label: 'Q1', val: q1 },
    { label: 'Q2', val: q2 },
    { label: 'Q3', val: q3 },
  ];

  return (
    <div style={{ background: '#fff', borderRadius: 12, border: `1.5px solid ${protective ? '#2DB887' : '#E0E5F0'}`, padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: protective ? '#0A6B55' : '#2D5BE3', textTransform: 'uppercase', marginBottom: 4 }}>
            {icon} D{num} · {weight} {protective ? '· ★ Protective' : ''}
          </div>
          <div style={{ fontWeight: 700, fontSize: 16, color: '#1B2D52' }}>{name}</div>
        </div>
        {a !== null && (
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1B2D52', fontFamily: 'var(--font-playfair),Georgia,serif', lineHeight: 1 }}>{a.toFixed(1)}</div>
            <div style={{ fontSize: 11, color: '#7080A0' }}>avg</div>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
        {questions.map(q => (
          <div key={q.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#7080A0', minWidth: 20 }}>{q.label}</span>
            <div style={{ flex: 1 }}>
              {Number(q.val) > 0 ? scoreBar(Number(q.val)) : <span style={{ fontSize: 13, color: '#A0AECA' }}>Not answered</span>}
            </div>
          </div>
        ))}
      </div>

      {evidence && (
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#46567A', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>Evidence</div>
          <div style={{ fontSize: 13, color: '#46567A', background: '#F7F8FC', borderRadius: 8, padding: '10px 12px', lineHeight: 1.6 }}>{evidence as string}</div>
        </div>
      )}
      {calibration && (
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#46567A', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>Calibration</div>
          <div style={{ fontSize: 13, color: '#46567A', background: '#F7F8FC', borderRadius: 8, padding: '10px 12px', lineHeight: 1.6 }}>{calibration as string}</div>
        </div>
      )}
    </div>
  );
}

export default function AdminDetailClient({ row }: { row: Row }) {
  const d1 = avg3(row.d1_q1, row.d1_q2, row.d1_q3) ?? 0;
  const d2 = avg3(row.d2_q1, row.d2_q2, row.d2_q3) ?? 0;
  const d3 = avg3(row.d3_q1, row.d3_q2, row.d3_q3) ?? 0;
  const d4 = avg3(row.d4_q1, row.d4_q2, row.d4_q3) ?? 0;
  const d5 = avg3(row.d5_q1, row.d5_q2, row.d5_q3) ?? 0;
  const score = d1 * 0.25 + d2 * 0.25 + d3 * 0.20 + (10 - d4) * 0.15 + (10 - d5) * 0.15;

  function tierInfo(s: number) {
    if (s <= 2.9) return { label: 'Structural Safety', color: '#0A6B55', bg: '#EDFAF5', desc: 'Low risk. Build deeper moats.' };
    if (s <= 5.5) return { label: 'Transitional Zone', color: '#7A5000', bg: '#FFF8E8', desc: 'Moderate risk. Act in the next 12 months.' };
    if (s <= 7.9) return { label: 'Active Risk', color: '#B8510A', bg: '#FFF0E5', desc: 'Significant risk. Repositioning needed now.' };
    return { label: 'Immediate Risk', color: '#B00020', bg: '#FEE', desc: 'Critical. Urgent structural moves required.' };
  }

  const tier = tierInfo(score);
  const date = new Date(row.created_at as string).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div style={{ minHeight: '100vh', background: '#F7F8FC', fontFamily: 'var(--font-dm-sans),sans-serif' }}>
      {/* Header */}
      <div style={{ background: '#1B2D52', padding: '16px 32px', display: 'flex', alignItems: 'center', gap: 16 }}>
        <Link href="/admin" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, textDecoration: 'none' }}>← Back</Link>
        <div style={{ fontFamily: 'var(--font-playfair),Georgia,serif', fontSize: 18, fontWeight: 700, color: '#fff' }}>Response Detail</div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 24px' }}>

        {/* Profile card */}
        <div style={{ background: '#fff', borderRadius: 14, border: '1px solid #E0E5F0', padding: '32px', marginBottom: 24, display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: '#7080A0', textTransform: 'uppercase', marginBottom: 8 }}>Submitted {date}</div>
            <div style={{ fontFamily: 'var(--font-playfair),Georgia,serif', fontSize: 26, fontWeight: 700, color: '#1B2D52', marginBottom: 4 }}>{row.full_name as string}</div>
            <div style={{ fontSize: 15, color: '#46567A', marginBottom: 2 }}>{row.role_title as string}</div>
            <div style={{ fontSize: 14, color: '#7080A0' }}>{row.company as string} · {row.industry as string}</div>
            <div style={{ display: 'flex', gap: 12, marginTop: 16, flexWrap: 'wrap' }}>
              {[row.role_category, row.years_experience, row.company_type, row.location].filter(Boolean).map(v => (
                <span key={v as string} style={{ background: '#F0F2F7', borderRadius: 100, padding: '4px 12px', fontSize: 12, color: '#46567A' }}>{v as string}</span>
              ))}
            </div>
            {row.core_responsibilities && (
              <div style={{ marginTop: 16, fontSize: 13, color: '#46567A', lineHeight: 1.6 }}>
                <strong style={{ color: '#1B2D52' }}>Core responsibilities:</strong> {row.core_responsibilities as string}
              </div>
            )}
          </div>

          {/* Score */}
          <div style={{ textAlign: 'center', minWidth: 140 }}>
            <div style={{ fontSize: 64, fontWeight: 800, color: '#1B2D52', fontFamily: 'var(--font-playfair),Georgia,serif', lineHeight: 1 }}>
              {score.toFixed(1)}
            </div>
            <div style={{ fontSize: 12, color: '#7080A0', marginBottom: 12 }}>SA-AIRS™ Score</div>
            <div style={{ background: tier.bg, color: tier.color, borderRadius: 8, padding: '8px 16px', fontWeight: 700, fontSize: 13 }}>{tier.label}</div>
            <div style={{ fontSize: 12, color: '#7080A0', marginTop: 8, lineHeight: 1.5, maxWidth: 140 }}>{tier.desc}</div>
          </div>
        </div>

        {/* Score summary bar */}
        <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #E0E5F0', padding: '24px', marginBottom: 24 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: '#1B2D52', marginBottom: 20 }}>Dimension Breakdown</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { label: 'D1 Task Repetition', val: d1, pct: '25%' },
              { label: 'D2 Automation Feasibility', val: d2, pct: '25%' },
              { label: 'D3 Market Saturation', val: d3, pct: '20%' },
              { label: 'D4 Decision Complexity ★', val: d4, pct: '15%' },
              { label: 'D5 Human Context ★', val: d5, pct: '15%' },
            ].map(d => (
              <div key={d.label} style={{ display: 'grid', gridTemplateColumns: '200px 1fr 40px', alignItems: 'center', gap: 12 }}>
                <div style={{ fontSize: 13, color: '#46567A' }}>{d.label}</div>
                {scoreBar(d.val)}
                <div style={{ fontSize: 11, color: '#A0AECA' }}>{d.pct}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Dimension cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 16 }}>
          <DimCard icon="↺" num={1} name="Task Repetition Level" weight="25%" q1={row.d1_q1} q2={row.d1_q2} q3={row.d1_q3} evidence={row.d1_evidence} calibration={row.d1_calibration} />
          <DimCard icon="⚡" num={2} name="Automation Feasibility" weight="25%" q1={row.d2_q1} q2={row.d2_q2} q3={row.d2_q3} evidence={row.d2_evidence} calibration={row.d2_calibration} />
          <DimCard icon="◎" num={3} name="Market Saturation" weight="20%" q1={row.d3_q1} q2={row.d3_q2} q3={row.d3_q3} evidence={row.d3_evidence} calibration={row.d3_calibration} />
          <DimCard icon="⬡" num={4} name="Decision Complexity" weight="15%" protective q1={row.d4_q1} q2={row.d4_q2} q3={row.d4_q3} evidence={row.d4_evidence} calibration={row.d4_calibration} />
          <DimCard icon="◈" num={5} name="Human Context Dependency" weight="15%" protective q1={row.d5_q1} q2={row.d5_q2} q3={row.d5_q3} evidence={row.d5_evidence} calibration={row.d5_calibration} />
        </div>

        <div style={{ marginTop: 24, fontSize: 12, color: '#A0AECA', textAlign: 'center' }}>
          Response ID: {row.id as string} · Plan: {row.plan as string}
        </div>
      </div>
    </div>
  );
}
