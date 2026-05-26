"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const withoutItems = [
  "Manually sorting hundreds of posts every shift",
  "Missing critical escalations until they go viral",
  "No visibility into response times or team load",
  "Duplicate tickets from the same user, different posts",
  "Zero data on what topics are actually driving volume",
  "Post-mortem reports built from memory, not data",
];

const withItems = [
  "Auto-classified inbox — bugs, billing, features, sorted instantly",
  "Crisis alerts fire before escalations go public",
  "Real-time leaderboard: who responded, how fast",
  "Deduplication groups same-user threads automatically",
  "Contact driver dashboard shows volume by topic",
  "Audit log with full searchable mod action history",
];

function Column({
  title,
  items,
  variant,
  delay,
}: {
  title: string;
  items: string[];
  variant: "without" | "with";
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: variant === "without" ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={`relative rounded-2xl border p-8 ${
        variant === "without"
          ? "bg-white/[0.02] border-red-500/20"
          : "bg-white/[0.02] border-[#ff4500]/20"
      }`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
            variant === "without"
              ? "bg-red-500/10 text-red-400"
              : "bg-[#ff4500]/10 text-[#ff4500]"
          }`}
        >
          {variant === "without" ? "✕" : "✓"}
        </div>
        <h3
          className={`font-semibold text-lg ${
            variant === "without" ? "text-red-400" : "text-[#ff4500]"
          }`}
        >
          {title}
        </h3>
      </div>

      {/* Items */}
      <ul className="space-y-4">
        {items.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: delay + 0.1 + i * 0.07 }}
            className="flex items-start gap-3 text-sm text-white/70 leading-relaxed"
          >
            <span
              className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${
                variant === "without" ? "bg-red-400/60" : "bg-[#ff4500]/60"
              }`}
            />
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export function ProblemSolution() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
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
            The difference
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Before and after SubVitals
          </h2>
        </motion.div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-6">
          <Column
            title="Without SubVitals"
            items={withoutItems}
            variant="without"
            delay={0}
          />
          <Column
            title="With SubVitals"
            items={withItems}
            variant="with"
            delay={0.15}
          />
        </div>
      </div>
    </section>
  );
}
