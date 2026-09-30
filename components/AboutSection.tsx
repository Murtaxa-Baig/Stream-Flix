"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      className="py-20 bg-white dark:bg-gray-900 overflow-hidden"
      id="about"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#131118] dark:text-white mb-6">
            Your Ultimate Search Assistant
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg leading-relaxed max-w-2xl mx-auto">
            Experience the next generation of film discovery. Stream Flix provides
            a comprehensive suite of AI-powered tools designed to give you complete
            control over how you search, explore, and get recommendations for your next movie night.
          </p>
          <ul className="space-y-4 max-w-xl mx-auto text-left">
            {[
              "Simultaneous Search: Execute your search query across multiple browsers at the same time in one go.",
              "WebView Integration: Run active WebViews for all selected browsers inside the application interface.",
              "Offline Search Model: Premium users can download an AI model inside the app to search and get results offline.",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index }}
                className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800"
              >
                <span className="material-symbols-outlined text-primary mt-0.5">
                  search
                </span>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
