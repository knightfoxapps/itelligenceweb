"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const faqs = [
  { question: "What is Performance CX?", answer: "Performance CX is customer experience operated as a system of measurable outcomes, not a service line. We drive revenue and retention impact across the customer lifecycle by activating insight from data. We blend AI where it scales and human expertise where it matters, structure pricing around what your business measures, and treat performance as the product." },
  { question: "Do you have a Pilot Program?", answer: "Yes. Our 90 or 120-day Performance Pilot is run by a dedicated team and structured around outcomes defined upfront. We deploy itelligence.AI to analyze a real sample of your customer interaction data, surface the patterns and signals worth acting on, and map the next steps your business can move on. Pilots are scoped to your operation, not a generic demo." },
  { question: "How do you protect customer and client data?", answer: "Customer and client data is encrypted at rest and in transit, classified by sensitivity, and retained only as long as your business requires. We don't share data with third parties. Access is controlled and audited, AI threat detection runs across our infrastructure, and our InfoSec team operates against PCI-DSS, SOC II, and HIPAA compliance standards." },
];

/**
 * FAQ — matches mockup:
 * - White background
 * - "Questions" headline left
 * - Accordion below
 * - Branded photo/graphic right (the person with wave element)
 */
export function FaqSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-gray-100/30 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* FAQ content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-5 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Questions
            </h2>
            <p className="mb-10 text-base text-muted-foreground">
              Clear answers to what matters most about our approach.
            </p>

            <Accordion.Root type="multiple" className="space-y-0">
              {faqs.map((faq, i) => (
                <Accordion.Item key={i} value={`faq-${i}`} className="border-b border-gray-200">
                  <Accordion.Trigger className="group flex w-full items-center justify-between py-5 text-left text-base font-semibold text-foreground transition-colors hover:text-brand-blue md:text-lg">
                    {faq.question}
                    <svg className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </Accordion.Trigger>
                  <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <p className="pb-5 text-sm text-muted-foreground md:text-base">{faq.answer}</p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>

            <div className="mt-10">
              <h3 className="mb-2 text-xl font-bold text-foreground">Still curious?</h3>
              <p className="mb-4 text-sm text-muted-foreground">Straight answers are our standard. Ask us anything.</p>
              <Button variant="outline" href="/get-started">Contact</Button>
            </div>
          </motion.div>

          {/* Side image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden items-center lg:flex"
          >
            <Image
              src="/images/home/faq-image.png"
              alt=""
              width={500}
              height={600}
              className="w-full rounded-lg object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
