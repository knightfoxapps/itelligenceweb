"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  { name: "Essentials", coverage: "4%", highlight: false },
  { name: "Performance", coverage: "50%", highlight: true },
  { name: "Total Visibility", coverage: "100%", highlight: false },
];

const features = [
  { name: "Coverage", values: ["4%", "50%", "100%"] },
  { name: "Auto Scoring", values: [true, true, true] },
  { name: "Custom Dashboards", values: [true, true, true] },
  { name: "AI Coaching Episodes", values: ["Sample month", "500 / month", "1,000 / month"] },
  { name: "Real-Time Alerts", values: [false, true, true] },
  { name: "Trend Analysis", values: ["Basic", "Advanced", "Full"] },
  { name: "CRM Integration", values: [false, true, true] },
  { name: "Dedicated Success Manager", values: [false, false, true] },
  { name: "Monthly Calibration", values: [true, true, true] },
];

export function PricingTable() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-blue">See More</p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Find Your Coverage</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Every tier scores every interaction it touches. What changes is how much of your operation we&apos;re listening to.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[600px] border-collapse">
            {/* Header */}
            <thead>
              <tr>
                <th className="p-4 text-left text-sm font-medium text-muted-foreground">Included</th>
                {tiers.map((tier) => (
                  <th
                    key={tier.name}
                    className={`p-4 text-center ${
                      tier.highlight
                        ? "rounded-t-lg bg-brand-blue text-white"
                        : "text-foreground"
                    }`}
                  >
                    <div className="text-lg font-bold">{tier.name}</div>
                    <div className={`mt-1 text-3xl font-extrabold ${tier.highlight ? "text-white" : "text-brand-blue"}`}>
                      {tier.coverage}
                    </div>
                    <div className={`text-xs ${tier.highlight ? "text-white/70" : "text-muted-foreground"}`}>
                      coverage
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {features.map((feature, i) => (
                <tr key={feature.name} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                  <td className="p-4 text-sm font-medium">{feature.name}</td>
                  {feature.values.map((value, j) => (
                    <td
                      key={j}
                      className={`p-4 text-center text-sm ${
                        tiers[j].highlight ? "bg-brand-blue/5" : ""
                      }`}
                    >
                      {value === true ? (
                        <Check className="mx-auto h-5 w-5 text-brand-blue" />
                      ) : value === false ? (
                        <span className="text-gray-300">—</span>
                      ) : (
                        <span className="font-medium">{value}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* CTAs */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-4">
          <div /> {/* spacer for feature column */}
          {tiers.map((tier) => (
            <div key={tier.name} className="text-center">
              <Button
                variant={tier.highlight ? "primary" : "outline"}
                href="/get-started"
                className="w-full"
              >
                Get {tier.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
