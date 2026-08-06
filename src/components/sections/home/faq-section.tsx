"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "What is Performance CX?",
    answer:
      "Performance CX is customer experience operated as a system of measurable outcomes, not a service line. We drive revenue and retention impact across the customer lifecycle by activating insight from data. We blend AI where it scales and human expertise where it matters, structure pricing around what your business measures, and treating performance as the product.",
  },
  {
    question: "Do you have a Pilot Program?",
    answer:
      "Around outcomes defined upfront, we deploy itelligence.AI to analyze a real sample of your customer interaction data, surface the patterns and signals worth acting on, and map the next steps your business can move on. Pilots are scoped to your operation, not a generic demo.",
  },
  {
    question: "How do you protect customer and client data?",
    answer:
      "Customer and client data is encrypted at rest and in transit, classified by sensitivity, and retained only as long as your business requires. Some clients run 90–day retention, others zero. We don't share data with third parties. Access is controlled and audited, AI threat detection runs across our infrastructure, and our InfoSec team operates against PCI-DSS, SOC II, and HIPAA compliance standards.",
  },
];

/**
 * FAQ — matches PSD:
 * - Two-column: architectural spiral photo LEFT (full height), FAQ content RIGHT
 * - "Questions" heading, subtext
 * - Gold divider lines between accordion items
 * - All items expandable with chevron
 * - "Still curious?" + Contact CTA at bottom
 */
export function FaqSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-[45%_55%]">
        {/* Left — architectural spiral image, full height */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative hidden min-h-[700px] lg:block"
        >
          <Image
            src="/images/home/faq-image.png"
            alt="Architectural detail"
            fill
            className="object-cover"
            sizes="45vw"
          />
        </motion.div>

        {/* Right — FAQ content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col justify-center px-[5%] py-16 md:py-24 lg:px-16 lg:py-28"
        >
          <h2 className="mb-3 font-['Plus_Jakarta_Sans'] text-[68px] font-medium leading-[72px] text-black">
            Questions
          </h2>
          <p className="mb-10 font-['Plus_Jakarta_Sans'] text-[20px] font-medium leading-[26px] text-black">
            Clear answers to what matters most
            <br className="hidden md:inline" />
            about our approach
          </p>

          <Accordion.Root type="multiple" defaultValue={["faq-0"]} className="space-y-0">
            {faqs.map((faq, i) => (
              <Accordion.Item key={i} value={`faq-${i}`} className="border-t border-[#e7c64a]">
                <Accordion.Trigger className="group flex w-full items-center justify-between py-6 text-left font-['Plus_Jakarta_Sans'] text-[24px] font-semibold leading-[28px] text-black transition-colors hover:text-brand-blue">
                  {faq.question}
                  <svg
                    className="ml-4 h-6 w-6 flex-shrink-0 text-black transition-transform duration-200 group-data-[state=open]:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="pb-6 font-['Plus_Jakarta_Sans'] text-[18px] font-semibold leading-[22px] text-[#555]">
                    {faq.answer}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
            {/* Bottom gold border after last item */}
            <div className="border-t border-[#e7c64a]" />
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
}
