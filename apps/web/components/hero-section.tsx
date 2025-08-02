"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import SecurityIllustration from "./illustrations/security-illustrations";
import TechUserIllustration from "./illustrations/tech-user-illustrations";


export default function HeroSection() {
  return (
    <section className="relative px-4 py-12 lg:px-8 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <SecurityIllustration />
          </motion.div>

          {/* Center Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:col-span-1"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight font-serif">
              More secure, for more people.
            </h1>

            <p className="text-xl md:text-2xl text-black mb-8 max-w-2xl mx-auto leading-relaxed">
              We help more people protect their sensitive information by
              offering secure, easy-to-use digital vault solutions.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-medium shadow-lg"
              >
                <ArrowDown className="w-5 h-5 mr-2" />
                Discover Vaultify
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center"
          >
            <TechUserIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
