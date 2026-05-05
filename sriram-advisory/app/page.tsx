"use client";

import { useState, useEffect, useCallback } from "react";

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formDone, setFormDone]   = useState(false);
  const [formData, setFormData]   = useState({ name:"", email:"", role:"", seniority:"" });

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") setModalOpen(false); };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  const openForm  = useCallback(() => setModalOpen(true),  []);
  const closeForm = useCallback(() => setModalOpen(false), []);

  return (
    <div style={{ minHeight:"100vh", background:"#F7F8FC", fontFamily:"var(--font-dm-sans), system-ui, sans-serif", color:"#1B2D52" }}>

      {/* NAV */}
      <nav style={{
        position:"fixed", top:0, left:0, right:0, zIndex:100,
        background: scrolled ? "rgba(247,248,252,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(27,45,82,0.09)" : "none",
        transition:"all 0.25s ease",
        padding:"0 32px",
      }}>
        <div style={{ maxWidth:1140, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", height:64 }}>
          <div style={{ fontFamily:"var(--font-playfair), Georgia, serif", fontWeight:700, fontSize:22, color:"#1B2D52", letterSpacing:"-0.02em" }}>
            Sriram Advisory
          </div>
          <a href="#" onClick={e=>{e.preventDefault();openForm();}} style={{
            background:"#1B2D52", color:"#fff", padding:"10px 22px", borderRadius:8,
            fontSize:14, fontWeight:600, textDecoration:"none", letterSpacing:"0.01em",
            display:"inline-block",
          }}>Start Assessment →</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ paddingTop:160, paddingBottom:100, paddingLeft:32, paddingRight:32 }}>
        <div style={{ maxWidth:760, margin:"0 auto", textAlign:"center" }}>
          <div style={{
            display:"inline-flex", alignItems:"center", gap:8, background:"#EBF0FF",
            border:"1px solid rgba(45,91,227,0.2)", borderRadius:100, padding:"6px 16px",
            fontSize:12, fontWeight:600, color:"#2D5BE3", letterSpacing:"0.08em",
            textTransform:"uppercase", marginBottom:32,
          }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:"#2D5BE3", display:"inline-block" }} />
            SA-AIRS™ · AI Career Risk Assessment
          </div>

          <h1 style={{
            fontFamily:"var(--font-playfair), Georgia, serif",
            fontSize:"clamp(38px, 6vw, 68px)", fontWeight:700, lineHeight:1.1,
            letterSpacing:"-0.03em", color:"#1B2D52", margin:"0 0 28px",
          }}>
            Find out if AI is coming<br/>for your job — <em style={{ fontStyle:"italic", color:"#2D5BE3" }}>before it does.</em>
          </h1>

          <p style={{ fontSize:"clamp(16px, 2vw, 20px)", color:"#46567A", lineHeight:1.75, maxWidth:600, margin:"0 auto 44px" }}>
            SA-AIRS™ scores your AI displacement risk across 5 dimensions, gives you a clear tier, and tells you exactly what to do in the next 90 days.
          </p>

          <div style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap" }}>
            <a href="#" onClick={e=>{e.preventDefault();openForm();}} style={{
              background:"#1B2D52", color:"#fff", padding:"16px 36px", borderRadius:10,
              fontSize:16, fontWeight:700, textDecoration:"none", letterSpacing:"0.01em",
              boxShadow:"0 4px 24px rgba(27,45,82,0.25)",
            }}>Start the Assessment →</a>
            <a href="#how" style={{
              background:"transparent", color:"#1B2D52", padding:"16px 28px", borderRadius:10,
              fontSize:15, fontWeight:500, textDecoration:"none",
              border:"1.5px solid rgba(27,45,82,0.2)",
            }}>See how it works ↓</a>
          </div>

          <p style={{ marginTop:24, fontSize:13, color:"#7080A0", letterSpacing:"0.04em" }}>
            Takes 3–5 minutes · Report delivered within 48h · First 10 free
          </p>
        </div>
      </section>

      {/* WHAT IS IT */}
      <section style={{ padding:"80px 32px", background:"#fff", borderTop:"1px solid rgba(27,45,82,0.08)", borderBottom:"1px solid rgba(27,45,82,0.08)" }}>
        <div style={{ maxWidth:880, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <div style={{ fontSize:12, fontWeight:700, letterSpacing:"0.1em", color:"#2D5BE3", textTransform:"uppercase", marginBottom:12 }}>What It Is</div>
            <h2 style={{ fontFamily:"var(--font-playfair), Georgia, serif", fontSize:"clamp(28px, 4vw, 42px)", fontWeight:700, lineHeight:1.2, letterSpacing:"-0.02em", color:"#1B2D52", margin:0 }}>
              A scored model of your exposure.<br/>Not a quiz. Not advice.
            </h2>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))", gap:24 }}>
            {[
              { icon:"⚖️", title:"5-Dimension Scoring", body:"We analyse your role across five weighted dimensions that determine how exposed — or protected — you are from AI-driven displacement." },
              { icon:"🎯", title:"A Number You Can Act On", body:"Your SA-AIRS™ score (0–100) tells you exactly where you sit on a 5-level risk ladder — from Resilient to Critical." },
              { icon:"🗺️", title:"90-Day Roadmap", body:"The full report gives you 3–5 specific structural moves to reduce your score — not generic advice, but actions tied to your actual dimensions." },
            ].map(card => (
              <div key={card.title} style={{
                background:"#F7F8FC", borderRadius:14, padding:"28px 24px",
                border:"1px solid rgba(27,45,82,0.08)",
              }}>
                <div style={{ fontSize:28, marginBottom:14 }}>{card.icon}</div>
                <div style={{ fontWeight:700, fontSize:16, color:"#1B2D52", marginBottom:10, lineHeight:1.3 }}>{card.title}</div>
                <div style={{ fontSize:14, color:"#46567A", lineHeight:1.7 }}>{card.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{ padding:"80px 32px" }}>
        <div style={{ maxWidth:880, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <div style={{ fontSize:12, fontWeight:700, letterSpacing:"0.1em", color:"#2D5BE3", textTransform:"uppercase", marginBottom:12 }}>How It Works</div>
            <h2 style={{ fontFamily:"var(--font-playfair), Georgia, serif", fontSize:"clamp(28px, 4vw, 42px)", fontWeight:700, lineHeight:1.2, letterSpacing:"-0.02em", color:"#1B2D52", margin:0 }}>
              Three steps. Under 10 minutes.
            </h2>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))", gap:0, position:"relative" }}>
            {[
              { n:"01", t:"Share Your Details", b:"Leave your name, email, and role. We will send you the assessment link within a few hours." },
              { n:"02", t:"Complete the Assessment", b:"We send you a structured assessment link. Work through it at your own pace — it takes around 10–15 minutes." },
              { n:"03", t:"Receive Your Report", b:"Once you submit the assessment, we analyse your responses and deliver your personalised SA-AIRS™ report within 48 hours." },
            ].map((step, i) => (
              <div key={step.n} style={{
                padding:"32px 28px", borderLeft: i===0 ? "none" : "1px solid rgba(27,45,82,0.10)",
                position:"relative",
              }}>
                <div style={{
                  fontSize:11, fontWeight:700, letterSpacing:"0.14em", color:"#2D5BE3",
                  fontFamily:"var(--font-jetbrains),monospace", marginBottom:16,
                }}>STEP {step.n}</div>
                <div style={{ fontWeight:700, fontSize:17, color:"#1B2D52", marginBottom:12, lineHeight:1.3 }}>{step.t}</div>
                <div style={{ fontSize:14, color:"#46567A", lineHeight:1.75 }}>{step.b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section style={{ padding:"80px 32px", background:"#1B2D52" }}>
        <div style={{ maxWidth:880, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <div style={{ fontSize:12, fontWeight:700, letterSpacing:"0.1em", color:"rgba(255,255,255,0.45)", textTransform:"uppercase", marginBottom:12 }}>What You Receive</div>
            <h2 style={{ fontFamily:"var(--font-playfair), Georgia, serif", fontSize:"clamp(28px, 4vw, 40px)", fontWeight:700, lineHeight:1.2, letterSpacing:"-0.02em", color:"#fff", margin:0 }}>
              Your report includes
            </h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))", gap:16 }}>
            {[
              "Composite SA-AIRS™ score (0–100) with confidence level",
              "Risk tier classification — which of 5 levels you sit at",
              "Full 5-dimension breakdown with individual scores",
              "Driver analysis — the 2–3 factors pushing your score highest",
              "90-day structural roadmap with 3–5 specific actions",
              "Role-specific benchmark vs. others in your function",
            ].map((item, i) => (
              <div key={i} style={{ display:"flex", gap:14, alignItems:"flex-start" }}>
                <div style={{ width:22, height:22, borderRadius:"50%", background:"rgba(255,255,255,0.12)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:2 }}>
                  <span style={{ fontSize:11, color:"rgba(255,255,255,0.7)", fontWeight:700 }}>✓</span>
                </div>
                <div style={{ fontSize:15, color:"rgba(255,255,255,0.8)", lineHeight:1.65 }}>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ padding:"80px 32px", background:"#fff", borderTop:"1px solid rgba(27,45,82,0.08)" }}>
        <div style={{ maxWidth:1080, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#FFF8EC", border:"1px solid #F5A623", borderRadius:100, padding:"6px 18px", marginBottom:20 }}>
              <span style={{ fontSize:14 }}>🎉</span>
              <span style={{ fontSize:12, fontWeight:700, color:"#B8650A", letterSpacing:"0.07em", textTransform:"uppercase" }}>Launch Offer — Limited Time</span>
            </div>
            <div style={{ fontSize:12, fontWeight:700, letterSpacing:"0.1em", color:"#2D5BE3", textTransform:"uppercase", marginBottom:12 }}>Choose Your Level</div>
            <h2 style={{ fontFamily:"var(--font-playfair), Georgia, serif", fontSize:"clamp(26px, 4vw, 40px)", fontWeight:700, lineHeight:1.2, letterSpacing:"-0.02em", color:"#1B2D52", margin:"0 0 14px" }}>
              10 free reports. 50% off paid plans.
            </h2>
            <p style={{ fontSize:15, color:"#46567A", maxWidth:520, margin:"0 auto", lineHeight:1.65 }}>
              Opening offer while I calibrate the model with real professionals. First 10 get the full report free. Everyone else gets half price.
            </p>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))", gap:20, maxWidth:1040, margin:"0 auto" }}>
            {[
              {
                tag:"Launch — First 10 Only", price:null, name:"Free Risk Report", planKey:"free",
                desc:"Get the full SA-AIRS™ report at no cost. First 10 spots, no strings attached.",
                items:["SA-AIRS™ composite score","All 5 dimension scores","Your risk tier","90-day action roadmap"],
                cta:"Claim Free Spot →", star:false, free:true, originalPrice:null,
              },
              {
                tag:"Full Report", price:"499", originalPrice:"999", name:"SA-AIRS™ Intelligence Report", planKey:"report",
                desc:"Full breakdown + 90-day roadmap. Everything you need to act.",
                items:["All 5 dimension scores","Driver analysis","90-day action roadmap","Role benchmarking"],
                cta:"Start Assessment →", star:false, free:false,
              },
              {
                tag:"Advisory", price:"2,499", originalPrice:"4,999", name:"Report + 1:1 Session", planKey:"advisory",
                desc:"Work through the findings together. 3 spots per month.",
                items:["Everything in Full Report","60-min 1:1 with Sriram","Co-built action plan","30-day follow-up"],
                cta:"Start Assessment →", star:true, free:false,
              },
            ].map(tier => (
              <div key={tier.tag} style={{
                borderRadius:14, padding:"32px 28px",
                background: tier.star ? "#1B2D52" : tier.free ? "#EDFAF5" : "#F7F8FC",
                border: tier.star ? "none" : tier.free ? "2px solid #2DB887" : "1px solid rgba(27,45,82,0.10)",
                display:"flex", flexDirection:"column", position:"relative", overflow:"hidden",
              }}>
                {/* Badge */}
                {tier.free && (
                  <div style={{ position:"absolute", top:16, right:16, background:"#2DB887", color:"#fff", fontSize:10, fontWeight:800, letterSpacing:"0.1em", textTransform:"uppercase", borderRadius:100, padding:"4px 10px" }}>
                    10 LEFT
                  </div>
                )}
                {!tier.free && (
                  <div style={{ position:"absolute", top:16, right:16, background:"#E63946", color:"#fff", fontSize:10, fontWeight:800, letterSpacing:"0.08em", textTransform:"uppercase", borderRadius:100, padding:"4px 10px" }}>
                    50% OFF
                  </div>
                )}

                <div style={{ fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color: tier.star ? "rgba(255,255,255,0.5)" : tier.free ? "#0A6B55" : "#2D5BE3", marginBottom:16 }}>{tier.tag}</div>

                {/* Price */}
                {tier.free ? (
                  <div style={{ marginBottom:4 }}>
                    <span style={{ fontFamily:"var(--font-playfair),Georgia,serif", fontSize:40, fontWeight:700, color:"#1B2D52", lineHeight:1, letterSpacing:"-0.02em" }}>Free</span>
                  </div>
                ) : (
                  <div style={{ marginBottom:4 }}>
                    <div style={{ display:"flex", alignItems:"baseline", gap:4, marginBottom:2 }}>
                      <span style={{ fontFamily:"var(--font-dm-sans),sans-serif", fontSize:13, color: tier.star ? "rgba(255,255,255,0.35)" : "#A0AECA", textDecoration:"line-through" }}>₹{tier.originalPrice}</span>
                    </div>
                    <div style={{ display:"flex", alignItems:"baseline", gap:3 }}>
                      <span style={{ fontFamily:"var(--font-dm-sans),sans-serif", fontSize:16, fontWeight:500, color: tier.star ? "rgba(255,255,255,0.6)" : "#46567A", letterSpacing:"0.02em", lineHeight:1 }}>₹</span>
                      <span style={{ fontFamily:"var(--font-playfair),Georgia,serif", fontSize:40, fontWeight:700, color: tier.star ? "#fff" : "#1B2D52", lineHeight:1, letterSpacing:"-0.03em" }}>{tier.price}</span>
                    </div>
                  </div>
                )}

                <div style={{ fontWeight:700, fontSize:16, color: tier.star ? "#fff" : "#1B2D52", marginBottom:8 }}>{tier.name}</div>
                <div style={{ fontSize:14, color: tier.star ? "rgba(255,255,255,0.55)" : tier.free ? "#2D6A4F" : "#46567A", lineHeight:1.65, marginBottom:20 }}>{tier.desc}</div>
                <ul style={{ listStyle:"none", padding:0, margin:"0 0 28px", flex:1 }}>
                  {tier.items.map((item,i) => (
                    <li key={i} style={{ fontSize:13, color: tier.star ? "rgba(255,255,255,0.75)" : tier.free ? "#2D6A4F" : "#46567A", padding:"6px 0", display:"flex", gap:10, alignItems:"center" }}>
                      <span style={{ color: tier.star ? "rgba(255,255,255,0.5)" : tier.free ? "#2DB887" : "#2D5BE3" }}>→</span>{item}
                    </li>
                  ))}
                </ul>
                <a href="#" onClick={e=>{e.preventDefault();openForm();}} style={{
                  display:"block", textAlign:"center", padding:"14px 20px", borderRadius:8,
                  fontSize:14, fontWeight:700, textDecoration:"none", letterSpacing:"0.01em",
                  background: tier.star ? "#fff" : tier.free ? "#2DB887" : "#1B2D52",
                  color: tier.star ? "#1B2D52" : "#fff",
                }}>{tier.cta}</a>
              </div>
            ))}
          </div>
          <p style={{ textAlign:"center", marginTop:32, fontSize:13, color:"#7080A0" }}>
            Honest-mirror guarantee — if your report does not surface at least 2 new insights, we refund in full.
          </p>
          <p style={{ textAlign:"center", marginTop:8, fontSize:12, color:"#A0AECA" }}>
            Launch pricing ends once the 10 free spots are gone. Paid discount applies until further notice.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background:"#F7F8FC", borderTop:"1px solid rgba(27,45,82,0.08)", padding:"40px 32px", textAlign:"center" }}>
        <div style={{ fontFamily:"var(--font-playfair),Georgia,serif", fontWeight:700, fontSize:24, color:"#1B2D52", marginBottom:6 }}>Sriram Advisory</div>
        <div style={{ fontSize:13, color:"#7080A0", letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:20 }}>Clarity over comfort.</div>
        <div style={{ fontSize:13, color:"#46567A", maxWidth:560, margin:"0 auto", lineHeight:1.8 }}>
          SA-AIRS™ is a proprietary scoring methodology. Scores are indicative, not predictive.<br/>
          © {new Date().getFullYear()} Sriram Advisory. All rights reserved.
        </div>
      </footer>

      {/* MODAL */}
      {modalOpen && (
        <div onClick={e=>{if(e.target===e.currentTarget)closeForm();}} style={{
          position:"fixed", inset:0, zIndex:200, background:"rgba(15,27,45,0.6)", backdropFilter:"blur(6px)",
          display:"flex", alignItems:"center", justifyContent:"center", padding:20,
        }} role="dialog" aria-modal="true">
          <div style={{
            background:"#fff", borderRadius:16, width:"100%", maxWidth:520,
            maxHeight:"90vh", overflowY:"auto",
            boxShadow:"0 24px 80px rgba(0,0,0,0.2)",
          }}>
            <div style={{ padding:"28px 28px 0", display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
              <div>
                <div style={{ fontFamily:"var(--font-playfair),Georgia,serif", fontWeight:700, fontSize:22, color:"#1B2D52", marginBottom:4 }}>Start Your Assessment</div>
                <div style={{ fontSize:13, color:"#7080A0" }}>Leave your details — we will send you the assessment link</div>
              </div>
              <button onClick={closeForm} aria-label="Close" style={{ background:"none", border:"none", cursor:"pointer", fontSize:20, color:"#7080A0", padding:4, lineHeight:1 }}>✕</button>
            </div>
            <div style={{ padding:28 }}>
              {formDone ? (
                <div style={{ textAlign:"center", padding:"20px 0" }}>
                  <div style={{ fontSize:40, marginBottom:16 }}>✓</div>
                  <div style={{ fontFamily:"var(--font-playfair),Georgia,serif", fontSize:20, fontWeight:700, color:"#1B2D52", marginBottom:8 }}>Intake submitted.</div>
                  <div style={{ fontSize:14, color:"#46567A", lineHeight:1.7 }}>We will send the assessment link to your inbox shortly. Complete it at your own pace — your report follows within 48 hours of submission.</div>
                </div>
              ) : (
                <form onSubmit={e=>{e.preventDefault();setFormDone(true);}}>
                  {[
                    { label:"Full Name", key:"name", type:"text", placeholder:"Your name" },
                    { label:"Work Email", key:"email", type:"email", placeholder:"you@company.com" },
                    { label:"Current Role", key:"role", type:"text", placeholder:"e.g. Head of Product" },
                  ].map(f => (
                    <div key={f.key} style={{ marginBottom:18 }}>
                      <label style={{ display:"block", fontSize:13, fontWeight:600, color:"#1B2D52", marginBottom:6 }}>{f.label} <span style={{color:"#C53030"}}>*</span></label>
                      <input type={f.type} placeholder={f.placeholder} required
                        value={(formData as Record<string,string>)[f.key]}
                        onChange={e=>setFormData({...formData,[f.key]:e.target.value})}
                        style={{ width:"100%", padding:"11px 14px", borderRadius:8, border:"1.5px solid rgba(27,45,82,0.2)", fontSize:14, color:"#1B2D52", outline:"none", boxSizing:"border-box", fontFamily:"inherit" }}
                      />
                    </div>
                  ))}
                  <div style={{ marginBottom:24 }}>
                    <label style={{ display:"block", fontSize:13, fontWeight:600, color:"#1B2D52", marginBottom:6 }}>Seniority <span style={{color:"#C53030"}}>*</span></label>
                    <select required value={formData.seniority} onChange={e=>setFormData({...formData,seniority:e.target.value})}
                      style={{ width:"100%", padding:"11px 14px", borderRadius:8, border:"1.5px solid rgba(27,45,82,0.2)", fontSize:14, color:"#1B2D52", outline:"none", background:"#fff", fontFamily:"inherit" }}>
                      <option value="">Select your level</option>
                      <option>Individual Contributor</option>
                      <option>Team Lead / Manager</option>
                      <option>Director / VP</option>
                      <option>C-Suite / Founder</option>
                    </select>
                  </div>
                  <button type="submit" style={{
                    width:"100%", padding:"14px 20px", borderRadius:8, background:"#1B2D52",
                    color:"#fff", fontSize:15, fontWeight:700, border:"none", cursor:"pointer", letterSpacing:"0.01em",
                  }}>Send Me the Assessment →</button>
                  <p style={{ textAlign:"center", fontSize:12, color:"#7080A0", marginTop:14 }}>No spam · Assessment link sent within a few hours</p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
