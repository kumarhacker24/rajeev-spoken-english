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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.01 }}
              className="group relative flex flex-col h-full rounded-[2rem] border border-border/50 bg-surface shadow-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/40"
            >
              {/* Abstract glowing background blobs for aesthetic appeal (Hidden on mobile for performance) */}
              <div className="hidden md:block absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-bl-full -z-0 opacity-40 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700 ease-out blur-2xl"></div>
              <div className="hidden md:block absolute bottom-24 left-0 w-32 h-32 bg-accent/15 rounded-tr-full -z-0 opacity-0 group-hover:opacity-60 group-hover:-translate-y-4 transition-all duration-700 ease-out blur-xl"></div>

              {/* Review Text Section */}
              <div className="relative p-6 md:p-8 flex-grow z-10">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10 group-hover:text-primary/30 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500" />
                
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Star
                        className={`w-5 h-5 ${
                          i < review.rating
                            ? "text-star fill-star group-hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.6)] transition-all duration-300"
                            : "text-border fill-transparent"
                        }`}
                      />
                    </motion.div>
                  ))}
                </div>
                
                <p className="text-text-secondary font-medium leading-relaxed italic text-base md:text-lg relative z-10 group-hover:text-text transition-colors duration-300">
                  &quot;{review.review}&quot;
                </p>
              </div>
              
              {/* Student Info Section with vivid color separation */}
              <div className="relative mt-auto p-5 px-6 md:px-8 bg-gradient-to-r from-primary to-primary-light overflow-hidden shadow-[0_-10px_30px_-15px_rgba(13,148,136,0.5)]">
                {/* Decorative sheen effect on hover */}
                <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-white/20 skew-x-[-20deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out z-0"></div>
                
                <div className="flex items-center gap-4 relative z-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="w-14 h-14 relative rounded-full bg-white flex items-center justify-center text-primary-dark font-extrabold text-xl shadow-lg group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 border border-white/50">
                      {review.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold italic text-white text-lg tracking-wide group-hover:translate-x-1 transition-transform duration-300 drop-shadow-sm bg-black/20 px-3 py-1 rounded-md inline-block shadow-inner backdrop-blur-md border border-white/10">{review.name}</h4>
                    <div className="block mt-2">
                      <div className="inline-block bg-black/15 px-2.5 py-0.5 rounded-full border border-white/10 backdrop-blur-sm group-hover:translate-x-1 transition-transform duration-300 delay-75 shadow-sm">
                        <p className="text-[11px] font-bold text-white/90 uppercase tracking-widest">Student</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
