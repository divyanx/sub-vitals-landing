"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Nav() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{}}
    >
      <motion.div
        className="absolute inset-0 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5"
        style={{ opacity: bgOpacity }}
      />
      <div className="relative max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg overflow-hidden ring-1 ring-white/10 group-hover:ring-[#ff4500]/50 transition-all">
            <Image
              src="/icon-1024.png"
              alt="SubVitals"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">
            SubVitals
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <a
            href="#features"
            className="hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="hover:text-white transition-colors"
          >
            How it works
          </a>
          <a
            href="#built-for"
            className="hover:text-white transition-colors"
          >
            Built for
          </a>
        </div>

        <a
          href="https://developers.reddit.com/apps/sub-vitals"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#ff4500] hover:bg-[#e03d00] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          Install
        </a>
      </div>
    </motion.nav>
  );
}
