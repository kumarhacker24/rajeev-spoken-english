"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Heart } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import { Logo } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-slate-300 border-t border-slate-800 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container-main relative z-10">
        {/* Main footer content */}
        <motion.div
          className="py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Brand column */}
          <div className="lg:col-span-5 pr-0 lg:pr-12">
            <a href="#home" className="inline-flex">
              <Logo variant="horizontal" theme="dark" className="hidden md:flex" />
              <Logo variant="compact" theme="dark" className="flex md:hidden" />
            </a>
            <p className="mt-5 text-slate-300 font-medium text-sm md:text-base leading-relaxed max-w-sm">
              A trusted spoken English coaching institute in Adhartal, Jabalpur.
              Helping learners speak with clarity and confidence.
            </p>
            <div className="mt-6 flex items-center gap-2.5 text-sm font-bold text-slate-300 bg-white/5 border border-white/10 w-fit px-4 py-2 rounded-full">
              <MapPin className="w-4 h-4 flex-shrink-0 text-primary-light" />
              <span>{BUSINESS.address.area}, {BUSINESS.address.city}</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-bold text-white mb-6 text-lg tracking-wide">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm md:text-base text-slate-300 font-medium hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-primary-light transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-4">
            <h3 className="font-display font-bold text-white mb-6 text-lg tracking-wide">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={BUSINESS.phoneLink1}
                  className="flex items-center gap-3 text-sm md:text-base text-slate-300 font-medium hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary-light transition-colors">
                    <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                  </div>
                  +91 {BUSINESS.phone1}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.phoneLink2}
                  className="flex items-center gap-3 text-sm md:text-base text-slate-300 font-medium hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary-light transition-colors">
                    <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                  </div>
                  +91 {BUSINESS.phone2}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm md:text-base text-slate-300 font-medium mt-2">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="mt-1.5 leading-relaxed">
                  {BUSINESS.address.line1}, {BUSINESS.address.line2},{" "}
                  {BUSINESS.address.area}, {BUSINESS.address.city} –{" "}
                  {BUSINESS.address.pincode}
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar & Credits */}
        <div className="pt-6 pb-28 md:pb-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 mt-4">
          <p className="text-sm text-slate-400 font-medium text-center md:text-left">
            © {currentYear} {BUSINESS.name}. All rights reserved.
          </p>
          
          {/* Developer Credit */}
          <div className="flex flex-col items-center md:items-end gap-1">
            <p className="text-sm text-slate-300 font-medium flex items-center gap-1.5 bg-white/5 px-4 py-2 rounded-full border border-white/5 shadow-sm">
              Developed with{" "}
              <motion.span
                className="inline-block"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              </motion.span>
              {" "}by <span className="text-white font-bold tracking-wide">PIYUSH SINGH</span>
            </p>
            <p className="text-xs text-slate-400 font-medium mt-1 text-center md:text-right max-w-[280px] sm:max-w-none">
              Premium Software & Web Developer • For Custom Business Solutions: <a href="tel:+919406968755" className="text-primary-light hover:text-white transition-colors font-bold">+91 9406968755</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
