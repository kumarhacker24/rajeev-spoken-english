"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

// --- Animated Counter Hook ---
function useAnimatedCounter(ref: React.RefObject<HTMLSpanElement | null>, end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!startOnView || !isInView || hasStarted.current) return;
    hasStarted.current = true;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end * 10) / 10);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration, startOnView]);

  return count;
}

// --- Typewriter Component ---
function TypewriterText({ texts, className = "" }: { texts: string[]; className?: string }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText === currentFullText) {
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayedText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }, 50);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayedText(
            isDeleting
              ? currentFullText.substring(0, displayedText.length - 1)
              : currentFullText.substring(0, displayedText.length + 1)
          );
        },
        isDeleting ? 30 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTextIndex, texts]);

  return (
    <span className={className}>
      {displayedText}
      <span
        className="inline-block w-[3px] h-[1em] bg-accent ml-0.5 align-middle"
        style={{ animation: "blink-caret 0.8s step-end infinite" }}
      />
    </span>
  );
}

const heroImages = [
  "/images/students-group.webp",
  "/images/prize-ceremony.webp",
  "/images/classroom-session.webp",
  "/images/classroom-learning.webp",
  "/images/students-outdoor.webp",
];

// Stagger container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
} as const;

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const ratingRef = useRef<HTMLSpanElement>(null);
  const studentsRef = useRef<HTMLSpanElement>(null);
  
  const ratingCount = useAnimatedCounter(ratingRef, BUSINESS.rating, 1500);
  const studentsCount = useAnimatedCounter(studentsRef, BUSINESS.totalReviews, 2000);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
    >
      {/* Animated dark gradient background */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Aurora glow orbs (CSS animations for better performance) */}
      <div className="hidden md:block absolute top-[15%] left-[20%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none animate-aurora" />
      <div className="hidden md:block absolute bottom-[20%] right-[15%] w-[350px] h-[350px] bg-accent/10 rounded-full blur-[100px] pointer-events-none animate-aurora" style={{ animationDelay: '3s' }} />

      {/* Floating decorative shapes (Hidden on mobile for performance, using pure CSS) */}
      <div className="hidden md:block absolute top-[12%] right-[8%] w-14 h-14 border border-white/[0.06] rounded-xl animate-float-rotate" />
      <div className="hidden md:block absolute bottom-[30%] left-[5%] w-5 h-5 bg-primary/20 rounded-full animate-float" />
      <div className="hidden md:block absolute top-[55%] right-[25%] w-2 h-2 bg-accent/40 rounded-full animate-scale-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="relative z-10 container-main pt-24 pb-12 md:pt-32 md:pb-24">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left column — Text */}
          <motion.div
            className="text-white"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Location badge */}
            <motion.div variants={itemVariants}>
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] text-sm font-medium text-white/90"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.12)" }}
              >
                <MapPin className="w-4 h-4 text-accent-light" />
                Adhartal, Jabalpur
              </motion.span>
            </motion.div>

            {/* Main heading with typewriter */}
            <motion.h1
              variants={itemVariants}
              className="mt-7 font-display text-[2.25rem] sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.1]"
            >
              Speak English.
              <br />
              <TypewriterText
                texts={[
                  "Speak With Confidence.",
                  "Speak Like a Pro.",
                  "Speak Fluently.",
                  "Transform Your Life.",
                ]}
                className="text-gradient-gold"
              />
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mt-5 text-base sm:text-lg text-slate-200 font-medium leading-relaxed max-w-lg drop-shadow-sm"
            >
              Transform your spoken English skills with expert-led, in-person
              classes at{" "}
              <span className="font-semibold text-white">
                {BUSINESS.name}
              </span>
              .
            </motion.p>

            {/* CTAs — Premium Gold + Outline */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <motion.a
                href={BUSINESS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-7 py-4 text-base"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <WhatsAppIcon className="w-5 h-5 relative z-10" />
                <span className="relative z-10">WhatsApp Rajeev Sir</span>
              </motion.a>
              <motion.a
                href={BUSINESS.phoneLink}
                className="btn-outline-light px-7 py-4 text-base"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>
            </motion.div>

            {/* Animated Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap justify-center sm:justify-start items-center gap-x-6 gap-y-4 md:gap-x-8"
            >
              {/* Rating */}
              <div className="flex flex-col items-center sm:items-start">
                <span ref={ratingRef} className="text-2xl md:text-3xl font-display font-extrabold text-accent">
                  {ratingCount}★
                </span>
                <span className="text-xs text-slate-400">
                  {BUSINESS.reviewSource} Rating
                </span>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/10" />
              {/* Students */}
              <div className="flex flex-col items-center sm:items-start">
                <span ref={studentsRef} className="text-2xl md:text-3xl font-display font-extrabold text-white">
                  {Math.floor(studentsCount)}+
                </span>
                <span className="text-xs text-slate-400">
                  Happy Students
                </span>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/10" />
              {/* Result */}
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-2xl md:text-3xl font-display font-extrabold text-accent">
                  100%
                </span>
                <span className="text-xs text-slate-400">
                  Result Focused
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column — Image Slideshow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex items-center justify-center w-full mt-4 lg:mt-0"
          >
            <div className="relative w-full max-w-[340px] md:max-w-md mx-auto">
              {/* Main image slideshow */}
              <motion.div
                className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Ken Burns Crossfade */}
                {heroImages.map((src, index) => (
                  <motion.div
                    key={src}
                    className="absolute inset-0"
                    initial={false}
                    animate={{
                      opacity: index === currentIndex ? 1 : 0,
                      scale: index === currentIndex ? 1 : 1.1,
                      zIndex: index === currentIndex ? 10 : 0,
                    }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                  >
                    {/* Only show the blurred background layer on desktop to save mobile performance */}
                    <div className="hidden md:block">
                      <Image
                        src={src}
                        alt=""
                        fill
                        className="object-cover object-center scale-110 opacity-50 blur-xl"
                        sizes="448px"
                        aria-hidden="true"
                      />
                    </div>
                    <Image
                      src={src}
                      alt={`Rajeev Sir's Spoken English Classes — Slide ${index + 1}`}
                      fill
                      className="object-contain object-center drop-shadow-2xl"
                      sizes="(max-width: 768px) 100vw, 448px"
                      priority={index === 0}
                    />
                  </motion.div>
                ))}

                {/* Top overlay text */}
                <motion.div
                  className="absolute top-0 left-0 right-0 p-5 z-20 bg-gradient-to-b from-black/70 via-black/30 to-transparent"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <p className="font-display font-extrabold text-xl md:text-2xl text-white tracking-tight">
                    Our Students, Our Pride
                  </p>
                  <p className="text-white/70 text-sm mt-0.5">
                    Rajeev Sir&apos;s Spoken English Classes — Adhartal
                  </p>
                </motion.div>

                {/* Progress dots */}
                <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-20">
                  {heroImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        i === currentIndex
                          ? "w-8 bg-accent shadow-[0_0_8px_rgba(245,158,11,0.6)]"
                          : "w-2 bg-white/40 hover:bg-white/70"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Floating badge — Rating (bounces in) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
                className="absolute -top-3 -right-2 md:-right-6 px-3 md:px-4 py-2 md:py-2.5 rounded-2xl bg-white shadow-xl shadow-black/15 z-30"
              >
                <motion.div
                  className="flex items-center gap-2"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <motion.span
                    className="text-yellow-500 text-lg"
                    animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    ★
                  </motion.span>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{BUSINESS.rating}/5</p>
                    <p className="text-[10px] text-gray-500">{BUSINESS.reviewSource}</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating badge — Results (bounces in) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.3 }}
                className="absolute -bottom-3 -left-2 md:-left-6 px-3 md:px-4 py-2 md:py-3 rounded-2xl bg-white shadow-xl shadow-black/15 z-30"
              >
                <motion.div
                  className="flex items-center gap-3"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="relative w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                    <span className="text-white font-bold text-sm">90+</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Top Scores</p>
                    <p className="text-[10px] text-gray-500">In School Exams</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 54" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 22L48 25.3C96 28.7 192 35.3 288 38.2C384 41 480 40 576 35.8C672 31.7 768 24.3 864 22.2C960 20 1056 23 1152 26.8C1248 30.7 1344 35.3 1392 37.7L1440 40V54H1392C1344 54 1248 54 1152 54C1056 54 960 54 864 54C768 54 672 54 576 54C480 54 384 54 288 54C192 54 96 54 48 54H0V22Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
