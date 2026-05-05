import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sriram — AI Strategist & Career Advisor",
  description:
    "Learn about Sriram's background in finance, regulatory compliance, and AI strategy — and why he started Sriram Advisory.",
};

const beliefs = [
  {
    title: "AI anxiety is a data problem.",
    body: "When you understand what's actually changing, fear turns into strategy. Most people are anxious because they're working with incomplete or sensationalised information.",
  },
  {
    title: "Experience doesn't expire — it evolves.",
    body: "Twenty years in finance, law, or engineering is not a liability in the AI era. It's a foundation. The question is how to reposition it, not whether it's still valuable.",
  },
  {
    title: "Generic advice is noise.",
    body: "The impact of AI is profoundly different across industries, roles, and experience levels. One-size-fits-all guidance is worse than no guidance at all.",
  },
  {
    title: "Clarity creates action.",
    body: "The goal of every interaction is to leave someone more capable and more confident — not more overwhelmed. If it doesn't lead to a clear next step, it's not useful.",
  },
];

const values = [
  {
    label: "Clarity",
    description:
      "Complex ideas, translated into plain language. No jargon, no unnecessary abstraction.",
  },
  {
    label: "Honesty",
    description:
      "No hype. No doom. Grounded, evidence-based guidance — even when the truth is nuanced.",
  },
  {
    label: "Empowerment",
    description:
      "Every interaction should leave you more capable, not more anxious, about the road ahead.",
  },
];

const milestones = [
  {
    year: "1998–2005",
    event: "Enterprise Software Developer",
    detail: "Built banking software for a leading international bank at Polaris Software Lab, working with C++, Visual C++, and Java — developing a deep foundation in enterprise systems and financial technology.",
  },
  {
    year: "2005–2015",
    event: "Project Manager, Wipro",
    detail: "Managed multi-million dollar development and support programmes across Retail, Manufacturing, and BFSI verticals. Gained hands-on expertise in large-scale delivery, stakeholder management, and complex technology programmes.",
  },
  {
    year: "2013–2017",
    event: "Practice & Presales Leadership, Wipro",
    detail: "Led practice delivery and growth in portal and content management, then moved into presales — managing RFPs and RFIs across multiple industry verticals and building commercial and solutioning skills.",
  },
  {
    year: "2018–2020",
    event: "Entrepreneur — Anusham Foods",
    detail: "Stepped away from corporate life to bootstrap an ecommerce venture in food products retail. Successfully ran the business for 2.5 years, developing firsthand experience in building and operating a small enterprise from scratch.",
  },
  {
    year: "2021–2025",
    event: "Capital Markets Programme Leader, Wipro",
    detail: "Returned to Wipro as Programme Manager then Delivery Manager for multi-million dollar Capital Markets programmes in the USA. Led enterprise delivery and operations across global teams, partnering with customer leadership to deliver business value.",
  },
  {
    year: "2025–Present",
    event: "AI Champion & Enterprise AI Architect",
    detail: "Appointed AI Champion at Wipro — architecting technical upskilling paths for 800+ engineers across LLM fundamentals, RAG patterns, and prompt engineering. Simultaneously launching Sriram Advisory and building getspanforge.com, open-source observability tooling for agentic AI.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-cream py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-amber text-xs font-semibold uppercase tracking-wider mb-4">
            The Advisor Behind the Work
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
            Not an AI Futurist.
            <br />
            <span className="text-amber">An AI Realist.</span>
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Sriram is a business transformation advisor, AI strategist, and
            career guide whose work sits at the intersection of deep organisational
            experience and genuine care for the people navigating today&rsquo;s
            most consequential career shift.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="bg-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1 flex justify-center">
              <div className="w-56 h-64 rounded-3xl overflow-hidden border border-amber/20 relative shadow-xl">
                <Image
                  src="/sriram.png"
                  alt="Sriram — AI Strategist & Career Advisor"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="text-amber text-xs font-semibold uppercase tracking-wider mb-3">
                Origin Story
              </div>
              <h2 className="font-serif text-3xl font-bold text-navy mb-6">
                Why I Started This
              </h2>
              <div className="space-y-5 text-slate leading-relaxed">
                <p>
                  I&rsquo;ve spent most of my career watching organisations — and
                  the people inside them — navigate major technological transitions.
                  Finance systems. Compliance overhauls. Cloud migrations. Each time,
                  the pattern was the same: the technology moved fast, and the people
                  were left to figure out the human side on their own.
                </p>
                <p>
                  When AI began reshaping knowledge work in a serious way, I
                  recognised that pattern immediately — only this time, the stakes
                  were higher and the speed was faster. I started getting asked by
                  colleagues, contacts, and friends: <em>&ldquo;What does this actually
                  mean for my career?&rdquo;</em> Not the theoretical version. The
                  real, personal, &ldquo;should I be worried?&rdquo; version.
                </p>
                <p>
                  I didn&rsquo;t have a simple answer — because there isn&rsquo;t one.
                  But I found that the right question, asked well, cut through most of
                  the anxiety. That&rsquo;s when I started writing, advising, and
                  eventually formalising this work into Sriram Advisory.
                </p>
                <p>
                  The mission is simple: give people the clarity they need to act —
                  not the fear that makes them freeze, and not the hype that makes
                  them overreact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="bg-cream-dark py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-amber text-xs font-semibold uppercase tracking-wider mb-3">
              My Philosophy
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy">
              How I Think About AI and Careers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beliefs.map((b, i) => (
              <div key={i} className="bg-cream rounded-2xl p-8 border border-slate/10">
                <div className="text-amber font-serif text-4xl font-bold mb-4 leading-none">
                  0{i + 1}
                </div>
                <h3 className="font-serif text-lg font-bold text-navy mb-3">
                  {b.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="bg-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-amber text-xs font-semibold uppercase tracking-wider mb-3">
              Career Background
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy">
              Built on Experience
            </h2>
          </div>
          <div className="relative pl-8 border-l-2 border-amber/30 space-y-10">
            {milestones.map((m, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-amber border-4 border-cream" />
                <p className="text-amber text-xs font-semibold uppercase tracking-wider mb-1">
                  {m.year}
                </p>
                <h4 className="font-serif text-lg font-bold text-navy mb-2">
                  {m.event}
                </h4>
                <p className="text-slate text-sm leading-relaxed">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy py-20 text-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-amber text-xs font-semibold uppercase tracking-wider mb-3">
            Core Values
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-14">
            What I Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.label}
                className="bg-navy-light border border-white/10 rounded-2xl p-8 text-left"
              >
                <div className="text-amber font-serif text-2xl font-bold mb-4">
                  {v.label}
                </div>
                <p className="text-cream/70 text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-navy mb-5">
            Ready to Find Your Footing?
          </h2>
          <p className="text-navy/80 text-lg mb-8">
            Start with the free AI Career Readiness Assessment, or book a
            1:1 session directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/assessment"
              className="bg-navy text-cream font-semibold px-7 py-3.5 rounded-full hover:bg-navy-light transition-colors"
            >
              Take the Free Assessment →
            </Link>
            <Link
              href="/services/career-advisory"
              className="border-2 border-navy text-navy font-semibold px-7 py-3.5 rounded-full hover:bg-navy hover:text-cream transition-colors"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
