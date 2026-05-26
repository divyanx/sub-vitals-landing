"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const communities = [
  {
    subreddit: "r/Sonos",
    description: "Hardware support communities",
    category: "Hardware",
    color: "from-blue-500/10 to-blue-600/5",
    border: "border-blue-500/20",
    badge: "bg-blue-500/10 text-blue-400",
  },
  {
    subreddit: "r/OpenPhone",
    description: "SaaS product communities",
    category: "SaaS",
    color: "from-purple-500/10 to-purple-600/5",
    border: "border-purple-500/20",
    badge: "bg-purple-500/10 text-purple-400",
  },
  {
    subreddit: "r/Fidelity",
    description: "Financial services communities",
    category: "Finance",
    color: "from-green-500/10 to-green-600/5",
    border: "border-green-500/20",
    badge: "bg-green-500/10 text-green-400",
  },
  {
    subreddit: "Any brand subreddit",
    description: "With customer-facing traffic",
    category: "All brands",
    color: "from-[#ff4500]/10 to-[#ff4500]/5",
    border: "border-[#ff4500]/20",
    badge: "bg-[#ff4500]/10 text-[#ff4500]",
  },
];

function CommunityCard({
  community,
  index,
}: {
  community: (typeof communities)[number];
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
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className={`relative rounded-2xl border ${community.border} bg-gradient-to-br ${community.color} p-6 overflow-hidden`}
    >
      {/* Background pattern */}
      <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
        <svg viewBox="0 0 100 100" fill="none">
          <circle cx="80" cy="20" r="60" stroke="white" strokeWidth="2" />
          <circle cx="80" cy="20" r="40" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative">
        {/* Badge */}
        <span
          className={`inline-block text-xs font-semibold px-2 py-1 rounded-md mb-4 ${community.badge}`}
        >
          {community.category}
        </span>

        {/* Subreddit name */}
        <h3 className="text-white font-bold text-lg mb-2 leading-tight">
          {community.subreddit}
        </h3>

        {/* Description */}
        <p className="text-white/50 text-sm">{community.description}</p>
      </div>
    </motion.div>
  );
}

export function BuiltFor() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="built-for" className="py-24 px-6 bg-[#0a0a0a]">
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
            Built for
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Brand communities on Reddit
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            SubVitals is purpose-built for brand-operated subreddits where
            customer support happens in the open.
          </p>
        </motion.div>

        {/* Community cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {communities.map((community, i) => (
            <CommunityCard key={community.subreddit} community={community} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
