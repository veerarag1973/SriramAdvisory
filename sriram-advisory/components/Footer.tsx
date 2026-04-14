import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-cream/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="font-serif text-xl font-bold text-cream">
              Sriram <span className="text-amber">Advisory</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              Navigate the AI Era. On Your Terms.
            </p>
            <p className="mt-4 text-sm">
              Helping students and mid-career professionals build confident
              paths forward in the age of AI.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/50 hover:text-amber transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a
                href="mailto:hello@sriramadvisory.com"
                className="text-cream/50 hover:text-amber transition-colors text-sm"
              >
                Email
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-cream mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services/career-advisory" className="hover:text-amber transition-colors">
                  AI Career Clarity Session
                </Link>
              </li>
              <li>
                <Link href="/services/workshops" className="hover:text-amber transition-colors">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="/services/corporate-programs" className="hover:text-amber transition-colors">
                  Corporate Programs
                </Link>
              </li>
              <li>
                <Link href="/assessment" className="hover:text-amber transition-colors">
                  Free Assessment
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-cream mb-4 text-sm uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/resources/blog" className="hover:text-amber transition-colors">
                  Blog & Articles
                </Link>
              </li>
              <li>
                <Link href="/resources#guides" className="hover:text-amber transition-colors">
                  Free Guides
                </Link>
              </li>
              <li>
                <Link href="/resources#tools" className="hover:text-amber transition-colors">
                  Career Tools
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="hover:text-amber transition-colors">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-cream mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-amber transition-colors">
                  About Sriram
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/40">
          <p>© {new Date().getFullYear()} Sriram Advisory. All rights reserved.</p>
          <p>hello@sriramadvisory.com</p>
        </div>
      </div>
    </footer>
  );
}
