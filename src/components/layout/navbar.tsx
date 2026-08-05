"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { clsx } from "clsx";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Navbar matching design mockups exactly:
 * Engage ▾ | Know ▾ | Grow ▾ | Retain ▾ | About ▾ | Insights ▾ | [itelligence.AI] | [Get Started]
 */

const navItems = [
  {
    label: "Engage",
    items: [
      { label: "Engage Solutions", href: "/solutions/engage" },
      { label: "CX Lifecycle Delivery", href: "/capabilities/cx-lifecycle-delivery" },
      { label: "Nearshore Talent", href: "/capabilities/nearshore-talent" },
    ],
  },
  {
    label: "Know",
    items: [
      { label: "itelligence.AI", href: "/products/itelligence-ai" },
      { label: "QA & Trend Analysis", href: "/products/itelligence-ai/qa-trend-analysis" },
      { label: "AI Training System", href: "/products/itelligence-ai/ai-training-system" },
      { label: "AI Workforce", href: "/products/itelligence-ai/ai-workforce" },
      { label: "Insight Activation", href: "/capabilities/insight-activation" },
    ],
  },
  {
    label: "Grow",
    items: [
      { label: "Grow Solutions", href: "/solutions/grow" },
      { label: "Operational Design", href: "/capabilities/operational-design" },
      { label: "itel Med", href: "/products/itel-med" },
    ],
  },
  {
    label: "Retain",
    items: [
      { label: "Retain Solutions", href: "/solutions/retain" },
    ],
  },
  {
    label: "About",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Locations", href: "/locations" },
      { label: "Jamaica", href: "/locations/jamaica" },
      { label: "Belize", href: "/locations/belize" },
      { label: "St. Lucia", href: "/locations/st-lucia" },
      { label: "Honduras", href: "/locations/honduras" },
      { label: "North America", href: "/locations/north-america" },
    ],
  },
  {
    label: "Insights",
    items: [
      { label: "All Insights", href: "/insights" },
    ],
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <nav className="container mx-auto flex h-16 items-center justify-between px-[5%] lg:h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo-wordmark.png"
            alt="itelligenceCX"
            width={163}
            height={35}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-4 lg:flex lg:ml-auto lg:mr-6">
          {navItems.map((item) => (
            <NavDropdown key={item.label} label={item.label} items={item.items} />
          ))}
        </div>

        {/* CTA buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/products/itelligence-ai"
            className="rounded-lg bg-[#f4f5f7] px-5 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-[#ebedf0] shadow-[0_2px_0_0_rgba(0,0,0,0.85)]"
          >
            itelligence.AI
          </Link>
          <Link
            href="/get-started"
            className="rounded-lg bg-brand-blue px-5 py-1.5 text-sm font-medium text-white transition-colors hover:bg-secondary-blue shadow-[0_2px_0_0_rgba(0,0,0,0.85)]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="p-2 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <div className="flex flex-col gap-1.5">
            <span className={clsx("block h-0.5 w-6 bg-foreground transition-transform", mobileOpen && "translate-y-2 rotate-45")} />
            <span className={clsx("block h-0.5 w-6 bg-foreground transition-opacity", mobileOpen && "opacity-0")} />
            <span className={clsx("block h-0.5 w-6 bg-foreground transition-transform", mobileOpen && "-translate-y-2 -rotate-45")} />
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
            <div className="container mx-auto space-y-4 px-[5%] py-6">
              {navItems.map((group) => (
                <div key={group.label}>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {group.label}
                  </p>
                  <div className="space-y-1">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-sm px-3 py-2 text-sm hover:bg-gray-50"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex flex-col gap-3 border-t border-gray-100 pt-4">
                <Link href="/products/itelligence-ai" className="rounded-sm border border-foreground px-4 py-3 text-center text-sm font-medium">
                  itelligence.AI
                </Link>
                <Link href="/get-started" className="rounded-sm bg-brand-blue px-4 py-3 text-center text-sm font-semibold text-white">
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ─── Desktop dropdown ─── */
function NavDropdown({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="flex items-center gap-1.5 text-base font-medium text-foreground transition-colors hover:text-brand-blue" aria-expanded={open}>
        {label}
        <svg className={clsx("h-4 w-4 transition-transform", open && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
            className="absolute left-0 top-full z-50 mt-2 min-w-[200px] rounded-md border border-gray-100 bg-white p-2 shadow-lg"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-sm px-3 py-2 text-sm text-foreground transition-colors hover:bg-gray-50 hover:text-brand-blue"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
