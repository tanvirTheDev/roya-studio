"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Hero() {
  return (
    <section className="mb-24 grid items-center gap-12 md:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)]">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-1.5 text-sm text-white/70 backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-[#FCD015] shadow-[0_0_10px_rgba(252,208,21,0.9)]" />
          Professional studio services for your business
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
          className="mt-6 text-balance text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Grow{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-[#FCD015]">
              Super Fast
            </span>
            <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-[#FCD015]/25 blur-sm" />
          </span>{" "}
          on every{" "}
          <span className="text-white/80">social platform</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-xl text-base text-white/60 sm:text-lg"
        >
          We help your business grow online. We take photos, make videos, create ads and manage your social media. You focus on your business, we handle the rest.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button
            size="lg"
            className="group rounded-full border border-yellow-400/80 bg-[#FCD015] px-8 text-sm font-semibold uppercase tracking-[0.22em] text-[#3A3838] shadow-[0_15px_45px_rgba(0,0,0,0.65)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(0,0,0,0.8)]"
          >
            <span>Book a call</span>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-white/20 bg-transparent px-7 text-sm font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:border-yellow-400/70 hover:bg-white/5"
          >
            See our work
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/40"
        >
          <div className="flex items-center gap-2">
            <span className="text-xl">★ ★ ★ ★ ★</span>
            <span>Trusted by 100+ businesses</span>
          </div>
          <Separator className="hidden h-6 bg-white/10 md:block" orientation="vertical" />
          <div className="flex gap-6">
            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold text-white">
                10M+
              </span>
              <span>Monthly views</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold text-white">
                4x
              </span>
              <span>Average growth</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hero Visual */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#222] via-[#151515] to-black p-5 shadow-[0_35px_120px_rgba(0,0,0,0.9)]"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
                ROYA STUDIO SET
              </p>
              <p className="mt-2 text-base text-white/80">
                Ready to use in{" "}
                <span className="text-[#FCD015]">5 minutes</span> after you arrive.
              </p>
            </div>
            <div className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-yellow-200">
              In Studio
            </div>
          </div>

          {/* Faux social grid */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#FCD015]/15 via-transparent to-[#FCD015]/10 p-4"
            >
              <div className="mb-2 flex items-center justify-between text-xs text-white/60">
                <span className="font-medium">@royastudio</span>
                <span className="rounded-full bg-white/5 px-2 py-0.5 text-[0.65rem]">
                  Reels
                </span>
              </div>
              <div className="space-y-2 text-xs">
                <p className="text-white/80">
                  Your brand looks{" "}
                  <span className="text-[#FCD015]">professional</span> and amazing.
                </p>
                <div className="flex items-center justify-between text-[0.7rem] text-white/50">
                  <span>128k views</span>
                  <span>+312% growth</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-black to-[#3A3838] p-4"
            >
              <div className="mb-2 flex items-center justify-between text-xs text-white/60">
                <span className="font-medium">Studio Timeline</span>
                <span className="text-[0.7rem] text-[#FCD015]">
                  0 → 30 days
                </span>
              </div>
              <div className="space-y-2 text-xs">
                <p className="text-white/80">
                  We handle everything from start to finish.
                </p>
                <div className="flex items-center gap-1 text-[0.7rem] text-white/50">
                  <span className="inline-flex h-1 w-8 rounded-full bg-[#FCD015]" />
                  <span className="inline-flex h-1 w-10 rounded-full bg-[#FCD015]/70" />
                  <span className="inline-flex h-1 w-6 rounded-full bg-white/20" />
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              className="col-span-2 overflow-hidden rounded-2xl border border-yellow-400/30 bg-gradient-to-r from-[#FCD015]/20 via-[#FCD015]/5 to-transparent p-4"
            >
              <div className="mb-2 flex items-center justify-between text-xs text-white/70">
                <span className="font-medium">
                  Professional Video Production
                </span>
                <span className="text-[0.7rem] text-yellow-200">
                  4K Quality
                </span>
              </div>
              <div className="relative h-28 overflow-hidden rounded-xl bg-black/60">
                <Image
                  src="/file.svg"
                  alt="Roya Studio video preview"
                  fill
                  className="object-cover opacity-70 mix-blend-screen"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FCD015] text-[#3A3838] shadow-[0_0_35px_rgba(252,208,21,0.9)]">
                      ▷
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
