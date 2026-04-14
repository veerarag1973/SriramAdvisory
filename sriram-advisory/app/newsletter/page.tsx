"use client";

import Link from "next/link";

export default function NewsletterPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-cream py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-amber text-xs font-semibold uppercase tracking-wider mb-4">
            Free Weekly Newsletter
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
            Weekly Clarity in a Fast-Moving World
          </h1>
          <p className="text-cream/70 text-xl leading-relaxed max-w-2xl mx-auto">
            No jargon. No hype. No doom. Just well-researched, plainly written
            insights on what AI actually means for your career — delivered
            weekly to your inbox.
          </p>
        </div>
      </section>

      {/* Two newsletters */}
      <section className="bg-cream py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 max-w-xl mx-auto">
            {/* AI for Everyone */}
            <div className="bg-amber text-navy rounded-3xl p-10 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 bg-navy/10 text-navy text-xs font-semibold px-4 py-1.5 rounded-full self-start">
                For Everyone
              </div>
              <h2 className="font-serif text-3xl font-bold">AI for Everyone</h2>
              <p className="text-navy/80">
                For students, early-career professionals, and anyone who wants
                to understand AI without having a computer science degree.
              </p>
              <ul className="text-navy/80 space-y-2 text-sm">
                <li>→ Plain-English AI explainers</li>
                <li>→ Career tips for the AI era</li>
                <li>→ Tool spotlights and skill recommendations</li>
                <li>→ Weekly · Free forever</li>
              </ul>

              <form className="mt-auto space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full bg-navy/10 border border-navy/20 text-navy placeholder:text-navy/40 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-navy/60"
                />
                <button
                  type="submit"
                  className="w-full bg-navy text-cream font-semibold py-3 rounded-full hover:bg-navy-light transition-colors text-sm"
                >
                  Subscribe to AI for Everyone →
                </button>
              </form>
            </div>
          </div>

          <p className="text-center text-slate text-sm mt-8">
            Unsubscribe anytime. We never sell or share your email.
          </p>
        </div>
      </section>

      {/* Sample content */}
      <section className="bg-cream-dark py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy text-center mb-14">
            What to Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "📊", title: "Evidence-Based", body: "Every insight is grounded in data, research, and real-world observation — not speculation or trend-chasing." },
              { icon: "🧭", title: "Actionable", body: "Each issue ends with something you can actually do — a reflection, a resource, a conversation to have." },
              { icon: "🕐", title: "Respect for Your Time", body: "Tightly written. Typically 5–7 minutes to read. We respect that your attention is finite and precious." },
            ].map((item) => (
              <div key={item.title} className="bg-cream rounded-2xl p-8 border border-slate/10 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus CTA */}
      <section className="bg-navy text-cream py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-2xl font-bold mb-4">
            Want to start with something more personalised?
          </h2>
          <p className="text-cream/70 mb-6">
            Take the free assessment and get a personalised snapshot of where
            you stand — before you subscribe to anything.
          </p>
          <Link
            href="/assessment"
            className="bg-amber text-navy font-semibold px-7 py-3.5 rounded-full hover:bg-amber-light transition-colors"
          >
            Take the Free Assessment →
          </Link>
        </div>
      </section>
    </>
  );
}
