import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshops — Sriram Advisory",
  description:
    "Half-day and full-day workshops on AI and careers for student cohorts, professional associations, and companies.",
};

const topics = [
  {
    title: "AI and Your Career: What's Really Changing",
    audience: "All audiences",
    description: "A grounded, evidence-based overview of how AI is reshaping work — what's overhyped, what's real, and what to do about it.",
  },
  {
    title: "Skills for the AI Era: A Practical Workshop",
    audience: "Professionals",
    description: "A hands-on session that helps participants identify which skills to build, which to double down on, and which to let go.",
  },
  {
    title: "Future-Proofing Your Career: A Student's Guide",
    audience: "Students",
    description: "Designed for undergrads and MBA students entering a job market being reshaped by automation. Practical, honest, and actionable.",
  },
  {
    title: "The AI-Ready Organisation",
    audience: "Corporate Teams",
    description: "For leadership and management teams: how to have honest conversations about AI, talent, and the workplace of tomorrow.",
  },
];

export default function WorkshopsPage() {
  return (
    <>
      <section className="bg-navy text-cream py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-amber text-xs font-semibold uppercase tracking-wider mb-4">
            Group Learning
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
            Career Readiness Workshops
          </h1>
          <p className="text-cream/70 text-xl leading-relaxed max-w-2xl">
            Practical, evidence-based, highly interactive. Designed for student
            bodies, professional associations, and corporate teams who want real
            answers — not TED-talk inspiration.
          </p>
        </div>
      </section>

      {/* Formats */}
      <section className="bg-cream py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy text-center mb-14">
            Workshop Formats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { format: "Keynote", duration: "60–90 mins", best: "Conferences, orientation days, company all-hands", details: "High-energy, accessible overview ideal for large audiences." },
              { format: "Half-Day Workshop", duration: "3–4 hours", best: "Professional associations, student groups, team offsites", details: "Deep enough to be genuinely useful. Short enough to respect time." },
              { format: "Full-Day Intensive", duration: "6–7 hours", best: "Department teams, MBA cohorts, corporate L&D", details: "Combines teaching, reflection, and personalised action planning." },
            ].map((f) => (
              <div key={f.format} className="bg-cream-dark rounded-2xl p-8 border border-slate/10 hover:border-amber/40 transition-colors">
                <div className="font-serif text-2xl font-bold text-navy mb-1">{f.format}</div>
                <div className="text-amber text-xs font-semibold mb-4">{f.duration}</div>
                <p className="text-slate text-sm leading-relaxed mb-3">{f.details}</p>
                <p className="text-slate-light text-xs">Best for: {f.best}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-cream-dark py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy text-center mb-14">
            Workshop Topics
          </h2>
          <div className="space-y-6">
            {topics.map((t) => (
              <div key={t.title} className="bg-cream rounded-2xl p-8 border border-slate/10 flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <div className="text-amber text-xs font-semibold mb-2">{t.audience}</div>
                  <h3 className="font-serif text-xl font-bold text-navy mb-2">{t.title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{t.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-navy mb-5">
            Interested in a Workshop?
          </h2>
          <p className="text-navy/80 text-lg mb-8">
            All workshops are tailored to your audience, context, and goals.
            Get in touch to discuss formats, availability, and pricing.
          </p>
          <Link
            href="/contact"
            className="bg-navy text-cream font-semibold px-8 py-4 rounded-full hover:bg-navy-light transition-colors"
          >
            Request a Workshop →
          </Link>
        </div>
      </section>
    </>
  );
}
