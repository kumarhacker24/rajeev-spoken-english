"use client";

import { motion } from "framer-motion";
import {
  Users,
  MessagesSquare,
  Heart,
  Globe,
} from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import Image from "next/image";
import { EXPERIENCE_FEATURES, BUSINESS } from "@/lib/constants";

const iconMap = {
  Users,
  MessagesSquare,
  Heart,
  Globe,
} as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-[#0B1120] relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div 
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.span 
              className="badge-pill bg-white/10 text-white font-bold tracking-wide border border-white/10 mb-5"
              whileHover={{ backgroundColor: "rgba(255,255,255,0.2)" }}
            >
              The Experience
            </motion.span>
            <h2 className="font-display text-[2rem] md:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight leading-tight">
              More Than Just a{" "}
              <span className="text-gradient-gold">Classroom</span>
            </h2>
            <p className="mt-5 text-slate-300 font-medium text-base md:text-lg leading-relaxed drop-shadow-sm">
              At {BUSINESS.name}, we believe learning English should
              be enjoyable, engaging, and effective. Our classes are designed to
              give you a supportive environment where you can practice
              fearlessly.
            </p>

            {/* Classroom image with premium styling */}
            <motion.div
              className="mt-8 relative rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-2xl shadow-black/50 group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Image
                src="/images/classroom-session.webp"
                alt="Interactive classroom session at Rajeev Sir's Spoken English Classes"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-80" />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <a
                href={BUSINESS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <WhatsAppIcon className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Enquire on WhatsApp</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Feature cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {EXPERIENCE_FEATURES.map((feature) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <motion.div
                  key={feature.title}
                  variants={cardVariants}
                  className="group card-premium-dark p-6"
                >
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-primary-light w-fit mb-5 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-400">
                    <IconComponent className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-300 font-medium leading-relaxed drop-shadow-sm">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
      
      {/* Wave Divider to next light section */}
      <div className="wave-divider" style={{ bottom: "-2px" }}>
        <svg viewBox="0 0 1440 54" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 22L48 25.3C96 28.7 192 35.3 288 38.2C384 41 480 40 576 35.8C672 31.7 768 24.3 864 22.2C960 20 1056 23 1152 26.8C1248 30.7 1344 35.3 1392 37.7L1440 40V54H1392C1344 54 1248 54 1152 54C1056 54 960 54 864 54C768 54 672 54 576 54C480 54 384 54 288 54C192 54 96 54 48 54H0V22Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
