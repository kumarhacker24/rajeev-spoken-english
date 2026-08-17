"use client";

import { motion } from "framer-motion";
import { Star, Award, ThumbsUp } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 200, damping: 20 },
  },
};

export function TrustBar() {
  const items = [
    {
      icon: Star,
      value: `${BUSINESS.rating}`,
      label: `/ 5 Stars on ${BUSINESS.reviewSource}`,
      color: "text-star",
      glow: "group-hover:shadow-[0_0_20px_rgba(250,204,21,0.3)]",
    },
    {
      icon: ThumbsUp,
      value: `${BUSINESS.totalReviews}+`,
      label: "Student Reviews",
      color: "text-primary",
      glow: "group-hover:shadow-[0_0_20px_rgba(13,148,136,0.3)]",
    },
    {
      icon: Award,
      value: BUSINESS.marketingPhrase,
      label: "Proven Track Record",
      color: "text-accent",
      glow: "group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]",
    },
  ];

  return (
    <section className="relative -mt-8 z-20 pb-4" aria-label="Trust indicators">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="glass-light rounded-2xl shadow-xl p-5 md:p-8"
        >
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {items.map((item) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                className={`group flex items-center gap-4 justify-center sm:justify-start cursor-default`}
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  className={`flex-shrink-0 p-3 rounded-xl bg-surface-alt ${item.color} transition-shadow duration-300 ${item.glow}`}
                  whileHover={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <item.icon className="w-6 h-6" />
                </motion.div>
                <div>
                  <p className="font-display text-xl md:text-2xl font-extrabold text-text">
                    {item.value}
                  </p>
                  <p className="text-sm text-text-secondary">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
