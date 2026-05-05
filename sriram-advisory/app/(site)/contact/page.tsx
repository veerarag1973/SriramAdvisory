"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy text-cream py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-amber text-xs font-semibold uppercase tracking-wider mb-4">
            Get in Touch
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
            Let&rsquo;s Talk
          </h1>
          <p className="text-cream/70 text-xl leading-relaxed max-w-2xl mx-auto">
            Whether you&rsquo;re an individual looking for clarity or an
            organisation exploring a partnership — the first step is a
            conversation.
          </p>
          <p className="text-amber text-sm mt-4">
            I personally respond to every inquiry within 48 hours.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Contact form */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-navy mb-8">
                Send a Message
              </h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full border border-slate/30 rounded-xl px-4 py-3 text-sm text-navy placeholder:text-slate-light focus:outline-none focus:border-amber bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your surname"
                      className="w-full border border-slate/30 rounded-xl px-4 py-3 text-sm text-navy placeholder:text-slate-light focus:outline-none focus:border-amber bg-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full border border-slate/30 rounded-xl px-4 py-3 text-sm text-navy placeholder:text-slate-light focus:outline-none focus:border-amber bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    I am a…
                  </label>
                  <select
                    className="w-full border border-slate/30 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:border-amber bg-white"
                    defaultValue=""
                  >
                    <option value="" disabled>Select one</option>
                    <option value="student">Student</option>
                    <option value="professional">Mid-Career Professional</option>
                    <option value="organisation">Organisation / HR Leader</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me a little about your situation and what you're looking for…"
                    className="w-full border border-slate/30 rounded-xl px-4 py-3 text-sm text-navy placeholder:text-slate-light focus:outline-none focus:border-amber bg-white resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber text-navy font-semibold py-3.5 rounded-full hover:bg-amber-light transition-colors"
                >
                  Send Message →
                </button>
                <p className="text-slate text-xs text-center pt-1">
                  Your information is kept private and never shared.
                </p>
              </form>
            </div>

            {/* Contact details */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-6">
                  Other Ways to Connect
                </h2>
                <div className="space-y-5">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-amber/10 rounded-xl flex items-center justify-center flex-shrink-0 text-amber">
                      ✉
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">Email</p>
                      <a href="mailto:hello@sriramadvisory.com" className="text-amber text-sm hover:underline">
                        hello@sriramadvisory.com
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-amber/10 rounded-xl flex items-center justify-center flex-shrink-0 text-amber">
                      💼
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">LinkedIn</p>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-amber text-sm hover:underline">
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-amber/10 rounded-xl flex items-center justify-center flex-shrink-0 text-amber">
                      📅
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">Book a Discovery Call</p>
                      <p className="text-slate text-sm">Available via Calendly after initial inquiry</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-cream-dark rounded-2xl p-8 border border-slate/10">
                <h3 className="font-serif text-xl font-bold text-navy mb-4">
                  Response Time
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  I personally read and respond to every message. You can typically
                  expect a reply within 48 hours on business days. If your inquiry
                  is time-sensitive, please mention it in your message.
                </p>
              </div>

              <div className="bg-navy text-cream rounded-2xl p-8">
                <h3 className="font-serif text-xl font-bold mb-4">
                  Not Sure What to Ask?
                </h3>
                <p className="text-cream/70 text-sm leading-relaxed mb-5">
                  Start with the free AI Career Readiness Assessment. It takes 5
                  minutes and will give both of us useful context for any follow-on
                  conversation.
                </p>
                <a
                  href="/assessment"
                  className="inline-block bg-amber text-navy font-semibold px-6 py-2.5 rounded-full hover:bg-amber-light transition-colors text-sm"
                >
                  Take the Assessment →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
