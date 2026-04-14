import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Sriram Advisory",
  description:
    "In-depth articles on AI, careers, and the future of work — written for both students and experienced professionals.",
};

const posts = [
  {
    category: "AI & Careers",
    title: "Which Jobs Are Actually at Risk from AI? A Clear-Headed Analysis",
    excerpt: "Cutting through the headlines to give you an honest, evidence-based view of which roles face the greatest displacement risk — and why most of the loudest predictions are wrong.",
    readTime: "8 min",
    date: "April 2026",
    tag: "Popular",
    tagColor: "bg-amber/10 text-amber",
  },
  {
    category: "For Professionals",
    title: "The 5 Career Moves That Will Define the AI Era (And the 3 That Won't)",
    excerpt: "Not all reskilling advice is equal. Here are the moves that will genuinely differentiate you over the next five years — and the ones that are just expensive noise.",
    readTime: "10 min",
    date: "April 2026",
    tag: "Editor's Pick",
    tagColor: "bg-navy/10 text-navy",
  },
  {
    category: "For Students",
    title: "For Students: How to Build an AI-Resilient Career Starting Today",
    excerpt: "Practical guidance for undergrads, graduates, and MBA students entering a job market being fundamentally reshaped by automation and AI augmentation.",
    readTime: "7 min",
    date: "March 2026",
    tag: "For Students",
    tagColor: "bg-green-100 text-green-700",
  },
  {
    category: "For Professionals",
    title: "The Mid-Career AI Pivot: A Framework for Professionals in Transition",
    excerpt: "Twenty years of experience is not a liability in the AI era. Here's a practical framework for repositioning your expertise as the strategic asset it actually is.",
    readTime: "12 min",
    date: "March 2026",
    tag: "Framework",
    tagColor: "bg-purple-100 text-purple-700",
  },
  {
    category: "AI & Careers",
    title: "AI Literacy vs. AI Skills: What You Actually Need to Know",
    excerpt: "Not everyone needs to learn to code. But everyone needs AI literacy. Here's the critical distinction and why conflating them is leading millions of people astray.",
    readTime: "6 min",
    date: "February 2026",
    tag: "Foundational",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    category: "Industry Spotlights",
    title: "Finance, Law, Marketing, Engineering — How AI Is Changing Each Field",
    excerpt: "A sector-by-sector breakdown of where AI is having the most impact, what's genuinely being automated, and which human capabilities are becoming more valuable, not less.",
    readTime: "14 min",
    date: "February 2026",
    tag: "Industry Guide",
    tagColor: "bg-orange-100 text-orange-700",
  },
  {
    category: "AI & Careers",
    title: "The New Career Ladder: What Progression Looks Like in the Age of AI",
    excerpt: "The traditional career ladder is being redesigned. Here's what upward mobility, promotions, and career development look like when AI can do what junior staff used to do.",
    readTime: "9 min",
    date: "January 2026",
    tag: "Analysis",
    tagColor: "bg-slate/10 text-slate",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-navy text-cream py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-amber text-xs font-semibold uppercase tracking-wider mb-4">
            Articles &amp; Analysis
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
            The Blog
          </h1>
          <p className="text-cream/70 text-xl leading-relaxed max-w-2xl">
            In-depth writing on AI, careers, and the future of work. No hot
            takes. No recycled LinkedIn wisdom. Just clear, honest, useful
            analysis.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          <div className="bg-navy text-cream rounded-3xl p-10 mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-amber text-xs font-semibold uppercase tracking-wider">{posts[0].category}</span>
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${posts[0].tagColor}`}>{posts[0].tag}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                {posts[0].title}
              </h2>
              <p className="text-cream/70 text-sm leading-relaxed mb-6">{posts[0].excerpt}</p>
              <div className="flex items-center gap-4">
                <span className="text-cream/40 text-xs">{posts[0].date} · {posts[0].readTime} read</span>
                <Link href="/resources/blog" className="text-amber font-semibold text-sm hover:underline">
                  Read Article →
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center items-center">
              <div className="w-48 h-48 rounded-full bg-amber/10 border border-amber/20 flex items-center justify-center">
                <span className="font-serif text-6xl font-bold text-amber/50">AI</span>
              </div>
            </div>
          </div>

          {/* All posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <article
                key={post.title}
                className="bg-white rounded-2xl border border-slate/10 hover:border-amber/40 hover:shadow-lg transition-all group flex flex-col overflow-hidden"
              >
                <div className="h-1.5 bg-amber/20 group-hover:bg-amber transition-colors" />
                <div className="p-7 flex flex-col gap-4 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-light text-xs uppercase tracking-wider">{post.category}</span>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${post.tagColor}`}>{post.tag}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-navy group-hover:text-amber transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-slate-light text-xs">{post.date} · {post.readTime} read</span>
                    <span className="text-amber text-sm font-semibold">Read →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-amber py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-2xl font-bold text-navy mb-3">
            Get These Articles in Your Inbox
          </h2>
          <p className="text-navy/70 mb-6">
            Subscribe to the newsletter that matches your stage — weekly, free, no noise.
          </p>
          <Link
            href="/newsletter"
            className="bg-navy text-cream font-semibold px-7 py-3.5 rounded-full hover:bg-navy-light transition-colors text-sm"
          >
            Subscribe Free →
          </Link>
        </div>
      </section>
    </>
  );
}
