"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp } from "@/lib/animations";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section id="testimonials" className="mb-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
      >
        <motion.div variants={fadeUp} custom={0}>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FCD015]">
            Client Stories
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
            See what our clients say
          </h2>
        </motion.div>
        <motion.p
          variants={fadeUp}
          custom={1}
          className="max-w-md text-base text-white/60 sm:text-lg"
        >
          Many businesses trust us to help them grow online. We deliver results.
        </motion.p>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.name}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="h-full border-white/10 bg-gradient-to-br from-white/5 via-black/60 to-black text-white shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              <CardContent className="flex h-full flex-col gap-5 p-6">
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/50">
                      {t.tag}
                    </p>
                  </div>
                  <span className="text-xl text-[#FCD015]">"</span>
                </div>
                <p className="text-sm text-white/70">{t.quote}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
