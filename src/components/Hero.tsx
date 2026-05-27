"use client";

import { motion } from "framer-motion";

function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,69,0,0.15),transparent)]" />

      {/* Grid lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff4500]/10 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-900/10 rounded-full blur-3xl"
        animate={{ x: [0, -25, 0], y: [0, 15, 0], scale: [1, 1.15, 1] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#ff4500]/5 rounded-full blur-2xl"
        animate={{ x: [0, 15, -15, 0], y: [0, -10, 10, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <AnimatedGrid />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <FadeUp delay={0} className="mb-8">
          <span className="inline-flex items-center gap-2 bg-[#ff4500]/10 border border-[#ff4500]/20 text-[#ff4500] text-sm font-medium px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-[#ff4500] rounded-full animate-pulse" />
            Built for the Reddit Mod Tools Hackathon 2026
          </span>
        </FadeUp>

        {/* Heading */}
        <FadeUp delay={0.15}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-6">
            Your subreddit&apos;s{" "}
            <span className="text-[#ff4500]">vital signs.</span>
            <br />
            At a glance.
          </h1>
        </FadeUp>

        {/* Subheading */}
        <FadeUp delay={0.3}>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
            SubVitals gives moderators real-time CX analytics —
            auto-classification, sentiment tracking, crisis detection, and
            AI-powered triage — all natively inside Reddit.
          </p>
        </FadeUp>

        {/* CTA Buttons */}
        <FadeUp delay={0.45}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://developers.reddit.com/apps/sub-vitals"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-[#ff4500] hover:bg-[#e03d00] text-white font-semibold px-8 py-4 rounded-xl text-base transition-all hover:shadow-[0_0_30px_rgba(255,69,0,0.4)] hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 0C4.478 0 0 4.478 0 10c0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10C20 4.478 15.523 0 10 0zm6.071 8.485c.013.171.013.343.013.514 0 5.233-3.982 11.268-11.268 11.268a11.22 11.22 0 01-6.074-1.782.168.168 0 01-.013-.172c.38.044.762.057 1.142.057a7.938 7.938 0 004.915-1.69 3.957 3.957 0 01-3.694-2.74.171.171 0 01.171-.059c.3.044.601.07.912.07.436 0 .858-.057 1.256-.165a3.953 3.953 0 01-3.17-3.876v-.05c.527.294 1.133.47 1.775.49a3.948 3.948 0 01-1.745-3.29 3.93 3.93 0 01.535-1.997 11.222 11.222 0 008.143 4.128 4.446 4.446 0 01-.098-.904 3.953 3.953 0 013.954-3.953 3.94 3.94 0 012.887 1.248 7.77 7.77 0 002.507-.956 3.963 3.963 0 01-1.737 2.183 7.887 7.887 0 002.272-.621 8.035 8.035 0 01-1.97 2.047z" />
              </svg>
              Install on Reddit
            </a>
            <a
              href="https://github.com/divyanx/sub-vitals"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </div>
        </FadeUp>

        {/* Stats row */}
        <FadeUp delay={0.6}>
          <div className="mt-20 pt-12 border-t border-white/10 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { value: "3", label: "Core modules" },
              { value: "9", label: "Feature cards" },
              { value: "100%", label: "Reddit-native" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-[#ff4500]">
                  {stat.value}
                </div>
                <div className="text-sm text-white/40 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
}
