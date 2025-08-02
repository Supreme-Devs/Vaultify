"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  feature: {
    icon: LucideIcon
    title: string
    description: string
  }
  index: number
}

export default function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 text-center transition-colors duration-500"
    >
      <div className="w-16 h-16 bg-[#C4FF00] rounded-2xl flex items-center justify-center mx-auto mb-6">
        <feature.icon className="w-8 h-8 text-black" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
    </motion.div>
  )
}
