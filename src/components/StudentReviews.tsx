"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Sahil",
    review: "Classes join karne ke baad mera confidence level ekdum change ho gaya hai. Ab interviews mein dar nahi lagta! 🙌",
    rating: 5,
    type: "positive"
  },
  {
    name: "Abhishek",
    review: "Best place to learn spoken English in Jabalpur. Sir ka teaching style bahut simple aur effective hai. Highly recommended! 💯",
    rating: 5,
    type: "positive"
  },
  {
    name: "Srikant",
    review: "Mujhe grammar mein bahut problem hoti thi, but Rajeev sir ne sab clear kar diya. Ab fluent English bolna natural lagta hai. ✨",
    rating: 5,
    type: "positive"
  },
  {
    name: "Krishna",
    review: "Yahan ka environment bahut supportive hai. Group discussions se hesitation puri tarah khatam ho gayi meri. 🗣️🔥",
    rating: 5,
    type: "positive"
  },
  {
    name: "Rohit",
    review: "Very practical approach. Sirf bookish knowledge nahi, real-life conversations pe focus karte hain. Maza aa gaya! ✌️",
    rating: 5,
    type: "positive"
  },
  {
    name: "Pravesh",
    review: "English bolne mein pehle bahut sharam aati thi, but ab fluently bol pata hoon. Thank you sir for the guidance! 🚀",
    rating: 5,
    type: "positive"
  },
  {
    name: "Piyush",
    review: "Classes decent hain. Content and practice sessions acche hain, but sometimes batches thode crowded ho jaate hain. Overall a good experience. 👍",
    rating: 4,
    type: "neutral"
  },
  {
    name: "Arpit",
    review: "Teaching method sahi hai, grammar achhe se cover hota hai. Agar speaking practice ka time thoda aur badha dein toh perfect hoga. 📝",
    rating: 4,
    type: "neutral"
  },
  {
    name: "Yash",
    review: "Classes are fine, par timings mein thodi aur flexibility honi chahiye working professionals ke liye. Sirf fixed batches ki wajah se kabhi kabhi manage karna thoda mushkil hota hai. ⏳",
    rating: 3,
    type: "criticizing"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 80, damping: 20 },
  },
};

export function StudentReviews() {
  return (
    <section id="reviews" className="section-padding bg-surface relative overflow-hidden">
      <div className="container-main relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge-pill bg-primary/10 text-primary-dark dark:text-primary-light border border-primary/20 mb-4"
          >
            Student Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight"
          >
            Hear from Our <span className="text-gradient">Students</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-text-muted text-base md:text-lg"
          >
            Real experiences from young professionals and students who transformed their communication skills with us.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="card-premium p-6 flex flex-col h-full relative group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-border/40 group-hover:text-primary/10 transition-colors" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? "text-star fill-star"
                        : "text-border fill-transparent"
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-text-secondary font-medium leading-relaxed flex-grow italic mb-6 text-sm md:text-base">
                &quot;{review.review}&quot;
              </p>
              
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border/50">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-text text-sm">{review.name}</h4>
                  <p className="text-xs text-text-muted">Student</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
