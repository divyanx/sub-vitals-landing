"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Install",
    description:
      "One click from the Devvit App Directory. SubVitals installs directly into your subreddit — no API keys needed to get started.",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M12 16V4m0 12l-4-4m4 4l4-4M4 20h16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Configure",
    description:
      "Set your brand name, intent taxonomy, and optional OpenAI API key for AI scoring. Takes less than five minutes.",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
        <path
          d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Analyze",
    description:
      "Posts auto-classify the moment they are approved. Your dashboard goes live immediately with real-time sentiment, volume, and team metrics.",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M3 3v18h18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 9l-5 5-4-4-3 3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      className="flex flex-col items-center text-center lg:items-start lg:text-left"
    >
      {/* Step number circle */}
      <div className="relative mb-6">
        <div className="w-12 h-12 rounded-full bg-[#ff4500]/10 border-2 border-[#ff4500]/30 flex items-center justify-center text-[#ff4500]">
          {step.icon}
        </div>
        <span className="absolute -top-2 -right-2 bg-[#ff4500] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center leading-none">
          {index + 1}
        </span>
      </div>

      {/* Step number label */}
      <span className="text-[#ff4500]/50 text-xs font-mono font-semibold mb-2">
        {step.number}
      </span>

      {/* Title */}
      <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>

      {/* Description */}
      <p className="text-white/50 text-sm leading-relaxed max-w-xs">
        {step.description}
      </p>
    </motion.div>
  );
}

export function HowItWorks() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section
      id="how-it-works"
      className="py-24 px-6 bg-[#0a0a0a] relative"
    >
      {/* Subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-white/10" />

      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#ff4500] text-sm font-semibold uppercase tracking-widest mb-4 block">
            Getting started
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Up and running in minutes
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only, vertically centered on the icon circles */}
          <div className="hidden lg:block absolute top-[30px] left-[calc(16.67%+40px)] right-[calc(16.67%+40px)] h-[2px] bg-gradient-to-r from-[#ff4500]/40 via-[#ff4500]/20 to-[#ff4500]/40" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
