"use client";

import CTASection from "@/components/cta-section";
import FeaturesSection from "@/components/feature-section";
import Footer from "@/components/footer";
import GradientTransition from "@/components/gradient-transition";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import { useState, useEffect } from "react";


export default function VaultifyLanding() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen w-full bg-[#C4FF00] dark:bg-slate-900 transition-all duration-500">
      <Header isDark={isDark} setIsDark={setIsDark} />
      <HeroSection />
      <GradientTransition from="lime" to="white" />
      <FeaturesSection />
      <GradientTransition from="white" to="lime" />
      <CTASection />
      <GradientTransition from="lime" to="white" />
      <Footer />
    </div>
  );
}
