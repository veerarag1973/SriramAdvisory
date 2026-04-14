"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "AI Career Clarity Session", href: "/services/career-advisory" },
      { label: "Workshops", href: "/services/workshops" },
      { label: "Corporate Programs", href: "/services/corporate-programs" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Free Tools", href: "/resources#tools" },
      { label: "Guides", href: "/resources#guides" },
    ],
  },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-navy text-cream sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-xl font-bold text-cream tracking-tight">
              Sriram <span className="text-amber">Advisory</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="text-sm font-medium text-cream/80 hover:text-amber transition-colors py-2"
                >
                  {link.label}
                  {link.children && (
                    <span className="ml-1 text-xs">▾</span>
                  )}
                </Link>
                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-navy-light border border-white/10 rounded-lg shadow-xl py-2 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-cream/80 hover:text-amber hover:bg-white/5 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/assessment"
              className="bg-amber text-navy text-sm font-semibold px-5 py-2 rounded-full hover:bg-amber-light transition-colors"
            >
              Free Assessment →
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-cream p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 space-y-1">
              <span className={`block h-0.5 bg-cream transition-all ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block h-0.5 bg-cream transition-all ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-cream transition-all ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-light border-t border-white/10 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm font-medium text-cream/80 hover:text-amber transition-colors"
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="pl-4 space-y-1">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-sm text-cream/60 hover:text-amber transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/assessment"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 bg-amber text-navy text-sm font-semibold px-5 py-2.5 rounded-full text-center hover:bg-amber-light transition-colors"
          >
            Free Assessment →
          </Link>
        </div>
      )}
    </nav>
  );
}
