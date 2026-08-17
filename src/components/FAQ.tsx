"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_DATA } from "@/lib/constants";

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      <div
        className={`border rounded-2xl bg-surface transition-all duration-300 ${
          isOpen
            ? "border-primary/40 shadow-[0_8px_30px_rgba(13,148,136,0.12)]"
            : "border-border hover:border-primary/30 hover:shadow-md"
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between gap-4 p-5 md:p-7 text-left focus-visible:outline-2 focus-visible:outline-primary rounded-2xl group"
        >
          <span className={`font-display text-base md:text-lg font-bold pr-4 transition-colors duration-300 ${isOpen ? "text-primary" : "text-text group-hover:text-primary-dark"}`}>
            {question}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? "bg-primary/10" : "bg-surface-alt group-hover:bg-primary/5"}`}
          >
            <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${isOpen ? "text-primary" : "text-text-secondary group-hover:text-primary"}`} />
          </motion.div>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                opacity: { duration: 0.25, delay: 0.1 },
              }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 md:px-7 md:pb-7 pt-0">
                <div className="h-px bg-gradient-to-r from-border via-border to-transparent mb-5" />
                <p className="text-text-secondary text-sm md:text-base font-medium leading-relaxed pl-2 border-l-2 border-primary/20">{answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-surface-alt relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-white to-transparent opacity-50 pointer-events-none" />
      
      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <motion.span 
            className="badge-pill bg-primary/10 text-primary mb-5"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(13, 148, 136, 0.15)" }}
          >
            <HelpCircle className="w-4 h-4" />
            FAQ
          </motion.span>
          <h2 className="font-display text-[2rem] md:text-4xl lg:text-[2.75rem] font-extrabold text-text tracking-tight leading-tight">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-5 text-text-secondary font-medium text-base md:text-lg leading-relaxed">
            Find answers to common questions about our spoken English classes.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {FAQ_DATA.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
