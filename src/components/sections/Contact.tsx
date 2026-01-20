"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { scaleIn } from "@/lib/animations";

export function Contact() {
  return (
    <section className="mb-20">
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <Card className="border-white/15 bg-gradient-to-r from-[#FCD015]/15 via-black to-black text-white shadow-[0_24px_80px_rgba(0,0,0,0.95)]">
          <CardContent className="grid gap-10 p-8 md:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] md:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FCD015]">
                Book a Call
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Ready to grow your business?
              </h2>
              <p className="mt-4 text-base text-white/70 sm:text-lg">
                Tell us about your business and what you need. We will reply with a plan and prices.
              </p>

              <div className="mt-6 flex flex-wrap gap-6 text-sm text-white/60">
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p>hello@royastudio.com</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Call</p>
                  <p>+880 1749-000177</p>
                </div>
              </div>
            </div>

            <form className="space-y-4 text-base">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-white/70">
                    Full Name
                  </label>
                  <input
                    className="mt-2 w-full rounded-full border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#FCD015]/70"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-white/70">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-2 w-full rounded-full border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#FCD015]/70"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-white/70">
                  Tell us about your project
                </label>
                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#FCD015]/70"
                  placeholder="What services do you need? What is your budget?"
                />
              </div>
              <Button
                type="submit"
                className="mt-3 w-full rounded-full border border-yellow-400/70 bg-[#FCD015] text-sm font-semibold uppercase tracking-[0.22em] text-[#3A3838] shadow-[0_16px_55px_rgba(0,0,0,0.95)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_70px_rgba(0,0,0,1)]"
              >
                Send Request
              </Button>
              <p className="text-xs text-white/40">
                We reply within one business day.
              </p>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
