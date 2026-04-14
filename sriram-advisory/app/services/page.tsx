import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Sriram Advisory",
  description:
    "1:1 career advisory sessions, workshops, and corporate AI workforce programs to help you navigate the AI era.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-cream py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-amber text-xs font-semibold uppercase tracking-wider mb-4">
            Advisory Services
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
            How Sriram Advisory Can Help
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you&rsquo;re a student mapping your future, a professional
            navigating a pivot, or an organisation managing AI&rsquo;s impact on
            your people — there&rsquo;s a path designed for where you are.
          </p>
        </div>
      </section>

      {/* Service 1 */}
      <section className="bg-cream py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="text-amber text-xs font-semibold uppercase tracking-wider mb-3">
                01 · Individual
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-5">
                AI Career Clarity Session
              </h2>
              <p className="text-slate text-lg leading-relaxed mb-6">
                A focused 60-minute 1:1 session to map your specific AI exposure,
                identify your strengths, and build a 90-day action plan.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Personalised AI exposure map for your role & industry",
                  "3–5 concrete next actions tailored to your background",
                  "Resource list matched to your specific goals",
                  "Honest, unfiltered assessment — no generic advice",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-amber mt-0.5">✓</span>
                    <span className="text-slate text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/services/career-advisory"
                className="inline-flex items-center gap-2 bg-amber text-navy font-semibold px-7 py-3.5 rounded-full hover:bg-amber-light transition-colors"
              >
                Book a Session →
              </Link>
            </div>
            <div className="bg-navy-light rounded-3xl p-10 border border-amber/20">
              <div className="text-6xl mb-6">🧭</div>
              <h3 className="font-serif text-xl font-bold text-cream mb-3">
                Who It&rsquo;s For
              </h3>
              <ul className="text-cream/70 space-y-2 text-sm">
                <li>→ Final-year students and recent graduates</li>
                <li>→ Mid-career professionals considering a pivot</li>
                <li>→ Anyone unsure what AI means for their specific role</li>
                <li>→ Professionals facing redundancy discussions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2 */}
      <section className="bg-cream-dark py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="bg-navy rounded-3xl p-10 border border-amber/20 order-2 lg:order-1">
              <div className="text-6xl mb-6">👥</div>
              <h3 className="font-serif text-xl font-bold text-cream mb-3">
                Workshop Formats
              </h3>
              <ul className="text-cream/70 space-y-2 text-sm">
                <li>→ Keynote address (60–90 minutes)</li>
                <li>→ Half-day workshop (3 hours)</li>
                <li>→ Full-day intensive (6 hours)</li>
                <li>→ Multi-session cohort program</li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-amber text-xs font-semibold uppercase tracking-wider mb-3">
                02 · Groups &amp; Teams
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-5">
                Career Readiness Workshops
              </h2>
              <p className="text-slate text-lg leading-relaxed mb-6">
                Half-day and full-day workshops for teams, student cohorts, and
                professional communities. Practical. Evidence-based. Actionable.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "AI and Your Career: What's Really Changing",
                  "Skills for the AI Era: A Practical Workshop",
                  "Future-Proofing Your Career: A Student's Guide",
                  "Tailored by audience: student, professional, or corporate",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-amber mt-0.5">✓</span>
                    <span className="text-slate text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/services/workshops"
                className="inline-flex items-center gap-2 bg-navy text-cream font-semibold px-7 py-3.5 rounded-full hover:bg-navy-light transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3 */}
      <section className="bg-cream py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="text-amber text-xs font-semibold uppercase tracking-wider mb-3">
                03 · Organisations
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-5">
                Corporate AI Workforce Programs
              </h2>
              <p className="text-slate text-lg leading-relaxed mb-6">
                For HR leaders and L&amp;D teams navigating AI&rsquo;s impact on
                their workforce. Custom assessment frameworks, upskilling
                roadmaps, and change management support.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "AI Workforce Readiness Assessment (organisational)",
                  "Custom upskilling roadmap by role and function",
                  "Manager briefings and communication support",
                  "Employee workshops across finance, tech, professional services",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-amber mt-0.5">✓</span>
                    <span className="text-slate text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/services/corporate-programs"
                className="inline-flex items-center gap-2 bg-amber text-navy font-semibold px-7 py-3.5 rounded-full hover:bg-amber-light transition-colors"
              >
                Request a Discovery Call →
              </Link>
            </div>
            <div className="bg-amber rounded-3xl p-10">
              <div className="text-6xl mb-6">🏢</div>
              <h3 className="font-serif text-xl font-bold text-navy mb-3">
                Industries Served
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Finance", "Technology", "Professional Services", "Education", "Legal", "Healthcare", "Marketing"].map((ind) => (
                  <span key={ind} className="bg-navy/10 text-navy text-xs font-medium px-3 py-1.5 rounded-full">
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 text-cream text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold mb-5">
            Not Sure Which Service Is Right for You?
          </h2>
          <p className="text-cream/70 text-lg mb-8">
            Take the free assessment first — it will help clarify exactly
            where you are and what kind of support would be most useful.
          </p>
          <Link
            href="/assessment"
            className="bg-amber text-navy font-semibold px-8 py-4 rounded-full hover:bg-amber-light transition-colors"
          >
            Take the Free Assessment →
          </Link>
        </div>
      </section>
    </>
  );
}
