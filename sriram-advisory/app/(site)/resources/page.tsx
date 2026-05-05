import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Blog — Sriram Advisory",
  description:
    "Articles, guides, and tools to help students and professionals navigate the AI era with clarity and confidence.",
};

const articles = [
  {
    category: "AI & Careers",
    slug: "jobs-at-risk-from-ai",
    title: "Which Jobs Are Actually at Risk from AI? A Clear-Headed Analysis",
    excerpt: "Cutting through the headlines to give you an honest, evidence-based view of which roles face the greatest displacement risk — and why.",
    readTime: "8 min read",
    tag: "Popular",
    tagColor: "bg-amber/10 text-amber",
  },
  {
    category: "For Professionals",
    slug: "5-career-moves-ai-era",
    title: "The 5 Career Moves That Will Define the AI Era (And the 3 That Won't)",
    excerpt: "Not all reskilling advice is created equal. Here are the moves that will genuinely differentiate you — and the ones that are just noise.",
    readTime: "10 min read",
    tag: "Editor's Pick",
    tagColor: "bg-navy/10 text-navy",
  },
  {
    category: "For Students",
    slug: "ai-resilient-career-students",
    title: "For Students: How to Build an AI-Resilient Career Starting Today",
    excerpt: "Practical guidance for undergrads, graduates, and MBA students entering a job market being fundamentally reshaped.",
    readTime: "7 min read",
    tag: "For Students",
    tagColor: "bg-green-100 text-green-700",
  },
  {
    category: "For Professionals",
    slug: "mid-career-ai-pivot",
    title: "The Mid-Career AI Pivot: A Framework for Professionals in Transition",
    excerpt: "Twenty years of experience isn't a liability in the AI era. Here's how to reposition it as the asset it actually is.",
    readTime: "12 min read",
    tag: "Framework",
    tagColor: "bg-purple-100 text-purple-700",
  },
  {
    category: "AI & Careers",
    slug: "ai-literacy-vs-skills",
    title: "AI Literacy vs. AI Skills: What You Actually Need to Know",
    excerpt: "Not everyone needs to learn to code. But everyone needs AI literacy. Here's the critical difference and why it matters for your career.",
    readTime: "6 min read",
    tag: "Foundational",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    category: "Industry Spotlights",
    slug: "finance-law-marketing-ai",
    title: "Finance, Law, Marketing, Engineering — How AI Is Changing Each Field",
    excerpt: "A sector-by-sector breakdown of where AI is having the most impact, what's changing, and what's not going away.",
    readTime: "14 min read",
    tag: "Industry Guide",
    tagColor: "bg-orange-100 text-orange-700",
  },
];

const guides = [
  {
    icon: "📋",
    title: "AI Career Readiness Checklist",
    description: "A 2-page PDF to quickly assess where you stand and what your immediate next steps should be.",
    pages: "2 pages",
  },
  {
    icon: "🎓",
    title: "The Student's AI Career Roadmap",
    description: "A 10-page guide for students navigating degree choices, skill-building, and job markets in the AI era.",
    pages: "10 pages",
  },
  {
    icon: "🔄",
    title: "Mid-Career AI Pivot Playbook",
    description: "A 15-page guide for experienced professionals repositioning themselves for the next decade.",
    pages: "15 pages",
  },
  {
    icon: "📖",
    title: "AI Vocabulary for Non-Technical Professionals",
    description: "A plain-English glossary of the key AI terms every professional needs to know — without the jargon.",
    pages: "Glossary",
  },
];

const categories = ["All", "AI & Careers", "For Students", "For Professionals", "Industry Spotlights", "Tools & Frameworks"];

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-navy text-cream py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-amber text-xs font-semibold uppercase tracking-wider mb-4">
            Resources
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
            Clarity Starts Here
          </h1>
          <p className="text-cream/70 text-xl leading-relaxed max-w-2xl mx-auto">
            Articles, frameworks, and free guides to help you understand what
            AI means for your career — and what to do about it.
          </p>
        </div>
      </section>

      {/* Featured articles */}
      <section id="blog" className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
            <h2 className="font-serif text-3xl font-bold text-navy">
              Articles &amp; Analysis
            </h2>
            <Link href="/resources/blog" className="text-amber font-semibold text-sm hover:underline">
              View all articles →
            </Link>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
                  cat === "All"
                    ? "bg-navy text-cream border-navy"
                    : "border-slate/30 text-slate hover:border-amber hover:text-amber"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                href={`/resources/blog`}
                key={article.slug}
                className="bg-white rounded-2xl border border-slate/10 hover:border-amber/40 hover:shadow-lg transition-all overflow-hidden group flex flex-col"
              >
                <div className="h-2 bg-amber/20 group-hover:bg-amber transition-colors" />
                <div className="p-7 flex flex-col gap-4 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-light text-xs uppercase tracking-wider">{article.category}</span>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${article.tagColor}`}>{article.tag}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-navy group-hover:text-amber transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed flex-1">{article.excerpt}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-slate-light text-xs">{article.readTime}</span>
                    <span className="text-amber text-sm font-semibold">Read →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Free Guides */}
      <section id="guides" className="bg-cream-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-amber text-xs font-semibold uppercase tracking-wider mb-3">
              Free Downloads
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy">
              Practical Guides
            </h2>
            <p className="text-slate mt-3 max-w-xl mx-auto">
              Downloadable guides for students and professionals. Enter your
              email to get instant access.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.map((g) => (
              <div
                key={g.title}
                className="bg-cream rounded-2xl p-8 border border-slate/10 flex gap-6 hover:border-amber/40 hover:shadow-md transition-all"
              >
                <div className="text-5xl flex-shrink-0">{g.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-serif text-lg font-bold text-navy">{g.title}</h3>
                  </div>
                  <span className="text-xs text-slate-light mb-3 block">{g.pages}</span>
                  <p className="text-slate text-sm leading-relaxed mb-4">{g.description}</p>
                  <button className="bg-amber text-navy text-sm font-semibold px-5 py-2 rounded-full hover:bg-amber-light transition-colors">
                    Download Free →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free tools section */}
      <section id="tools" className="bg-cream py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-amber text-xs font-semibold uppercase tracking-wider mb-3">
            Free Tool
          </div>
          <h2 className="font-serif text-3xl font-bold text-navy mb-5">
            AI Career Readiness Assessment
          </h2>
          <p className="text-slate text-lg max-w-2xl mx-auto mb-8">
            5 questions. 5 minutes. Get a personalised AI exposure score,
            resilience index, and 3 recommended next actions.
          </p>
          <Link
            href="/assessment"
            className="bg-navy text-cream font-semibold px-8 py-4 rounded-full hover:bg-navy-light transition-colors"
          >
            Take the Free Assessment →
          </Link>
        </div>
      </section>
    </>
  );
}
