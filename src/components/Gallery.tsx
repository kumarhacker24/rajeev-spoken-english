"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera } from "lucide-react";

const galleryImages = [
  {
    src: "/images/prize-ceremony.webp",
    alt: "Prize Distribution Ceremony 2024 — Rajeev Sir with students receiving awards",
    caption: "Prize Distribution 2024",
    span: "md:col-span-2 md:row-span-2",
    aspect: "aspect-[4/3] md:aspect-auto",
  },
  {
    src: "/images/classroom-session.webp",
    alt: "Interactive classroom session — students engaged in group discussion",
    caption: "Interactive Group Sessions",
    span: "md:col-span-1 md:row-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/classroom-learning.webp",
    alt: "Students learning English with whiteboard in classroom",
    caption: "Focused Learning",
    span: "md:col-span-1 md:row-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/students-results.webp",
    alt: "Congratulations — Students scoring 90+ out of 100 in English school exams",
    caption: "Scoring 90+ in English",
    span: "md:col-span-2 md:row-span-1",
    aspect: "aspect-[4/3] md:aspect-[21/9]",
  },
];

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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-bg relative">
      <div className="container-main">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <motion.span 
            className="badge-pill bg-primary/10 text-primary mb-5"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(13, 148, 136, 0.15)" }}
          >
            <Camera className="w-4 h-4" />
            Life at Our Institute
          </motion.span>
          <h2 className="font-display text-[2rem] md:text-4xl lg:text-[2.75rem] font-extrabold text-text tracking-tight leading-tight">
            Moments That{" "}
            <span className="text-gradient">Inspire</span>
          </h2>
          <p className="mt-5 text-text-secondary font-medium text-base md:text-lg leading-relaxed">
            From prize ceremonies to interactive sessions — a glimpse into the vibrant learning
            environment at Rajeev Spoken English Classes.
          </p>
        </motion.div>

        {/* Gallery grid - Mobile scrollable, Desktop masonry-like */}
        <div className="-mx-5 px-5 md:mx-0 md:px-0 overflow-x-auto md:overflow-visible pb-8 md:pb-0 hide-scrollbar">
          <motion.div
            className="flex md:grid md:grid-cols-3 md:grid-rows-3 md:h-[600px] gap-4 md:gap-5 w-[max-content] md:w-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {galleryImages.map((image) => (
              <motion.div
                key={image.src}
                variants={imageVariants}
                className={`group relative rounded-2xl overflow-hidden w-[280px] md:w-auto shrink-0 ${image.span} ${image.aspect} bg-surface-alt border border-border cursor-pointer shadow-sm hover:shadow-xl hover:shadow-black/10 transition-all duration-500`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 280px, 50vw"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/90 via-[#0B1120]/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 transform translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-10 h-1 bg-accent rounded-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                  <p className="text-white font-display font-bold text-lg md:text-xl drop-shadow-md">
                    {image.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* New Batches banner */}
        <motion.div
          className="mt-6 md:mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="relative aspect-[4/3] sm:aspect-[21/9] lg:aspect-[4/1] rounded-3xl overflow-hidden border border-border shadow-2xl shadow-primary/10 group">
            <Image
              src="/images/new-batches.webp"
              alt=""
              fill
              className="object-cover scale-110 opacity-30 blur-xl transition-transform duration-1000 group-hover:scale-125"
              sizes="100vw"
              aria-hidden="true"
            />
            <Image
              src="/images/new-batches.webp"
              alt="New Batches Starting — Rajeev Spoken English Classes"
              fill
              className="object-contain object-right md:object-center drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
              sizes="100vw"
            />
            {/* Premium gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/80 to-transparent" />
            
            <div className="absolute inset-0 flex items-center p-6 sm:p-10 md:p-12">
              <div className="max-w-md">
                <span className="inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 rounded-full border border-accent/20">
                  Admissions Open
                </span>
                <p className="text-white font-display text-[2rem] md:text-4xl font-extrabold drop-shadow-lg leading-tight mb-2">
                  New Batches Starting!
                </p>
                <p className="text-slate-300 font-medium text-sm md:text-base leading-relaxed mb-6 drop-shadow-sm">
                  Join now and start your English-speaking journey with expert guidance. Limited seats available.
                </p>
                <a href="#contact" className="btn-gold px-6 py-3 text-sm">
                  <span className="relative z-10">Reserve Your Seat</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
