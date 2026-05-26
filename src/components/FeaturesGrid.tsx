"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "🏷️",
    title: "Auto-Classification",
    description: "Every post tagged by intent: bug, billing, feature request, and more.",
  },
  {
    icon: "📊",
    title: "Sentiment Scoring",
    description: "AFINN lexicon + AI judge on every post and comment.",
  },
  {
    icon: "🚨",
    title: "Crisis Detection",
    description: "Auto-grouped incidents when negative sentiment spikes above threshold.",
  },
  {
    icon: "⚡",
    title: "Rules Engine",
    description: "WHEN/THEN automation for mod workflows — no code required.",
  },
  {
    icon: "🤖",
    title: "AI Copilot",
    description: "Chat assistant for mods with full tool-calling and context.",
  },
  {
    icon: "👥",
    title: "Team Metrics",
    description: "Response latency leaderboard for verified agents and mods.",
  },
  {
    icon: "📈",
    title: "Pipeline System",
    description: "10 built-in analysis templates, fully configurable per subreddit.",
  },
  {
    icon: "📋",
    title: "Audit Log",
    description: "Every mod action logged, timestamped, and fully searchable.",
  },
  {
    icon: "🔒",
    title: "Privacy-First",
    description: "All data stays in Reddit's infrastructure. Zero external storage.",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.1,
        ease: "easeOut",
      }}
      className="group relative bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-[#ff4500]/30 rounded-2xl p-6 transition-all duration-300 cursor-default"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-[#ff4500]/0 group-hover:bg-[#ff4500]/5 transition-all duration-300" />

      <div className="relative">
        {/* Icon */}
        <div className="w-12 h-12 bg-[#ff4500]/10 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-[#ff4500]/20 transition-colors">
          {feature.icon}
        </div>

        {/* Title */}
        <h3 className="text-white font-semibold text-base mb-2">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export function FeaturesGrid() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="features" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#ff4500] text-sm font-semibold uppercase tracking-widest mb-4 block">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything your mod team needs
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Nine modules, one install. SubVitals runs entirely inside Reddit — no
            external dashboards, no new tabs.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
