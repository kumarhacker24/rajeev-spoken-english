"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Expert Instruction",
    description: "Learn from an experienced English educator dedicated to your progress.",
    color: "text-primary",
    bg: "bg-primary/10",
    hoverBg: "group-hover:bg-primary",
  },
  {
    icon: Target,
    title: "Result-Oriented",
    description: "Our structured approach ensures measurable improvement in your speaking skills.",
    color: "text-accent",
    bg: "bg-accent/10",
    hoverBg: "group-hover:bg-accent",
  },
  {
    icon: Users,
    title: "Inclusive Environment",
    description: "A welcoming classroom where every learner feels comfortable to practice and grow.",
    color: "text-teal-600",
    bg: "bg-teal-600/10",
    hoverBg: "group-hover:bg-teal-600",
  },
  {
    icon: TrendingUp,
    title: "Continuous Progress",
    description: "Track your growth through regular practice sessions and real-world application.",
    color: "text-blue-600",
    bg: "bg-blue-600/10",
    hoverBg: "group-hover:bg-blue-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export function About() {
  return (
    <section id="about" className="section-padding bg-bg relative">
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
            About Us
          </motion.span>
          <h2 className="font-display text-[2rem] md:text-4xl lg:text-[2.75rem] font-extrabold text-text tracking-tight leading-tight">
            Your Journey to Fluent English{" "}
            <span className="text-gradient">Starts Here</span>
          </h2>
          <p className="mt-5 text-text-secondary font-medium text-base md:text-lg leading-relaxed">
            Rajeev Sir's Spoken English Classes is a trusted, offline coaching
            institute in Adhartal, Jabalpur — dedicated to helping learners of
            all levels speak English with clarity and confidence.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group card-premium p-6 md:p-7 flex flex-col items-center sm:items-start text-center sm:text-left"
              whileHover={{ y: -8 }}
            >
              <div className={`p-3.5 rounded-2xl ${feature.bg} ${feature.color} w-fit mb-5 ${feature.hoverBg} group-hover:text-white transition-colors duration-400`}>
                <feature.icon className="w-6 h-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
              </div>
              <h3 className="font-display text-lg md:text-xl font-bold text-text mb-3">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-text-secondary font-medium leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Associated brand mention */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-alt border border-border">
            <span className="text-sm text-text-muted">An initiative by</span>
            <span className="font-display font-bold text-sm tracking-widest text-text-secondary bg-clip-text">
              XTREME EDUCATION
            </span>
          </div>
        </motion.div>
      </div>
      
      {/* Wave Divider */}
      <div className="wave-divider" style={{ bottom: "-2px" }}>
        <svg viewBox="0 0 1440 54" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M1440 32L1392 28.7C1344 25.3 1248 18.7 1152 15.8C1056 13 960 14 864 18.2C768 22.3 672 29.7 576 31.8C480 34 384 31 288 27.2C192 23.3 96 18.7 48 16.3L0 14V54H48C96 54 192 54 288 54C384 54 480 54 576 54C672 54 768 54 864 54C960 54 1056 54 1152 54C1248 54 1344 54 1392 54H1440V32Z" fill="rgb(248 250 252)"/>
        </svg>
      </div>
    </section>
  );
}
