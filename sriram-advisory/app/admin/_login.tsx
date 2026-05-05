'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setError('');
    const r = await fetch('/api/admin/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: pw }),
    });
    if (r.ok) {
      router.refresh();
    } else {
      setError('Incorrect password.');
      setLoading(false);
    }
  }

  return (
    <div style={{ minHeight:'100vh', background:'#F7F8FC', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-dm-sans),sans-serif' }}>
      <div style={{ background:'#fff', borderRadius:14, padding:'48px 40px', maxWidth:380, width:'100%', border:'1px solid #E0E5F0', boxShadow:'0 4px 32px rgba(27,45,82,0.06)' }}>
        <div style={{ fontFamily:'var(--font-playfair),Georgia,serif', fontSize:22, fontWeight:700, color:'#1B2D52', marginBottom:6 }}>Admin Access</div>
        <div style={{ fontSize:13, color:'#7080A0', marginBottom:32 }}>SA-AIRS™ Response Dashboard</div>
        <form onSubmit={handleLogin} style={{ display:'flex', flexDirection:'column', gap:16 }}>
          <input
            type="password" value={pw} onChange={e=>setPw(e.target.value)}
            placeholder="Password" autoFocus
            style={{ padding:'12px 14px', borderRadius:8, border:'1.5px solid #D4D9E8', fontSize:14, color:'#1B2D52', fontFamily:'inherit', outline:'none' }}
          />
          {error && <div style={{ fontSize:13, color:'#B00020' }}>{error}</div>}
          <button type="submit" disabled={loading || !pw} style={{
            background: pw && !loading ? '#1B2D52' : '#C8D0E0',
            color:'#fff', border:'none', borderRadius:8,
            padding:'13px', fontSize:14, fontWeight:700, cursor: pw && !loading ? 'pointer' : 'not-allowed',
          }}>{loading ? 'Verifying…' : 'Enter Dashboard →'}</button>
        </form>
      </div>
    </div>
  );
}
