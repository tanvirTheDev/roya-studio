"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { COLORS } from "@/lib/constants";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="mb-12 flex items-center justify-between">
      <motion.div
        className="flex items-center gap-3"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Link href="/" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/60 shadow-lg shadow-black/40">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-yellow-400/80 bg-[#FCD015]">
            <div className="h-2.5 w-2.5 rotate-45 rounded-sm bg-[#3A3838]" />
          </div>
        </Link>
        <div className="leading-tight">
          <p className="text-sm font-medium tracking-[0.35em] text-white/60">
            ROYA STUDIO
          </p>
          <p className="text-base text-white/70">
            Professional Studio Services
          </p>
        </div>
      </motion.div>

      <motion.nav
        className="hidden items-center gap-6 text-base text-white/70 md:flex"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <Link href="/product" className="text-sm font-medium uppercase tracking-[0.2em] text-white/50 hover:text-white/80 transition">
          Our Set
        </Link>
       <Button
          size="sm"
          className="rounded-full border border-yellow-400/70 bg-[#FCD015] px-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#3A3838] shadow-[0_0_35px_rgba(252,208,21,0.5)] transition hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(252,208,21,0.65)]"
        >
          Book a Call
        </Button>
      </motion.nav>
    </header>
  );
}
