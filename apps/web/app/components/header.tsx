"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Shield, Lock, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
}

export default function Header({ isDark, setIsDark }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-50 px-4 py-6 lg:px-8"
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2"
        >
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-[#C4FF00]" />
          </div>
          <span className="text-2xl font-bold text-black">Vaultify</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-black hover:text-black/80 transition-colors font-medium"
          >
            Features
          </a>
          <a
            href="#security"
            className="text-black hover:text-black/80 transition-colors font-medium"
          >
            Security
          </a>
          <a
            href="#preview"
            className="text-black hover:text-black/80 transition-colors font-medium"
          >
            How It Works
          </a>
          <a
            href="#about"
            className="text-black hover:text-black/80 transition-colors font-medium"
          >
            About
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg bg-black/10 backdrop-blur-sm text-black hover:bg-black/20 transition-colors md:hidden"
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </motion.button>

          <Button
            variant="outline"
            className="hidden md:inline-flex bg-white border-white text-black hover:bg-gray-100 rounded-full px-6 py-2 font-medium"
          >
            <Lock className="w-4 h-4 mr-2" />
            Login
          </Button>

          <Button className="hidden md:inline-flex bg-green-600 text-white hover:bg-green-700 rounded-full px-6 py-2 font-medium">
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-black/10 backdrop-blur-sm text-black"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-black/10 p-4"
        >
          <div className="flex flex-col space-y-4">
            <a
              href="#features"
              className="text-black hover:text-black/80 transition-colors font-medium"
            >
              Features
            </a>
            <a
              href="#security"
              className="text-black hover:text-black/80 transition-colors font-medium"
            >
              Security
            </a>
            <a
              href="#preview"
              className="text-black hover:text-black/80 transition-colors font-medium"
            >
              How It Works
            </a>
            <a
              href="#about"
              className="text-black hover:text-black/80 transition-colors font-medium"
            >
              About
            </a>
            <div className="flex space-x-2 pt-4 border-t border-black/10">
              <Button
                variant="outline"
                className="flex-1 bg-white border-white text-black hover:bg-gray-100 rounded-full"
              >
                Login
              </Button>
              <Button className="flex-1 bg-green-600 text-white hover:bg-green-700 rounded-full">
                Get Started
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
