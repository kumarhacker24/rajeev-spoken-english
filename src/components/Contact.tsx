"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Navigation,
} from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { BUSINESS } from "@/lib/constants";

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-bg relative">
      <div className="container-main">
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
            Get in Touch
          </motion.span>
          <h2 className="font-display text-[2rem] md:text-4xl lg:text-[2.75rem] font-extrabold text-text tracking-tight leading-tight">
            Ready to Start{" "}
            <span className="text-gradient">Speaking?</span>
          </h2>
          <p className="mt-5 text-text-secondary font-medium text-base md:text-lg leading-relaxed">
            Reach out to us today and take the first step towards confident
            English communication.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left — Contact details */}
          <div className="flex flex-col gap-6">
            {/* Address card */}
            <motion.div 
              className="card-premium p-6 md:p-8 group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            >
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-400">
                  <MapPin className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-text mb-2">
                    Visit Us
                  </h3>
                  <p className="text-text-secondary font-medium leading-relaxed md:text-lg">
                    {BUSINESS.address.line1}
                    <br />
                    {BUSINESS.address.line2}
                    <br />
                    {BUSINESS.address.area}, {BUSINESS.address.city} –{" "}
                    {BUSINESS.address.pincode}
                  </p>
                  <a
                    href={BUSINESS.directionsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm md:text-base font-bold text-primary hover:text-primary-dark transition-colors group/link"
                  >
                    <Navigation className="w-4 h-4 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                    Get Directions
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Phone card */}
            <motion.div
              className="card-premium p-6 md:p-8 group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.15, duration: 0.5, type: "spring", stiffness: 100 }}
            >
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-2xl bg-accent/10 text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-400">
                  <Phone className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-text mb-2">
                    Call Us
                  </h3>
                  <div className="flex flex-col gap-2 mt-3">
                    <a
                      href={BUSINESS.phoneLink}
                      className="text-text-secondary hover:text-primary transition-colors font-bold md:text-lg flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary transition-colors" />
                      +91 {BUSINESS.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <a
                href={BUSINESS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn-gold py-4.5 text-base"
              >
                <WhatsAppIcon className="w-5 h-5 relative z-10" />
                <span className="relative z-10">WhatsApp Us</span>
              </a>
              <a
                href={BUSINESS.phoneLink}
                className="flex-1 btn-outline py-4.5 text-base"
              >
                <Phone className="w-5 h-5" />
                Call Directly
              </a>
            </motion.div>
          </div>

          {/* Right — Map embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
            className="rounded-3xl overflow-hidden border border-border shadow-2xl shadow-primary/5 h-[400px] md:h-[450px] lg:h-full lg:min-h-[500px] relative group"
          >
            {/* Decorative frame overlay */}
            <div className="absolute inset-0 border-[8px] border-white/50 pointer-events-none z-10 mix-blend-overlay rounded-3xl" />
            <iframe
              src={BUSINESS.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${BUSINESS.name} Location on Google Maps`}
              className="w-full h-full grayscale-[20%] contrast-[1.1] transition-all duration-700 group-hover:grayscale-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
