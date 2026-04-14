"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  {
    id: 1,
    category: "Your Background",
    question: "What best describes your current situation?",
    options: [
      { label: "Student / Recent Graduate", value: "student" },
      { label: "Mid-Career Professional (5–15 years)", value: "mid" },
      { label: "Senior Professional (15+ years)", value: "senior" },
      { label: "Career Changer / Between Roles", value: "changer" },
    ],
  },
  {
    id: 2,
    category: "Your Field",
    question: "Which industry do you work in (or plan to enter)?",
    options: [
      { label: "Finance / Accounting / Banking", value: "finance" },
      { label: "Technology / Engineering", value: "tech" },
      { label: "Marketing / Communications", value: "marketing" },
      { label: "Law / Compliance / HR", value: "legal" },
      { label: "Healthcare / Education", value: "healthcare" },
      { label: "Other / Not sure yet", value: "other" },
    ],
  },
  {
    id: 3,
    category: "AI Exposure",
    question: "How much of your daily work involves tasks that AI can currently automate?",
    options: [
      { label: "Most of it — repetitive, rule-based work", value: "high" },
      { label: "Some of it — a mix of routine and complex tasks", value: "medium" },
      { label: "Very little — highly judgement-based or creative", value: "low" },
      { label: "I'm not sure", value: "unsure" },
    ],
  },
  {
    id: 4,
    category: "Current AI Usage",
    question: "How much are you currently using AI tools in your work or studies?",
    options: [
      { label: "Regularly — it's part of my workflow", value: "regular" },
      { label: "Occasionally — experimenting now and then", value: "occasional" },
      { label: "Rarely or never", value: "rare" },
      { label: "My organisation doesn't allow it (yet)", value: "restricted" },
    ],
  },
  {
    id: 5,
    category: "Your Goals",
    question: "What matters most to you right now?",
    options: [
      { label: "Job security — I want to make sure I stay employed", value: "security" },
      { label: "Growth — I want to advance or take on new roles", value: "growth" },
      { label: "Pivot — I'm considering a career change", value: "pivot" },
      { label: "Clarity — I just want to understand what's happening", value: "clarity" },
    ],
  },
];

type ScoreProfile = {
  exposure: "Low" | "Medium" | "High" | "Transformative";
  resilience: "Strong" | "Developing" | "At Risk";
  actions: string[];
  service: string;
  serviceLink: string;
};

function scoreAnswers(answers: Record<number, string>): ScoreProfile {
  const exposureMap: Record<string, number> = {
    high: 3, medium: 2, low: 1, unsure: 2,
    finance: 2, tech: 2, marketing: 2, legal: 1, healthcare: 1, other: 2,
  };
  const resMap: Record<string, number> = {
    regular: 3, occasional: 2, rare: 1, restricted: 1,
    student: 2, mid: 2, senior: 3, changer: 1,
  };

  let expScore = (exposureMap[answers[3]] || 2) + (exposureMap[answers[2]] || 2);
  let resScore = (resMap[answers[1]] || 2) + (resMap[answers[4]] || 2);

  const exposure: ScoreProfile["exposure"] =
    expScore >= 5 ? "Transformative" : expScore >= 4 ? "High" : expScore >= 3 ? "Medium" : "Low";

  const resilience: ScoreProfile["resilience"] =
    resScore >= 5 ? "Strong" : resScore >= 3 ? "Developing" : "At Risk";

  const goal = answers[5] || "clarity";
  const actions =
    goal === "security"
      ? [
          "Map exactly which tasks in your role are automatable — specificity reduces fear",
          "Identify 2–3 'AI-adjacent' skills to build in the next 90 days",
          "Have an honest conversation with your manager about the organisation's AI direction",
        ]
      : goal === "growth"
      ? [
          "Identify the emerging roles in your field that combine your domain expertise with AI literacy",
          "Build a visible track record of AI-enabled work — even small wins",
          "Find a community of early adopters in your industry to accelerate your learning",
        ]
      : goal === "pivot"
      ? [
          "Audit your transferable skills — they're more portable than you think",
          "Research which adjacent fields value your background + AI literacy combination",
          "Start one small experiment in your target area before committing to a full switch",
        ]
      : [
          "Read one well-sourced analysis of AI's impact on your specific industry",
          "Try one AI tool relevant to your work for 30 days",
          "Take a structured course on AI literacy (not coding — literacy)",
        ];

  const serviceLink =
    answers[1] === "student" ? "/resources" : "/services/career-advisory";
  const service =
    answers[1] === "student"
      ? "Browse Student Resources"
      : "Book a 1:1 Career Clarity Session";

  return { exposure, resilience, actions, service, serviceLink };
}

export default function AssessmentPage() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<ScoreProfile | null>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleAnswer(value: string) {
    const q = questions[current];
    const newAnswers = { ...answers, [q.id]: value };
    setAnswers(newAnswers);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setResult(scoreAnswers(newAnswers));
    }
  }

  if (!started) {
    return (
      <>
        <section className="bg-navy text-cream py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-amber text-xs font-semibold uppercase tracking-wider mb-4">
              Free Tool
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
              AI Career Readiness Assessment
            </h1>
            <p className="text-cream/70 text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              5 questions. 5 minutes. A personalised snapshot of your AI
              exposure, resilience, and the 3 moves you should make next.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-12">
              {[
                { icon: "🎯", label: "AI Exposure Score" },
                { icon: "🛡️", label: "Resilience Index" },
                { icon: "🗺️", label: "Top 3 Actions" },
              ].map((item) => (
                <div key={item.label} className="bg-navy-light border border-white/10 rounded-2xl p-5">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <p className="text-cream/70 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setStarted(true)}
              className="bg-amber text-navy font-semibold px-10 py-4 rounded-full hover:bg-amber-light transition-colors text-base"
            >
              Start the Free Assessment →
            </button>
            <p className="text-cream/40 text-sm mt-4">Free · No email required to see results</p>
          </div>
        </section>
      </>
    );
  }

  if (result) {
    const exposureColor =
      result.exposure === "Low" ? "text-green-400" :
      result.exposure === "Medium" ? "text-amber" :
      result.exposure === "High" ? "text-orange-400" : "text-red-400";

    const resColor =
      result.resilience === "Strong" ? "text-green-400" :
      result.resilience === "Developing" ? "text-amber" : "text-red-400";

    return (
      <section className="bg-cream min-h-screen py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-amber text-xs font-semibold uppercase tracking-wider mb-3">
              Your Results
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy">
              Here&rsquo;s Where You Stand
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-10">
            <div className="bg-navy text-cream rounded-2xl p-7 text-center">
              <p className="text-cream/60 text-xs uppercase tracking-wider mb-3">AI Exposure</p>
              <div className={`font-serif text-3xl font-bold mb-2 ${exposureColor}`}>
                {result.exposure}
              </div>
              <p className="text-cream/70 text-xs">
                {result.exposure === "Low" && "Your role has relatively low AI displacement risk."}
                {result.exposure === "Medium" && "Some parts of your role face meaningful AI pressure."}
                {result.exposure === "High" && "AI will significantly reshape your current role."}
                {result.exposure === "Transformative" && "Your role is being fundamentally transformed by AI."}
              </p>
            </div>
            <div className="bg-amber text-navy rounded-2xl p-7 text-center">
              <p className="text-navy/60 text-xs uppercase tracking-wider mb-3">Resilience Index</p>
              <div className={`font-serif text-3xl font-bold mb-2 ${resColor}`}>
                {result.resilience}
              </div>
              <p className="text-navy/70 text-xs">
                {result.resilience === "Strong" && "You have the foundation to navigate this shift well."}
                {result.resilience === "Developing" && "You have potential — focused effort will make the difference."}
                {result.resilience === "At Risk" && "Now is the right time to start building AI resilience."}
              </p>
            </div>
          </div>

          <div className="bg-cream-dark rounded-2xl p-8 border border-slate/10 mb-8">
            <h3 className="font-serif text-xl font-bold text-navy mb-5">
              Your Top 3 Recommended Actions
            </h3>
            <div className="space-y-4">
              {result.actions.map((action, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-7 h-7 rounded-full bg-amber text-navy text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-slate text-sm leading-relaxed pt-1">{action}</p>
                </div>
              ))}
            </div>
          </div>

          {!submitted ? (
            <div className="bg-navy text-cream rounded-2xl p-8 mb-8">
              <h3 className="font-serif text-xl font-bold mb-2">
                Get Your Full Report by Email
              </h3>
              <p className="text-cream/60 text-sm mb-5">
                Including a personalised resource list and a deeper breakdown
                of your results. No spam, ever.
              </p>
              <form
                className="flex gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSubmitted(true);
                }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-navy-light border border-white/20 text-cream placeholder:text-cream/40 rounded-full px-5 py-2.5 text-sm focus:outline-none focus:border-amber"
                />
                <button
                  type="submit"
                  className="bg-amber text-navy font-semibold px-6 py-2.5 rounded-full hover:bg-amber-light transition-colors text-sm whitespace-nowrap"
                >
                  Email Me →
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-8 text-center">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-serif text-xl font-bold text-navy mb-2">Report on its way!</h3>
              <p className="text-slate text-sm">
                Check your inbox at {email}. We&rsquo;ll also send you a weekly newsletter (unsubscribe anytime).
              </p>
            </div>
          )}

          <div className="bg-amber rounded-2xl p-8 text-center">
            <h3 className="font-serif text-xl font-bold text-navy mb-3">
              Ready to go deeper?
            </h3>
            <p className="text-navy/80 text-sm mb-5">
              Your results suggest that a focused 1:1 session could significantly
              accelerate your next steps.
            </p>
            <Link
              href={result.serviceLink}
              className="bg-navy text-cream font-semibold px-7 py-3 rounded-full hover:bg-navy-light transition-colors text-sm"
            >
              {result.service} →
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const q = questions[current];
  const progress = ((current) / questions.length) * 100;

  return (
    <section className="bg-cream min-h-screen py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress */}
        <div className="mb-10">
          <div className="flex justify-between text-sm text-slate mb-2">
            <span>{q.category}</span>
            <span>{current + 1} of {questions.length}</span>
          </div>
          <div className="h-1.5 bg-slate/10 rounded-full">
            <div
              className="h-1.5 bg-amber rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-8">
          {q.question}
        </h2>

        <div className="space-y-3">
          {q.options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleAnswer(opt.value)}
              className="w-full text-left border-2 border-slate/20 rounded-xl px-6 py-4 text-navy hover:border-amber hover:bg-amber/5 transition-all font-medium text-sm"
            >
              {opt.label}
            </button>
          ))}
        </div>

        {current > 0 && (
          <button
            onClick={() => setCurrent(current - 1)}
            className="mt-6 text-slate text-sm hover:text-navy transition-colors"
          >
            ← Back
          </button>
        )}
      </div>
    </section>
  );
}
