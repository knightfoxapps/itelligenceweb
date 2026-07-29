"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  headline?: string;
  subheadline?: string;
  faqs: FAQ[];
  image?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function FAQSection({
  headline = "Questions",
  subheadline,
  faqs,
  image = "/images/home/faq-image.png",
  ctaLabel = "Contact",
  ctaHref = "/get-started",
}: FAQSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-5 text-4xl font-bold md:text-5xl">{headline}</h2>
            {subheadline && (
              <p className="mb-10 text-lg text-muted-foreground">{subheadline}</p>
            )}

            <Accordion.Root type="multiple" className="space-y-0">
              {faqs.map((faq, i) => (
                <Accordion.Item key={i} value={`faq-${i}`} className="border-b border-gray-100">
                  <Accordion.Trigger className="group flex w-full items-center justify-between py-5 text-left text-base font-semibold transition-colors hover:text-brand-blue md:py-6 md:text-lg">
                    {faq.question}
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </Accordion.Trigger>
                  <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <p className="pb-5 text-muted-foreground md:pb-6">{faq.answer}</p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>

            <div className="mt-10 md:mt-14">
              <h3 className="mb-3 text-2xl font-bold">Still have questions?</h3>
              <p className="text-muted-foreground">We are ready with the answers you need.</p>
              <div className="mt-6">
                <Button variant="secondary" href={ctaHref}>{ctaLabel}</Button>
              </div>
            </div>
          </motion.div>

          {image && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <Image
                src={image}
                alt=""
                width={600}
                height={800}
                className="h-full w-full rounded-lg object-cover"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
