"use client"

import { motion } from "framer-motion"
import { Shield, Eye, Smartphone } from "lucide-react"
import FeatureCard from "./feature-card"

const features = [
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "AES-256 encryption ensures your data is protected with military-grade security standards.",
  },
  {
    icon: Eye,
    title: "Zero-Knowledge Architecture",
    description: "We can't see your data even if we wanted to. Your secrets remain yours alone.",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Access",
    description: "Access your vault seamlessly across all your devices with automatic synchronization.",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="pt-0 pb-20 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
            Why Choose Vaultify?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Built with security-first principles and designed for everyone
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
