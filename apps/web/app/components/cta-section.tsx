"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="pt-0 pb-20 bg-[#C4FF00] dark:bg-slate-800">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 font-serif">
            Ready to Secure Your Digital Life?
          </h2>
          <p className="text-xl text-black dark:text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust Vaultify to keep their sensitive information safe and accessible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-green-600 text-white hover:bg-green-700 rounded-full px-8 py-4 text-lg font-medium"
              >
                Start Free Trial
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="bg-white border-white text-black hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-medium"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
