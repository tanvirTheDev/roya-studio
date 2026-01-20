"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fadeUp, scaleIn } from "@/lib/animations";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

const DOUBLE_SETS = [
  {
    id: 1,
    name: "Set 1",
    type: "Podcast",
    items: "Sofa",
    duration: "1 hour",
    price: "800 TK",
  },
  {
    id: 2,
    name: "Set 2",
    type: "Podcast",
    items: "Chair, Table",
    duration: "1 hour",
    price: "800 TK",
  },
  {
    id: 3,
    name: "Set 03",
    type: "Empty Room",
    items: "Khali Room",
    duration: "Flexible",
    price: "300 TK",
  },
];

const SINGLE_SETS = [
  {
    id: 1,
    name: "Single Chair",
    description: "One chair setup",
    price: "Contact for pricing",
  },
  {
    id: 2,
    name: "Single Sofa",
    description: "One sofa setup",
    price: "Contact for pricing",
  },
];

export default function ProductPage() {
  return (
    <main
      className="min-h-screen bg-[#3A3838] text-white"
      style={{ backgroundImage: "radial-gradient(circle at top, #555 0, #3A3838 45%, #151515 100%)" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col px-4 pb-24 pt-10 md:px-8 lg:px-10">
        <Navbar />

        {/* Hero Section */}
        <section className="mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FCD015]">
              Studio Sets
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
              Choose Your{" "}
              <span className="text-[#FCD015]">Studio Set</span>
            </h1>
            <p className="mt-4 mx-auto max-w-2xl text-base text-white/60 sm:text-lg">
              We have different studio setups for your needs. Book the one that works best for you.
            </p>
          </motion.div>
        </section>

        {/* Double Sets */}
        <section className="mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="mb-8"
          >
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Double Sets
            </h2>
            <p className="mt-2 text-base text-white/60">
              Perfect for podcasts and interviews. Two people can sit comfortably.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DOUBLE_SETS.map((set, index) => (
              <motion.div
                key={set.id}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="group h-full border-white/10 bg-gradient-to-br from-white/5 via-black/40 to-black/90 text-white shadow-[0_18px_50px_rgba(0,0,0,0.75)] transition-all hover:-translate-y-1 hover:border-yellow-400/60 hover:shadow-[0_24px_70px_rgba(0,0,0,0.95)]">
                  <CardContent className="flex h-full flex-col gap-5 p-6">
                    <div>
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-white/60">
                        <span className="h-2 w-2 rounded-full bg-[#FCD015]" />
                        {set.type}
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {set.name}
                      </h3>
                      <div className="mt-4 space-y-2 text-sm text-white/70">
                        <div className="flex items-center justify-between">
                          <span className="text-white/60">Items:</span>
                          <span className="font-medium">{set.items}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/60">Duration:</span>
                          <span className="font-medium">{set.duration}</span>
                        </div>
                        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                          <span className="text-base font-semibold text-white">
                            Price:
                          </span>
                          <span className="text-xl font-bold text-[#FCD015]">
                            {set.price}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="w-full rounded-full border border-yellow-400/70 bg-[#FCD015] text-sm font-semibold uppercase tracking-[0.18em] text-[#3A3838] shadow-[0_8px_30px_rgba(252,208,21,0.4)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(252,208,21,0.6)]"
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Single Sets */}
        <section className="mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="mb-8"
          >
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Single Sets
            </h2>
            <p className="mt-2 text-base text-white/60">
              Simple setups for one person. Perfect for solo videos and photos.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {SINGLE_SETS.map((set, index) => (
              <motion.div
                key={set.id}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="group h-full border-white/10 bg-gradient-to-br from-white/5 via-black/40 to-black/90 text-white shadow-[0_18px_50px_rgba(0,0,0,0.75)] transition-all hover:-translate-y-1 hover:border-yellow-400/60 hover:shadow-[0_24px_70px_rgba(0,0,0,0.95)]">
                  <CardContent className="flex h-full flex-col gap-5 p-6">
                    <div>
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-white/60">
                        <span className="h-2 w-2 rounded-full bg-[#FCD015]" />
                        Single Setup
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {set.name}
                      </h3>
                      <p className="mt-3 text-sm text-white/60">
                        {set.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                        <span className="text-base font-semibold text-white">
                          Price:
                        </span>
                        <span className="text-lg font-medium text-[#FCD015]">
                          {set.price}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full rounded-full border-white/20 bg-transparent text-sm font-semibold uppercase tracking-[0.18em] text-white/80 transition hover:border-yellow-400/70 hover:bg-white/5"
                    >
                      Contact Us
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-16"
        >
          <Card className="border-white/15 bg-gradient-to-r from-[#FCD015]/15 via-black to-black text-white shadow-[0_24px_80px_rgba(0,0,0,0.95)]">
            <CardContent className="p-8 text-center md:p-10">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Need a custom setup?
              </h2>
              <p className="mt-3 text-base text-white/70 sm:text-lg">
                Contact us to discuss your specific needs. We can create a custom setup just for you.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Button
                  className="rounded-full border border-yellow-400/70 bg-[#FCD015] px-8 text-sm font-semibold uppercase tracking-[0.22em] text-[#3A3838] shadow-[0_16px_55px_rgba(0,0,0,0.95)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_70px_rgba(0,0,0,1)]"
                >
                  Contact Us
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-white/20 bg-transparent px-7 text-sm font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:border-yellow-400/70 hover:bg-white/5"
                >
                  Call: +880 1749-000177
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <Footer />
      </div>
    </main>
  );
}
