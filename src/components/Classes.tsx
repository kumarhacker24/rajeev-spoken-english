"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Mic,
  BookOpen,
  PenTool,
  Presentation,
  Briefcase,
} from "lucide-react";
import { SKILL_AREAS } from "@/lib/constants";

const iconMap = {
  MessageCircle,
  Mic,
  BookOpen,
  PenTool,
  Presentation,
  Briefcase,
} as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export function Classes() {
  return (
    <section id="classes" className="section-padding bg-surface-alt relative z-10">
      <div className="container-main">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span 
            className="badge-pill bg-primary/10 text-primary mb-5"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(13, 148, 136, 0.15)" }}
          >
            What You&apos;ll Learn
          </motion.span>
          <h2 className="font-display text-[2rem] md:text-4xl lg:text-[2.75rem] font-extrabold text-text tracking-tight leading-tight">
            Skills That{" "}
            <span className="text-gradient">Make a Difference</span>
          </h2>
          <p className="mt-5 text-text-secondary font-medium text-base md:text-lg leading-relaxed">
            Our comprehensive spoken English program covers every aspect of
            effective communication — from everyday conversations to
            professional settings.
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {SKILL_AREAS.map((skill, index) => {
            const IconComponent = iconMap[skill.icon];
            return (
              <motion.div
                key={skill.title}
                variants={cardVariants}
                className="group card-premium p-6 md:p-8"
              >
                {/* Number badge — decorative watermark */}
                <span className="absolute top-4 right-5 text-6xl md:text-7xl font-display font-extrabold text-text/[0.02] group-hover:text-primary/[0.04] transition-colors duration-500 select-none pointer-events-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="p-3.5 rounded-2xl bg-surface-alt border border-border text-primary w-fit mb-5 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-400 group-hover:shadow-[0_8px_20px_rgba(13,148,136,0.3)]">
                    <IconComponent className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-text mb-3">
                    {skill.title}
                  </h3>
                  <p className="text-sm md:text-base text-text-secondary font-medium leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
