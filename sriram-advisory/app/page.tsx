import Link from "next/link";
import Image from "next/image";

const stats = [
  {
    figure: "85M",
    label: "Jobs could be displaced by AI by 2030",
    source: "World Economic Forum",
  },
  {
    figure: "1 in 3",
    label: "Professionals feel prepared for AI's impact on their role",
    source: "McKinsey Global Survey",
  },
  {
    figure: "3.5×",
    label: "Faster growth in AI-adjacent roles vs. traditional ones",
    source: "LinkedIn Future of Work Report",
  },
];

const services = [
  {
    icon: "🧭",
    title: "AI Career Clarity Session",
    description:
      "A focused 60-minute 1:1 session to map your specific AI exposure, identify your strengths, and build a 90-day action plan.",
    cta: "Book a Session",
    href: "/services/career-advisory",
  },
  {
    icon: "👥",
    title: "Career Readiness Workshops",
    description:
      "Half-day and full-day workshops for teams, student cohorts, and professional communities. Practical. Evidence-based. Actionable.",
    cta: "Learn More",
    href: "/services/workshops",
  },
  {
    icon: "🏢",
    title: "Corporate AI Workforce Programs",
    description:
      "For HR leaders and L&D teams navigating AI's impact on their workforce. Custom assessment frameworks, upskilling roadmaps, and change management support.",
    cta: "Talk to Sriram",
    href: "/services/corporate-programs",
  },
];

const resources = [
  {
    tag: "For Students",
    title: "How to Build an AI-Resilient Career Starting Today",
    excerpt:
      "Practical guidance on which skills matter, which roles are emerging, and how to position yourself for the next decade.",
    href: "/resources/blog",
    color: "bg-amber/10 text-amber",
  },
  {
    tag: "For Professionals",
    title: "The Mid-Career AI Pivot: A Framework for Professionals",
    excerpt:
      "Your experience is valuable — but only if you know how to reposition it. Here's a clear, honest framework for navigating the shift.",
    href: "/resources/blog",
    color: "bg-navy/10 text-navy",
  },
  {
    tag: "Free Guide",
    title: "AI Career Readiness Checklist",
    excerpt:
      "A concise 2-page checklist that helps you quickly assess where you stand and what your immediate next steps should be.",
    href: "/resources#guides",
    color: "bg-green-100 text-green-700",
  },
];

const testimonials = [
  {
    quote:
      "Sriram cut through all the noise. In one session I went from overwhelmed to having a clear 90-day plan. The clarity was worth ten times the investment.",
    name: "Priya R.",
    role: "Senior Finance Manager, Mumbai",
  },
  {
    quote:
      "I was genuinely unsure whether my marketing skills had a future. After working with Sriram, I understand exactly what to learn and how to position myself.",
    name: "Aditya S.",
    role: "Digital Marketing Lead, Bangalore",
  },
  {
    quote:
      "As a final-year student, I was anxious about entering a job market being reshaped by AI. Sriram gave me a roadmap that actually made sense for my background.",
    name: "Meera K.",
    role: "MBA Student, IIM Ahmedabad",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-navy text-cream relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-amber/10 text-amber text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
              ✦ AI Career Strategy
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-cream mb-6">
              AI Is Reshaping
              <br />
              Every Career.
              <br />
              <span className="text-amber">What&rsquo;s Your Move?</span>
            </h1>
            <p className="text-cream/70 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Sriram Advisory helps students and mid-career professionals
              understand what AI means for their work — and build a confident
              path forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Link
                href="/assessment"
                className="bg-amber text-navy font-semibold px-7 py-3.5 rounded-full hover:bg-amber-light transition-colors text-base inline-flex items-center justify-center gap-2"
              >
                Take the Free AI Career Assessment →
              </Link>
              <Link
                href="/newsletter"
                className="border border-cream/30 text-cream font-medium px-7 py-3.5 rounded-full hover:border-amber hover:text-amber transition-colors text-base inline-flex items-center justify-center"
              >
                Read the Latest Briefing
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start text-sm text-cream/50">
              <span>🏆 Finance &amp; AI Strategy expertise</span>
            </div>
          </div>

          <div className="flex-1 hidden lg:flex justify-center items-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full border border-amber/20" />
              <div className="absolute inset-6 rounded-full border border-amber/10" />
              <div className="absolute inset-14 bg-navy-light rounded-2xl border border-white/10 flex flex-col items-center justify-center p-4 gap-3">
                <div className="text-3xl font-bold font-serif text-amber">AI</div>
                <div className="text-xs text-cream/60 text-center">Career Readiness</div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-amber h-2 rounded-full w-3/4" />
                </div>
              </div>
              {["Finance", "Law", "Marketing", "Engineering"].map((label, i) => {
                const angle = (i * 90 * Math.PI) / 180;
                const r = 135;
                const x = 160 + r * Math.cos(angle) - 40;
                const y = 160 + r * Math.sin(angle) - 16;
                return (
                  <div
                    key={label}
                    className="absolute bg-navy-light border border-amber/30 rounded-full px-3 py-1 text-xs text-amber/80 whitespace-nowrap"
                    style={{ left: x, top: y }}
                  >
                    {label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────── */}
      <section className="bg-cream-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-5">
            The Shift Is Already Happening
          </h2>
          <p className="text-slate max-w-2xl mx-auto mb-14 text-lg">
            Most people are stuck between paralyzing anxiety or blind optimism.
            Neither helps. What you need is a clear-eyed view of what&rsquo;s
            actually changing — and a practical plan built around your specific
            background, industry, and goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {stats.map((s) => (
              <div
                key={s.figure}
                className="bg-cream rounded-2xl p-8 border border-amber/20 hover:border-amber/50 transition-colors shadow-sm"
              >
                <div className="font-serif text-5xl font-bold text-amber mb-3">
                  {s.figure}
                </div>
                <p className="text-navy font-medium mb-2">{s.label}</p>
                <p className="text-slate-light text-sm">— {s.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ──────────────────────────────────────── */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy text-center mb-14">
            Who This Is For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-navy text-cream rounded-3xl p-10 flex flex-col gap-5">
              <div className="text-4xl">🎓</div>
              <h3 className="font-serif text-2xl font-bold">Just Starting Out?</h3>
              <p className="text-cream/70 leading-relaxed">
                Understand which skills will make you AI-proof — not just
                AI-aware. Build a career strategy that&rsquo;s built for the
                next decade, not the last one.
              </p>
              <ul className="text-cream/70 space-y-2 text-sm">
                <li>✓ AI-exposed vs. AI-augmented vs. AI-safe fields</li>
                <li>✓ Practical skill-building guidance</li>
                <li>✓ New career paths emerging because of AI</li>
                <li>✓ Affordable entry points and free resources</li>
              </ul>
              <Link
                href="/resources"
                className="mt-auto self-start bg-amber text-navy font-semibold px-6 py-3 rounded-full hover:bg-amber-light transition-colors text-sm"
              >
                See Student Resources →
              </Link>
            </div>

            <div className="bg-amber text-navy rounded-3xl p-10 flex flex-col gap-5">
              <div className="text-4xl">💼</div>
              <h3 className="font-serif text-2xl font-bold">
                Established Career, Changing Landscape?
              </h3>
              <p className="text-navy/80 leading-relaxed">
                Your experience is your advantage — but only if you know how to
                reposition it. Get clear on what&rsquo;s at risk, what&rsquo;s
                resilient, and what&rsquo;s your next move.
              </p>
              <ul className="text-navy/80 space-y-2 text-sm">
                <li>✓ Industry-specific AI impact analysis</li>
                <li>✓ Identify your vulnerability and opportunity</li>
                <li>✓ Frameworks for career conversations in the AI era</li>
                <li>✓ Premium advisory access — 1:1, workshops, cohorts</li>
              </ul>
              <Link
                href="/services"
                className="mt-auto self-start bg-navy text-cream font-semibold px-6 py-3 rounded-full hover:bg-navy-light transition-colors text-sm"
              >
                Explore Advisory Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ────────────────────────────────────── */}
      <section className="bg-cream-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy text-center mb-4">
            How Sriram Advisory Can Help
          </h2>
          <p className="text-slate text-center max-w-2xl mx-auto mb-14 text-lg">
            From individual clarity sessions to organisation-wide workforce
            transformation — there&rsquo;s a path designed for where you are.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="bg-cream rounded-2xl p-8 border border-slate/10 hover:border-amber/40 hover:shadow-lg transition-all flex flex-col gap-4"
              >
                <div className="text-4xl">{svc.icon}</div>
                <h3 className="font-serif text-xl font-bold text-navy">
                  {svc.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed flex-1">
                  {svc.description}
                </p>
                <Link
                  href={svc.href}
                  className="self-start text-amber font-semibold text-sm hover:underline mt-2"
                >
                  {svc.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────────────── */}
      <section className="bg-navy text-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber/10 text-amber text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
            ✦ Free Newsletter
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-5">
            Stay Ahead of the Curve — Not Behind It
          </h2>
          <p className="text-cream/70 text-lg mb-12 leading-relaxed">
            A free weekly newsletter for students and professionals who want to
            understand AI without the jargon — and know what it means for their
            career.
          </p>
          <div className="max-w-sm mx-auto bg-navy-light border border-white/10 rounded-2xl p-7 text-left mb-10">
            <div className="font-serif text-xl font-bold text-amber mb-2">
              AI for Everyone
            </div>
            <p className="text-cream/60 text-xs uppercase tracking-wider mb-3">
              For everyone
            </p>
            <p className="text-cream/70 text-sm leading-relaxed">
              Plain-English AI explainers, career tips, tool spotlights, and
              what it all means for your future. Weekly.
            </p>
          </div>
          <Link
            href="/newsletter"
            className="bg-amber text-navy font-semibold px-8 py-4 rounded-full hover:bg-amber-light transition-colors text-base inline-flex items-center gap-2"
          >
            Subscribe Free →
          </Link>
          <p className="text-cream/40 text-sm mt-4">
            Unsubscribe anytime
          </p>
        </div>
      </section>

      {/* ── ABOUT SRIRAM ─────────────────────────────────────────── */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="flex justify-center lg:justify-end order-2 lg:order-1">
              <div className="w-72 h-80 rounded-3xl overflow-hidden border border-amber/20 relative shadow-xl">
                <Image
                  src="/sriram.png"
                  alt="Sriram — AI Strategist & Career Advisor"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-amber text-xs font-semibold uppercase tracking-wider mb-3">
                About the Advisor
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-6 leading-tight">
                Bridging the Gap Between AI&rsquo;s Potential and Your
                Professional Reality
              </h2>
              <p className="text-slate leading-relaxed mb-4">
                Sriram is an AI strategist and business transformation advisor
                with deep roots in finance and regulatory compliance. He has
                spent years helping organizations and individuals navigate
                complex change — and now brings that expertise to one of the
                most consequential transitions of our time: the rise of AI in
                the workplace.
              </p>
              <p className="text-slate leading-relaxed mb-8">
                He doesn&rsquo;t speak in abstractions. He speaks from
                experience — and from genuine care about the people navigating
                this shift.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "Finance Background",
                  "AI Strategy",
                  "AI for Everyone Newsletter",
                  "25+ Years Enterprise Tech",
                ].map((c) => (
                  <span
                    key={c}
                    className="bg-cream-dark text-navy text-xs font-medium px-3 py-1.5 rounded-full border border-slate/20"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-amber font-semibold hover:underline"
              >
                Read Sriram&rsquo;s Full Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED RESOURCES ───────────────────────────────────── */}
      <section className="bg-cream-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy text-center mb-4">
            Start Here
          </h2>
          <p className="text-slate text-center mb-14">
            Curated resources to get you started, whether you&rsquo;re a
            student or a seasoned professional.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((r) => (
              <Link
                href={r.href}
                key={r.title}
                className="bg-cream rounded-2xl p-7 border border-slate/10 hover:border-amber/40 hover:shadow-lg transition-all flex flex-col gap-4 group"
              >
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full self-start ${r.color}`}
                >
                  {r.tag}
                </span>
                <h3 className="font-serif text-lg font-bold text-navy group-hover:text-amber transition-colors leading-snug">
                  {r.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed flex-1">
                  {r.excerpt}
                </p>
                <span className="text-amber text-sm font-semibold">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-14">
            What People Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-cream-dark rounded-2xl p-8 border border-slate/10 text-left flex flex-col gap-5"
              >
                <div className="text-amber text-3xl font-serif leading-none">
                  &ldquo;
                </div>
                <p className="text-navy leading-relaxed text-sm flex-1 italic">
                  {t.quote}
                </p>
                <div>
                  <p className="font-semibold text-navy text-sm">{t.name}</p>
                  <p className="text-slate text-xs mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="bg-amber py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-5">
            Not Sure Where to Start?
          </h2>
          <p className="text-navy/80 text-lg mb-10 leading-relaxed">
            Take the free 5-minute AI Career Readiness Assessment. Get an
            instant, personalised snapshot of where you stand — and what to do
            next.
          </p>
          <Link
            href="/assessment"
            className="bg-navy text-cream font-semibold px-9 py-4 rounded-full hover:bg-navy-light transition-colors text-base inline-flex items-center gap-2 shadow-lg"
          >
            Start the Free Assessment →
          </Link>
          <p className="text-navy/60 text-sm mt-4">
            Takes 5 minutes · Personalised results · No credit card required
          </p>
        </div>
      </section>
    </>
  );
}

