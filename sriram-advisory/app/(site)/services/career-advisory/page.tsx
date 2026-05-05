import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Career Clarity Session — Sriram Advisory",
  description:
    "A focused 60-minute 1:1 advisory session to map your AI exposure, identify your strengths, and build a 90-day action plan.",
};

export default function CareerAdvisoryPage() {
  return (
    <>
      <section className="bg-navy text-cream py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-amber text-xs font-semibold uppercase tracking-wider mb-4">
            1:1 Advisory
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
            AI Career Clarity Session
          </h1>
          <p className="text-cream/70 text-xl leading-relaxed max-w-2xl">
            In 60 focused minutes, you&rsquo;ll leave with a personalised map of
            your AI exposure, your biggest opportunities, and a clear 90-day
            plan — built entirely around your background and goals.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-5">
                  What You&rsquo;ll Walk Away With
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Your Personal AI Exposure Map",
                      body: "A clear picture of which parts of your role are most and least exposed to AI displacement, automation, and augmentation.",
                    },
                    {
                      title: "Your Resilience Profile",
                      body: "An honest analysis of where your experience, skills, and adaptability actually stand — and where the gaps are.",
                    },
                    {
                      title: "3–5 Concrete Actions",
                      body: "Specific, prioritised next steps tailored to your timeline, resources, and goals. Not generic advice — real moves.",
                    },
                    {
                      title: "A Curated Resource List",
                      body: "Courses, communities, tools, and reading tailored to your specific industry and background.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 p-5 bg-cream-dark rounded-xl border border-slate/10">
                      <div className="text-amber mt-1 text-lg flex-shrink-0">✓</div>
                      <div>
                        <h4 className="font-semibold text-navy mb-1">{item.title}</h4>
                        <p className="text-slate text-sm leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-5">
                  What the Session Looks Like
                </h2>
                <div className="space-y-3 text-slate">
                  <p>The session is conducted via video call. You&rsquo;ll be asked a few short questions when you book, so the time is focused entirely on your situation — not on getting up to speed.</p>
                  <p>There&rsquo;s no script, no sales pitch, no generic frameworks. Sriram will engage with your specific role, industry, experience level, and goals.</p>
                  <p>After the session, you&rsquo;ll receive a short written summary of the key insights and action items within 24 hours.</p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-5">
                  What Past Clients Say
                </h2>
                <div className="space-y-5">
                  {[
                    { quote: "I came in anxious about my role in finance. I left with a plan. That clarity was priceless.", name: "Priya R.", role: "Senior Finance Manager" },
                    { quote: "Sriram asked questions no one had thought to ask. The session reframed my entire situation.", name: "Vikram S.", role: "Product Manager, Tech" },
                  ].map((t) => (
                    <div key={t.name} className="bg-amber/10 border border-amber/20 rounded-xl p-6">
                      <p className="text-navy italic text-sm leading-relaxed mb-3">&ldquo;{t.quote}&rdquo;</p>
                      <p className="text-navy font-semibold text-sm">{t.name}</p>
                      <p className="text-slate text-xs">{t.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-navy text-cream rounded-3xl p-8 sticky top-24">
                <h3 className="font-serif text-xl font-bold mb-2">Book a Session</h3>
                <p className="text-cream/60 text-sm mb-6">
                  60-minute video call · Personalised to your background
                </p>
                <div className="space-y-3 text-sm text-cream/70 mb-8">
                  <div className="flex items-center gap-2">
                    <span className="text-amber">📅</span> Flexible scheduling
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber">📝</span> Written summary included
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber">🌍</span> Conducted via Zoom/Meet
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="block w-full bg-amber text-navy font-semibold py-3.5 rounded-full text-center hover:bg-amber-light transition-colors mb-4"
                >
                  Book via Contact Form →
                </Link>
                <p className="text-cream/40 text-xs text-center">
                  Pricing shared on inquiry · Usually responds within 48 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-amber py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-navy/70 text-sm mb-2">Not ready to book yet?</p>
          <h3 className="font-serif text-2xl font-bold text-navy mb-4">
            Start with the Free Assessment
          </h3>
          <Link href="/assessment" className="inline-flex items-center gap-2 bg-navy text-cream font-semibold px-7 py-3 rounded-full hover:bg-navy-light transition-colors text-sm">
            Take the Free Assessment →
          </Link>
        </div>
      </section>
    </>
  );
}
