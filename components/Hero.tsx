"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-6 border border-primary/20">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span>Stream Flix &middot; Stream Flix (project-322314619931)</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#131118] dark:text-white leading-[1.1] mb-8 tracking-tight mx-auto">
          Simultaneous Multi-Browser Search
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Discover your next favorite film with Stream Flix. Get personalized AI movie recommendations, explore detailed cast and movie info, and read custom summaries tailored to your preference—with or without spoilers.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="brand-gradient brand-gradient-hover text-white font-bold py-4 px-10 rounded-lg text-lg transition-all shadow-lg"
            onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started Free
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Features
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
