"use client";

import { motion } from "framer-motion";
import { Phone, Navigation } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { BUSINESS } from "@/lib/constants";

export function MobileActions() {
  return (
    <motion.div
      className="fixed bottom-4 left-4 right-4 z-50 lg:hidden"
      role="navigation"
      aria-label="Quick actions"
      initial={{ y: 150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 1.2,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <div className="bg-surface/95 backdrop-blur-md border border-border shadow-2xl shadow-black/10 rounded-[2rem] p-2 flex items-center justify-between gap-2 overflow-hidden relative">
        
        {/* Subtle gradient glow behind buttons */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5 pointer-events-none" />

        <a
          href={BUSINESS.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 rounded-3xl bg-[#25D366] text-white font-bold text-[11px] shadow-md shadow-[#25D366]/20 relative overflow-hidden group active:scale-95 transition-transform"
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] group-hover:animate-[shimmer-sweep_2s_infinite]" />
          <WhatsAppIcon className="w-5 h-5 relative z-10" />
          <span className="relative z-10 uppercase tracking-wider">WhatsApp</span>
        </a>
        
        <a
          href={BUSINESS.phoneLink}
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 rounded-3xl bg-primary text-white font-bold text-[11px] shadow-md shadow-primary/20 active:scale-95 transition-transform"
        >
          <Phone className="w-5 h-5" />
          <span className="uppercase tracking-wider">Call</span>
        </a>
        
        <a
          href={BUSINESS.directionsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 rounded-3xl bg-white text-primary font-bold text-[11px] border border-primary/20 shadow-sm active:scale-95 transition-transform"
        >
          <Navigation className="w-5 h-5" />
          <span className="uppercase tracking-wider">Map</span>
        </a>
      </div>
    </motion.div>
  );
}
