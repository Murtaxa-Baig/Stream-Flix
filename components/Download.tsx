"use client";

import { motion } from "framer-motion";

export default function Download() {
  return (
    <section
      id="download"
      className="py-20 bg-background-light dark:bg-background-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#131118] dark:text-white mb-12"
        >
          Download Stream Flix App
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { icon: "apple", label: "Download on the", store: "App Store" },
            { icon: "play_arrow", label: "Get it on", store: "Google Play" },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="brand-gradient p-10 rounded-2xl text-white flex flex-col items-center justify-center gap-6 shadow-xl cursor-pointer transition-shadow hover:shadow-primary/20 group"
            >
              {card.icon === "apple" ? (
                <svg className="w-16 h-16 fill-current" viewBox="0 0 384 512">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
              ) : (
                <svg className="w-16 h-16 fill-current" viewBox="0 0 512 512">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
              )}
              <div className="text-center">
                <p className="text-sm opacity-90 mb-1">{card.label}</p>
                <h3 className="text-2xl font-black">{card.store}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
