"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff4500]/20 via-[#ff4500]/10 to-transparent" />
          <div className="absolute inset-0 bg-[#0f0f0f]" style={{ opacity: 0.7 }} />
          <div className="absolute inset-0 border border-[#ff4500]/20 rounded-3xl" />

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>

          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#ff4500]/20 blur-3xl" />

          {/* Content */}
          <div className="relative z-10 text-center py-20 px-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 bg-[#ff4500]/10 border border-[#ff4500]/20 text-[#ff4500] text-sm font-medium px-4 py-2 rounded-full mb-8">
                <span className="w-2 h-2 bg-[#ff4500] rounded-full animate-pulse" />
                Free during hackathon
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Ready to see your subreddit&apos;s
              <br />
              <span className="text-[#ff4500]">vital signs?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/60 text-lg mb-10 max-w-md mx-auto"
            >
              One-click install from the Devvit App Directory. Your dashboard
              goes live the moment your first post is approved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="https://developers.reddit.com/apps/sub-vitals"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-[#ff4500] hover:bg-[#e03d00] text-white font-bold px-10 py-4 rounded-xl text-lg transition-all hover:shadow-[0_0_40px_rgba(255,69,0,0.5)] hover:-translate-y-1"
              >
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 0C4.478 0 0 4.478 0 10c0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10C20 4.478 15.523 0 10 0zm6.071 8.485c.013.171.013.343.013.514 0 5.233-3.982 11.268-11.268 11.268a11.22 11.22 0 01-6.074-1.782.168.168 0 01-.013-.172c.38.044.762.057 1.142.057a7.938 7.938 0 004.915-1.69 3.957 3.957 0 01-3.694-2.74.171.171 0 01.171-.059c.3.044.601.07.912.07.436 0 .858-.057 1.256-.165a3.953 3.953 0 01-3.17-3.876v-.05c.527.294 1.133.47 1.775.49a3.948 3.948 0 01-1.745-3.29 3.93 3.93 0 01.535-1.997 11.222 11.222 0 008.143 4.128 4.446 4.446 0 01-.098-.904 3.953 3.953 0 013.954-3.953 3.94 3.94 0 012.887 1.248 7.77 7.77 0 002.507-.956 3.963 3.963 0 01-1.737 2.183 7.887 7.887 0 002.272-.621 8.035 8.035 0 01-1.97 2.047z" />
                </svg>
                Install SubVitals
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
