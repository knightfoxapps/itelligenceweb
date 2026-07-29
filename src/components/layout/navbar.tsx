"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { clsx } from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navigation = {
  solutions: [
    { label: "Engage", href: "/solutions/engage", description: "Scale support and resolve what AI can't" },
    { label: "Grow", href: "/solutions/grow", description: "Outbound sales and qualified pipeline" },
    { label: "Retain", href: "/solutions/retain", description: "Churn defense and loyalty design" },
  ],
  product: [
    { label: "itelligence.AI", href: "/products/itelligence-ai", description: "The operating model" },
    { label: "QA & Trend Analysis", href: "/products/itelligence-ai/qa-trend-analysis" },
    { label: "AI Training System", href: "/products/itelligence-ai/ai-training-system" },
    { label: "AI Workforce", href: "/products/itelligence-ai/ai-workforce" },
    { label: "itel Med", href: "/products/itel-med" },
  ],
  industries: [
    { label: "Automotive", href: "/industries/automotive" },
    { label: "Energy & Utilities", href: "/industries/energy-utilities" },
    { label: "Fintech", href: "/industries/fintech" },
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Media & Communications", href: "/industries/media-communications" },
    { label: "Retail & eCommerce", href: "/industries/retail-ecommerce" },
    { label: "Technology", href: "/industries/technology" },
    { label: "Travel & Hospitality", href: "/industries/travel-hospitality" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Locations", href: "/locations" },
    { label: "Insights", href: "/insights" },
  ],
};

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <nav className="container flex h-16 items-center justify-between px-[5%] lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="itelligenceCX"
            width={160}
            height={32}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          <NavDropdown label="Solutions" items={navigation.solutions} />
          <NavDropdown label="Product" items={navigation.product} />
          <NavDropdown label="Industries" items={navigation.industries} />
          <NavDropdown label="Company" items={navigation.company} />
        </div>

        {/* CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <Button variant="outline" size="sm" href="/performance-pilot">
            Performance Pilot
          </Button>
          <Button size="sm" href="/get-started">
            Get Started
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={clsx(
                "block h-0.5 w-6 bg-foreground transition-transform",
                mobileOpen && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={clsx(
                "block h-0.5 w-6 bg-foreground transition-opacity",
                mobileOpen && "opacity-0",
              )}
            />
            <span
              className={clsx(
                "block h-0.5 w-6 bg-foreground transition-transform",
                mobileOpen && "-translate-y-2 -rotate-45",
              )}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-gray-100 bg-white lg:hidden"
          >
            <div className="container space-y-4 px-[5%] py-6">
              {Object.entries(navigation).map(([key, items]) => (
                <div key={key}>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    {key}
                  </p>
                  <div className="space-y-1">
                    {items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-sm px-3 py-2 text-base hover:bg-muted"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                <Button variant="outline" href="/performance-pilot">
                  Performance Pilot
                </Button>
                <Button href="/get-started">Get Started</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ─── Dropdown submenu (desktop) ─── */
function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: { label: string; href: string; description?: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-brand-blue"
        aria-expanded={open}
      >
        {label}
        <svg
          className={clsx("h-3 w-3 transition-transform", open && "rotate-180")}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full z-50 mt-2 min-w-[220px] rounded-md border border-gray-100 bg-white p-2 shadow-lg"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-sm px-3 py-2 text-sm hover:bg-muted transition-colors"
              >
                <span className="font-medium">{item.label}</span>
                {item.description && (
                  <span className="block text-xs text-muted-foreground mt-0.5">
                    {item.description}
                  </span>
                )}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
