"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { fadeUp } from "@/lib/animations";
import { SERVICES } from "@/lib/constants";

export function Services() {
  return (
    <section id="services" className="mb-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
      >
        <motion.div variants={fadeUp} custom={0}>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FCD015]">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
            Professional services for{" "}
            <span className="text-[#FCD015]">your business</span>
          </h2>
          <p className="mt-4 max-w-lg text-base text-white/60 sm:text-lg">
            We offer many services to help your business grow. From photos to videos to ads, we do it all.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={1}
          className="flex gap-6 text-sm text-white/50"
        >
          <div>
            <p className="text-lg font-semibold text-white">{SERVICES.length}</p>
            <p>Services</p>
          </div>
          <Separator className="hidden h-8 bg-white/10 md:block" orientation="vertical" />
          <div>
            <p className="text-lg font-semibold text-white">24/7</p>
            <p>Support</p>
          </div>
        </motion.div>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            custom={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Card className="group h-full border-white/10 bg-gradient-to-br from-white/5 via-black/40 to-black/90 text-white shadow-[0_18px_50px_rgba(0,0,0,0.75)] transition-all hover:-translate-y-1 hover:border-yellow-400/60 hover:shadow-[0_24px_70px_rgba(0,0,0,0.95)]">
              <CardContent className="flex h-full flex-col justify-between gap-5 p-6">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-white/60">
                    <span className="h-2 w-2 rounded-full bg-[#FCD015]" />
                    {service.badge}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/60">
                    {service.description}
                  </p>
                </div>
                <button className="flex items-center gap-1 text-sm font-semibold text-[#FCD015]">
                  Learn more
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
