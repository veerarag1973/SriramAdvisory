'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

// ─── Types ───────────────────────────────────────────────────────────────────

interface FormData {
  plan: string;
  // Section A
  full_name: string; role_title: string; company: string; industry: string;
  role_category: string; years_experience: string; company_type: string;
  core_responsibilities: string; location: string;
  // Scores
  d1_q1: number; d1_q2: number; d1_q3: number;
  d1_evidence: string; d1_calibration: string;
  d2_q1: number; d2_q2: number; d2_q3: number;
  d2_evidence: string; d2_calibration: string;
  d3_q1: number; d3_q2: number; d3_q3: number;
  d3_evidence: string; d3_calibration: string;
  d4_q1: number; d4_q2: number; d4_q3: number;
  d4_evidence: string; d4_calibration: string;
  d5_q1: number; d5_q2: number; d5_q3: number;
  d5_evidence: string; d5_calibration: string;
}

const EMPTY: FormData = {
  plan: '',
  full_name: '', role_title: '', company: '', industry: '',
  role_category: '', years_experience: '', company_type: '',
  core_responsibilities: '', location: '',
  d1_q1: 0, d1_q2: 0, d1_q3: 0, d1_evidence: '', d1_calibration: '',
  d2_q1: 0, d2_q2: 0, d2_q3: 0, d2_evidence: '', d2_calibration: '',
  d3_q1: 0, d3_q2: 0, d3_q3: 0, d3_evidence: '', d3_calibration: '',
  d4_q1: 0, d4_q2: 0, d4_q3: 0, d4_evidence: '', d4_calibration: '',
  d5_q1: 0, d5_q2: 0, d5_q3: 0, d5_evidence: '', d5_calibration: '',
};

const ROLE_CATEGORIES = ['Tech','Finance','Operations','Creative','Sales','HR','Legal','Other'];
const COMPANY_TYPES   = ['Startup','SME','Enterprise','Freelance','Government'];
const EXP_OPTIONS     = ['< 1 year','1–3 years','3–5 years','5–10 years','10–15 years','15+ years'];

const TOTAL_STEPS = 8; // 0=intro, 1=aboutYou, 2-6=dimensions, 7=done

// ─── Score selector (1-10 buttons) ──────────────────────────────────────────

function ScoreSelector({ value, onChange, anchor }: {
  value: number; onChange: (v: number) => void; anchor: string;
}) {
  return (
    <div>
      <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:8 }}>
        {Array.from({length:10},(_,i)=>i+1).map(n => (
          <button key={n} type="button" onClick={()=>onChange(n)} style={{
            width:40, height:40, borderRadius:8, border:'none', cursor:'pointer',
            fontFamily:'var(--font-dm-sans),sans-serif', fontWeight:700, fontSize:14,
            background: value === n ? '#1B2D52' : value > 0 && n <= value ? '#E8EDF8' : '#F0F2F7',
            color: value === n ? '#fff' : '#46567A',
            transition:'all 0.12s',
            outline: value === n ? '2px solid #2D5BE3' : 'none',
            outlineOffset:2,
          }}>{n}</button>
        ))}
      </div>
      <div style={{ fontSize:12, color:'#7080A0', lineHeight:1.5 }}>{anchor}</div>
    </div>
  );
}

// ─── Text / Textarea helpers ─────────────────────────────────────────────────

const inputStyle: React.CSSProperties = {
  width:'100%', padding:'10px 14px', borderRadius:8,
  border:'1.5px solid #D4D9E8', fontSize:14, color:'#1B2D52',
  fontFamily:'var(--font-dm-sans),sans-serif', background:'#fff',
  outline:'none', boxSizing:'border-box',
};
const taStyle: React.CSSProperties = { ...inputStyle, minHeight:80, resize:'vertical' };
const labelStyle: React.CSSProperties = {
  display:'block', fontSize:13, fontWeight:600, color:'#1B2D52', marginBottom:6,
};
const hintStyle: React.CSSProperties = {
  fontSize:12, color:'#7080A0', fontStyle:'italic', marginTop:4,
};

// ─── Main component (inner, uses useSearchParams) ────────────────────────────

function AssessmentInner() {
  const sp = useSearchParams();
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [fd, setFd] = useState<FormData>({ ...EMPTY, plan: sp.get('plan') ?? 'free' });
  const [submitting, setSubmitting] = useState(false);
  const [submitId, setSubmitId] = useState('');
  const [error, setError] = useState('');

  const set = (k: keyof FormData, v: string | number) =>
    setFd(prev => ({ ...prev, [k]: v }));

  // Validation per step
  function canProceed(): boolean {
    if (step === 1) {
      return !!(fd.full_name && fd.role_title && fd.company && fd.industry &&
                fd.role_category && fd.years_experience && fd.company_type);
    }
    if (step === 2) return fd.d1_q1 > 0 && fd.d1_q2 > 0 && fd.d1_q3 > 0;
    if (step === 3) return fd.d2_q1 > 0 && fd.d2_q2 > 0 && fd.d2_q3 > 0;
    if (step === 4) return fd.d3_q1 > 0 && fd.d3_q2 > 0 && fd.d3_q3 > 0;
    if (step === 5) return fd.d4_q1 > 0 && fd.d4_q2 > 0 && fd.d4_q3 > 0;
    if (step === 6) return fd.d5_q1 > 0 && fd.d5_q2 > 0 && fd.d5_q3 > 0;
    return true;
  }

  async function handleSubmit() {
    setSubmitting(true);
    setError('');
    try {
      const r = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fd),
      });
      const data = await r.json();
      if (data.ok) { setSubmitId(data.id); setStep(7); }
      else setError('Something went wrong. Please try again.');
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  const planLabel = fd.plan === 'free' ? 'Free Report' : fd.plan === 'report' ? 'Full Report (₹499)' : 'Advisory (₹2,499)';
  const progress = step === 0 ? 0 : step === 7 ? 100 : Math.round((step / 6) * 100);

  // ─── LAYOUT ───────────────────────────────────────────────────────────────

  return (
    <div style={{ minHeight:'100vh', background:'#F7F8FC', fontFamily:'var(--font-dm-sans),sans-serif' }}>

      {/* Top bar */}
      <div style={{ background:'#1B2D52', padding:'14px 32px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <a href="/" style={{ fontFamily:'var(--font-playfair),Georgia,serif', fontSize:18, fontWeight:700, color:'#fff', textDecoration:'none' }}>
          Sriram Advisory
        </a>
        <div style={{ fontSize:13, color:'rgba(255,255,255,0.55)' }}>SA-AIRS™ Assessment</div>
      </div>

      {/* Progress bar */}
      {step > 0 && step < 7 && (
        <div style={{ height:4, background:'#E0E5F0' }}>
          <div style={{ height:'100%', width:`${progress}%`, background:'#2D5BE3', transition:'width 0.4s ease' }} />
        </div>
      )}

      <div style={{ maxWidth:680, margin:'0 auto', padding:'48px 24px' }}>

        {/* ── STEP 0: INTRO ─────────────────────────────────────────────── */}
        {step === 0 && (
          <div>
            <div style={{ fontSize:12, fontWeight:700, letterSpacing:'0.1em', color:'#2D5BE3', textTransform:'uppercase', marginBottom:12 }}>
              {planLabel}
            </div>
            <h1 style={{ fontFamily:'var(--font-playfair),Georgia,serif', fontSize:'clamp(26px,4vw,38px)', fontWeight:700, color:'#1B2D52', lineHeight:1.2, letterSpacing:'-0.02em', marginBottom:16 }}>
              SA-AIRS™ AI Career Risk Assessment
            </h1>
            <p style={{ fontSize:15, color:'#46567A', lineHeight:1.7, marginBottom:28 }}>
              This assessment models your AI displacement risk across 5 dimensions. It takes <strong>3–5 minutes</strong>. Answer honestly — this is a mirror, not a test. Your report will be delivered within 24–48 hours.
            </p>
            <div style={{ background:'#fff', borderRadius:12, padding:24, border:'1px solid #E0E5F0', marginBottom:32 }}>
              <div style={{ fontWeight:700, fontSize:14, color:'#1B2D52', marginBottom:16 }}>How scoring works</div>
              <div style={{ display:'grid', gap:8 }}>
                {[['1–2','Never / Strongly Disagree — barely applies to your work'],
                  ['3–4','Rarely — comes up occasionally, not the norm'],
                  ['5–6','Sometimes — roughly half the time'],
                  ['7–8','Often / Mostly — describes most of your work'],
                  ['9–10','Always / Strongly Agree — central to what you do every day'],
                ].map(([score, meaning]) => (
                  <div key={score} style={{ display:'flex', gap:14, alignItems:'flex-start' }}>
                    <div style={{ minWidth:36, fontWeight:700, fontSize:13, color:'#2D5BE3' }}>{score}</div>
                    <div style={{ fontSize:13, color:'#46567A' }}>{meaning}</div>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={() => setStep(1)} style={{
              background:'#1B2D52', color:'#fff', border:'none', borderRadius:10,
              padding:'16px 32px', fontSize:15, fontWeight:700, cursor:'pointer', letterSpacing:'0.01em',
            }}>
              Begin Assessment →
            </button>
          </div>
        )}

        {/* ── STEP 1: ABOUT YOU ──────────────────────────────────────────── */}
        {step === 1 && (
          <Section title="About You" subtitle="This shapes the language of your report. All fields marked * are required.">
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
              <Field label="Full Name *" value={fd.full_name} onChange={v=>set('full_name',v)} placeholder="Jane Smith" />
              <Field label="Role / Job Title *" value={fd.role_title} onChange={v=>set('role_title',v)} placeholder="Senior Product Manager" />
              <Field label="Company / Organisation *" value={fd.company} onChange={v=>set('company',v)} placeholder="Acme Corp" />
              <Field label="Industry / Domain *" value={fd.industry} onChange={v=>set('industry',v)} placeholder="Fintech, Healthcare, SaaS…" />
              <Field label="Location" value={fd.location} onChange={v=>set('location',v)} placeholder="Mumbai, India" />
            </div>

            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginTop:4 }}>
              <div>
                <label style={labelStyle}>Role Category *</label>
                <select value={fd.role_category} onChange={e=>set('role_category',e.target.value)} style={inputStyle}>
                  <option value="">Select…</option>
                  {ROLE_CATEGORIES.map(c=><option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Years of Experience *</label>
                <select value={fd.years_experience} onChange={e=>set('years_experience',e.target.value)} style={inputStyle}>
                  <option value="">Select…</option>
                  {EXP_OPTIONS.map(o=><option key={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Company Type *</label>
                <select value={fd.company_type} onChange={e=>set('company_type',e.target.value)} style={inputStyle}>
                  <option value="">Select…</option>
                  {COMPANY_TYPES.map(t=><option key={t}>{t}</option>)}
                </select>
              </div>
            </div>

            <div style={{ marginTop:4 }}>
              <label style={labelStyle}>Core Responsibilities <span style={{ fontWeight:400, color:'#7080A0' }}>(brief)</span></label>
              <textarea value={fd.core_responsibilities} onChange={e=>set('core_responsibilities',e.target.value)}
                style={taStyle} placeholder="What do you actually do day-to-day?" />
            </div>
          </Section>
        )}

        {/* ── STEP 2: DIMENSION 1 ────────────────────────────────────────── */}
        {step === 2 && (
          <DimSection
            icon="↺" num={1} name="Task Repetition Level" weight="25%"
            insight="If most of your work can be written as a step-by-step process, it likely scores 7+. Repetition is the #1 driver of automation risk."
            anchors={['1–2: Every task is unique, no two days alike','5–6: Some patterns, but work requires regular adaptation','9–10: Highly repetitive — same steps, same output, same problems daily']}
            questions={[
              { key:'d1_q1', text:'My daily tasks follow the same pattern most days', anchor:'1–3: Rarely / Never · 4–6: Sometimes · 7–10: Often / Always' },
              { key:'d1_q2', text:'I could write a checklist that covers 80%+ of my work', anchor:'1–3: Rarely / Never · 4–6: Sometimes · 7–10: Often / Always' },
              { key:'d1_q3', text:'I rarely encounter problems I haven\'t solved before', anchor:'1–3: Rarely / Never · 4–6: Sometimes · 7–10: Often / Always' },
            ]}
            evidenceKey="d1_evidence" evidenceHint="Describe the most repetitive task you do every week"
            calibrationKey="d1_calibration" calibrationHint="Roughly how many times do you perform the exact same task type per week?"
            fd={fd} set={set}
          />
        )}

        {/* ── STEP 3: DIMENSION 2 ────────────────────────────────────────── */}
        {step === 3 && (
          <DimSection
            icon="⚡" num={2} name="Automation Feasibility" weight="25%"
            insight="If someone could give ChatGPT your job description and get a usable output — that's high automation feasibility."
            anchors={['1–2: My output is uniquely human — requires judgment and nuance every time','5–6: AI can assist but not fully replace — I still add significant value','9–10: AI tools can already produce most of my output with a good prompt']}
            questions={[
              { key:'d2_q1', text:'My work output is primarily text, data, or structured code', anchor:'1–3: Rarely / Never · 4–6: Sometimes · 7–10: Often / Always' },
              { key:'d2_q2', text:'Most of what I produce could be described in a clear, repeatable prompt', anchor:'1–3: Rarely / Never · 4–6: Sometimes · 7–10: Often / Always' },
              { key:'d2_q3', text:'AI tools can already perform significant parts of my job today', anchor:'1–3: Rarely / Never · 4–6: Sometimes · 7–10: Often / Always' },
            ]}
            evidenceKey="d2_evidence" evidenceHint="Name one specific deliverable from your role that AI could produce right now"
            calibrationKey="d2_calibration" calibrationHint="Could someone use ChatGPT or Copilot to replace 50%+ of your daily output?"
            fd={fd} set={set}
          />
        )}

        {/* ── STEP 4: DIMENSION 3 ────────────────────────────────────────── */}
        {step === 4 && (
          <DimSection
            icon="◎" num={3} name="Market Saturation" weight="20%"
            insight="High saturation + high automation = double exposure. This combination is the fastest-declining profile in the SA-AIRS dataset."
            anchors={['1–2: Rare, niche skill — few people globally do what I do','5–6: Common role but specific enough that I have real differentiation','9–10: Millions globally — interchangeable, no meaningful differentiation']}
            questions={[
              { key:'d3_q1', text:'My job title is extremely common on job platforms and LinkedIn', anchor:'1–3: Rarely / Never · 4–6: Sometimes · 7–10: Often / Always' },
              { key:'d3_q2', text:'My core skills are taught in most universities or bootcamps globally', anchor:'1–3: Rarely / Never · 4–6: Sometimes · 7–10: Often / Always' },
              { key:'d3_q3', text:'A company could hire my replacement within 2 weeks if needed', anchor:'1–3: Rarely / Never · 4–6: Sometimes · 7–10: Often / Always' },
            ]}
            evidenceKey="d3_evidence" evidenceHint="Estimate how many people share your exact job title on LinkedIn"
            calibrationKey="d3_calibration" calibrationHint="What specifically differentiates you from 100 other people with your job title?"
            fd={fd} set={set}
          />
        )}

        {/* ── STEP 5: DIMENSION 4 ────────────────────────────────────────── */}
        {step === 5 && (
          <DimSection
            icon="⬡" num={4} name="Decision Complexity" weight="15%" protective
            insight="Decision complexity is your shield. AI can process information fast — but it cannot yet carry accountability for ambiguous, high-stakes calls."
            anchors={['1–2: Clear rules and processes guide every decision','5–6: Mix of structured decisions and genuine judgment calls','9–10: Most decisions involve real ambiguity, high stakes, and no clear right answer']}
            questions={[
              { key:'d4_q1', text:'My work regularly involves navigating ambiguous, high-stakes situations', anchor:'1–3: Rarely (low protection) · 4–6: Moderate · 7–10: Strongly present (high protection)' },
              { key:'d4_q2', text:'I make critical decisions with incomplete or conflicting information', anchor:'1–3: Rarely (low protection) · 4–6: Moderate · 7–10: Strongly present (high protection)' },
              { key:'d4_q3', text:'My judgment calls carry significant consequences if they are wrong', anchor:'1–3: Rarely (low protection) · 4–6: Moderate · 7–10: Strongly present (high protection)' },
            ]}
            evidenceKey="d4_evidence" evidenceHint="Describe one recent decision that required real judgment — not just process-following"
            calibrationKey="d4_calibration" calibrationHint="How often does a senior person override or question your decisions?"
            fd={fd} set={set}
          />
        )}

        {/* ── STEP 6: DIMENSION 5 ────────────────────────────────────────── */}
        {step === 6 && (
          <DimSection
            icon="◈" num={5} name="Human Context Dependency" weight="15%" protective
            insight="Human context dependency is the hardest thing for AI to replicate. If your output quality depends on who you're dealing with and how you read them — that's a real moat."
            anchors={['1–2: Work is entirely independent — no human dynamics involved','5–6: Some relationship-building matters, but it\'s not central','9–10: Reading people, navigating politics, and building trust is core to everything']}
            questions={[
              { key:'d5_q1', text:'I need to read unspoken dynamics and organisational politics to do my job', anchor:'1–3: Rarely (low protection) · 4–6: Moderate · 7–10: Strongly present (high protection)' },
              { key:'d5_q2', text:'Building trust and relationships is central to the quality of my work output', anchor:'1–3: Rarely (low protection) · 4–6: Moderate · 7–10: Strongly present (high protection)' },
              { key:'d5_q3', text:'I regularly adapt my entire approach based on individual personalities', anchor:'1–3: Rarely (low protection) · 4–6: Moderate · 7–10: Strongly present (high protection)' },
            ]}
            evidenceKey="d5_evidence" evidenceHint="Give one example where reading a person or situation directly changed your outcome"
            calibrationKey="d5_calibration" calibrationHint="Could an outsider with your technical skills do your job effectively in their first month?"
            fd={fd} set={set}
          />
        )}

        {/* ── STEP 7: SUCCESS ───────────────────────────────────────────── */}
        {step === 7 && (
          <div style={{ textAlign:'center', padding:'32px 0' }}>
            <div style={{ fontSize:48, marginBottom:24 }}>✓</div>
            <h1 style={{ fontFamily:'var(--font-playfair),Georgia,serif', fontSize:'clamp(24px,4vw,34px)', fontWeight:700, color:'#1B2D52', lineHeight:1.2, marginBottom:16 }}>
              Assessment submitted successfully
            </h1>
            <p style={{ fontSize:15, color:'#46567A', lineHeight:1.7, maxWidth:480, margin:'0 auto 32px' }}>
              Thank you, {fd.full_name.split(' ')[0]}. Your SA-AIRS™ report will be delivered within <strong>24–48 hours</strong> via email or DM — look out for it from Sriram Advisory.
            </p>
            <div style={{ background:'#F0F3FA', borderRadius:10, padding:'16px 24px', maxWidth:400, margin:'0 auto 32px', fontSize:13, color:'#46567A' }}>
              Reference ID: <code style={{ color:'#1B2D52', fontWeight:700 }}>{submitId.slice(0,8).toUpperCase()}</code>
            </div>
            <a href="/" style={{ display:'inline-block', background:'#1B2D52', color:'#fff', borderRadius:10, padding:'14px 28px', fontSize:14, fontWeight:700, textDecoration:'none' }}>
              Back to Home
            </a>
          </div>
        )}

        {/* ── NAVIGATION ───────────────────────────────────────────────── */}
        {step > 0 && step < 7 && (
          <div style={{ marginTop:40, display:'flex', justifyContent:'space-between', alignItems:'center', gap:16 }}>
            <button onClick={()=>setStep(s=>s-1)} style={{
              background:'none', border:'1.5px solid #D4D9E8', color:'#46567A',
              borderRadius:10, padding:'13px 24px', fontSize:14, fontWeight:600, cursor:'pointer',
            }}>
              ← Back
            </button>
            <div style={{ fontSize:13, color:'#7080A0' }}>Step {step} of 6</div>
            {step < 6 ? (
              <button onClick={()=>{ if(canProceed()) setStep(s=>s+1); }}
                disabled={!canProceed()}
                style={{
                  background: canProceed() ? '#1B2D52' : '#C8D0E0',
                  color:'#fff', border:'none', borderRadius:10,
                  padding:'13px 28px', fontSize:14, fontWeight:700,
                  cursor: canProceed() ? 'pointer' : 'not-allowed',
                }}>
                Next →
              </button>
            ) : (
              <button onClick={handleSubmit} disabled={submitting || !canProceed()} style={{
                background: canProceed() && !submitting ? '#2DB887' : '#C8D0E0',
                color:'#fff', border:'none', borderRadius:10,
                padding:'13px 28px', fontSize:14, fontWeight:700,
                cursor: canProceed() && !submitting ? 'pointer' : 'not-allowed',
              }}>
                {submitting ? 'Submitting…' : 'Submit Assessment →'}
              </button>
            )}
          </div>
        )}

        {error && (
          <div style={{ marginTop:16, padding:'12px 16px', background:'#FEE', borderRadius:8, fontSize:13, color:'#B00020' }}>{error}</div>
        )}
      </div>
    </div>
  );
}

// ─── Reusable Section wrapper ─────────────────────────────────────────────────

function Section({ title, subtitle, children }: { title:string; subtitle:string; children:React.ReactNode }) {
  return (
    <div>
      <h2 style={{ fontFamily:'var(--font-playfair),Georgia,serif', fontSize:'clamp(22px,3vw,30px)', fontWeight:700, color:'#1B2D52', lineHeight:1.2, letterSpacing:'-0.02em', marginBottom:8 }}>{title}</h2>
      <p style={{ fontSize:14, color:'#7080A0', marginBottom:32 }}>{subtitle}</p>
      <div style={{ display:'flex', flexDirection:'column', gap:18 }}>{children}</div>
    </div>
  );
}

// ─── Field helper ─────────────────────────────────────────────────────────────

function Field({ label, value, onChange, placeholder }: { label:string; value:string; onChange:(v:string)=>void; placeholder?:string }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} style={inputStyle} />
    </div>
  );
}

// ─── Dimension section ────────────────────────────────────────────────────────

function DimSection({ icon, num, name, weight, protective, insight, anchors, questions, evidenceKey, evidenceHint, calibrationKey, calibrationHint, fd, set }: {
  icon:string; num:number; name:string; weight:string; protective?:boolean;
  insight:string; anchors:string[];
  questions:{ key:string; text:string; anchor:string }[];
  evidenceKey:string; evidenceHint:string;
  calibrationKey:string; calibrationHint:string;
  fd:FormData; set:(k:keyof FormData,v:string|number)=>void;
}) {
  return (
    <div>
      <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:4 }}>
        <span style={{ fontSize:20 }}>{icon}</span>
        <span style={{ fontSize:12, fontWeight:700, letterSpacing:'0.1em', color: protective ? '#2DB887' : '#2D5BE3', textTransform:'uppercase' }}>
          Dimension {num} — {name} · Weight {weight}
          {protective && ' · ★ Protective'}
        </span>
      </div>
      {protective && (
        <div style={{ background:'#EDFAF5', border:'1px solid #2DB887', borderRadius:8, padding:'10px 14px', marginBottom:16, fontSize:13, color:'#0A6B55' }}>
          <strong>★ Protective Dimension</strong> — A HIGH score here reduces your AI risk. This is a strength to actively build.
        </div>
      )}
      <h2 style={{ fontFamily:'var(--font-playfair),Georgia,serif', fontSize:'clamp(20px,3vw,26px)', fontWeight:700, color:'#1B2D52', lineHeight:1.2, letterSpacing:'-0.02em', marginBottom:16 }}>{name}</h2>

      {/* Anchors */}
      <div style={{ background:'#F7F8FC', borderRadius:10, padding:'14px 18px', marginBottom:28, display:'flex', flexDirection:'column', gap:6 }}>
        {anchors.map((a,i) => (
          <div key={i} style={{ fontSize:13, color:'#46567A', display:'flex', gap:10 }}>
            <span style={{ color:'#2D5BE3', flexShrink:0 }}>→</span>{a}
          </div>
        ))}
      </div>

      {/* Insight callout */}
      <div style={{ background:'#FFF8E8', border:'1px solid #F5A623', borderRadius:8, padding:'10px 14px', marginBottom:28, fontSize:13, color:'#7A5000', lineHeight:1.6 }}>
        <strong>Insight:</strong> {insight}
      </div>

      {/* Questions */}
      <div style={{ display:'flex', flexDirection:'column', gap:28 }}>
        {questions.map((q, qi) => (
          <div key={q.key}>
            <label style={{ ...labelStyle, fontWeight:400, fontSize:14, marginBottom:12 }}>
              <strong>Q{qi+1}.</strong> {q.text}
            </label>
            <ScoreSelector
              value={fd[q.key as keyof FormData] as number}
              onChange={v => set(q.key as keyof FormData, v)}
              anchor={q.anchor}
            />
          </div>
        ))}

        {/* Evidence */}
        <div>
          <label style={labelStyle}>Evidence <span style={{ fontWeight:400, color:'#7080A0' }}>(optional but improves your report)</span></label>
          <textarea
            value={fd[evidenceKey as keyof FormData] as string}
            onChange={e => set(evidenceKey as keyof FormData, e.target.value)}
            style={taStyle} placeholder={evidenceHint}
          />
          <div style={hintStyle}>{evidenceHint}</div>
        </div>

        {/* Calibration */}
        <div>
          <label style={labelStyle}>Calibration <span style={{ fontWeight:400, color:'#7080A0' }}>(helps us validate your scores)</span></label>
          <textarea
            value={fd[calibrationKey as keyof FormData] as string}
            onChange={e => set(calibrationKey as keyof FormData, e.target.value)}
            style={taStyle} placeholder={calibrationHint}
          />
          <div style={hintStyle}>{calibrationHint}</div>
        </div>
      </div>
    </div>
  );
}

// ─── Page export (wrapped in Suspense for useSearchParams) ────────────────────

export default function AssessmentPage() {
  return (
    <Suspense fallback={<div style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'sans-serif', color:'#7080A0' }}>Loading…</div>}>
      <AssessmentInner />
    </Suspense>
  );
}
