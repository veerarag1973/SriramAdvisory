import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate AI Workforce Programs — Sriram Advisory",
  description:
    "Custom AI workforce readiness assessments, upskilling roadmaps, and change management support for HR and L&D leaders.",
};

export default function CorporatePage() {
  return (
    <>
      <section className="bg-navy text-cream py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-amber text-xs font-semibold uppercase tracking-wider mb-4">
            For Organisations
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
            Corporate AI Workforce Programs
          </h1>
          <p className="text-cream/70 text-xl leading-relaxed max-w-2xl">
            Most organisations are adopting AI tools. Far fewer are redesigning
            roles, career paths, or upskilling frameworks to match. That gap is
            where this practice lives.
          </p>
        </div>
      </section>

      {/* Problem frame */}
      <section className="bg-cream-dark py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl font-bold text-navy mb-6">The Problem</h2>
              <div className="space-y-4 text-slate">
                <p>Organisations are rolling out AI tools at speed. But tools without strategy create confusion, anxiety, and wasted investment.</p>
                <p>Employees don&rsquo;t know if their roles are safe. Managers don&rsquo;t know what to say. HR teams are flying blind on reskilling needs.</p>
                <p>The result: lower adoption, higher attrition, and a workforce that&rsquo;s more anxious — not more capable.</p>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-navy mb-6">The Solution</h2>
              <div className="space-y-4 text-slate">
                <p>A structured, evidence-based assessment of where your workforce is — and a clear, prioritised roadmap for where it needs to go.</p>
                <p>Not a generic e-learning program. A bespoke engagement built around your organisation&rsquo;s roles, culture, and AI maturity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-cream py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy text-center mb-14">
            What&rsquo;s Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: "📊", title: "AI Workforce Readiness Assessment", body: "Role-by-role analysis of AI exposure across your organisation, with quantified risk and opportunity scores." },
              { icon: "🗺️", title: "Custom Upskilling Roadmap", body: "A prioritised reskilling plan by function — not generic courses, but targeted capabilities tied to your specific AI trajectory." },
              { icon: "🎤", title: "Manager Briefings", body: "Equip your people leaders to have honest, informed conversations about AI with their teams. Reduces anxiety, builds trust." },
              { icon: "🏗️", title: "Employee Workshops", body: "Practical, engaging sessions that help your workforce understand what&rsquo;s changing and what they can do about it." },
            ].map((item) => (
              <div key={item.title} className="bg-cream-dark rounded-2xl p-8 border border-slate/10">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-cream py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-5">
            Ready for a Discovery Conversation?
          </h2>
          <p className="text-cream/70 text-lg mb-8">
            Every engagement starts with a 30-minute discovery call. No
            obligation, no pitch — just an honest conversation about your
            situation and whether Sriram Advisory is the right fit.
          </p>
          <Link
            href="/contact"
            className="bg-amber text-navy font-semibold px-8 py-4 rounded-full hover:bg-amber-light transition-colors"
          >
            Request a Discovery Call →
          </Link>
        </div>
      </section>
    </>
  );
}
