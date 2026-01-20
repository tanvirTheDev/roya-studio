"use client";
import { motion } from "framer-motion";
import { fadeUp, scaleIn } from "@/lib/animations";

export function OurSet() {
  return (
    <section id="our-set" className="mb-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-10 md:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)]"
      >
        <motion.div variants={fadeUp} custom={0}>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FCD015]">
            Our Set
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
            A studio ready to{" "}
            <span className="text-[#FCD015]">work fast</span>
          </h2>
          <p className="mt-4 max-w-lg text-base text-white/60 sm:text-lg">
            We have many backgrounds, lights and cameras ready. You come in, sit down, and we start. No waiting.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {[
              { label: "Backgrounds", value: "6+", sub: "Different looks" },
              { label: "Camera Angles", value: "9", sub: "Ready to use" },
              { label: "Audio", value: "Studio", sub: "Professional quality" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                custom={i + 1}
                className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-white/60"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                  {item.label}
                </p>
                <p className="mt-2 text-xl font-semibold text-white">
                  {item.value}
                </p>
                <p className="mt-1">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#FCD015]/25 via-black to-black shadow-[0_30px_90px_rgba(0,0,0,0.9)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0,#FCD015_0,transparent_55%),radial-gradient(circle_at_80%_100%,#ffffff55_0,transparent_60%)] opacity-70" />
          <div className="relative z-10 p-6">
            <div className="flex items-center justify-between text-sm text-white/70">
              <span className="font-semibold tracking-[0.16em] uppercase">
                ROYA CONTROL
              </span>
              <span className="rounded-full bg-black/40 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-white/60">
                Live Preview
              </span>
            </div>
            <div className="mt-5 h-48 rounded-2xl border border-white/15 bg-black/70" />

            <div className="mt-5 grid grid-cols-3 gap-3 text-xs text-white/60">
              <div className="rounded-xl border border-white/10 bg-black/60 p-3">
                <p className="text-[0.7rem] uppercase tracking-[0.14em] text-white/40">
                  Lighting
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Soft, bright or dramatic. Change with one click.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/60 p-3">
                <p className="text-[0.7rem] uppercase tracking-[0.14em] text-white/40">
                  Camera
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Many angles ready. All synced together.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/60 p-3">
                <p className="text-[0.7rem] uppercase tracking-[0.14em] text-white/40">
                  Audio
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Clear sound. Professional quality.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
