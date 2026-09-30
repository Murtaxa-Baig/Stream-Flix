"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Multi-Browser Search",
    description: "Perform your query across multiple search engines and browsers simultaneously in one go, saving you valuable time.",
    icon: "search",
    details: ["Simultaneous Queries", "Multi-Engine Support", "Unified Search Screen"],
    gradient: "brand-gradient"
  },
  {
    title: "In-App WebView Integration",
    description: "When you search, Google Search automatically opens WebViews for all selected browsers and runs them seamlessly inside the app.",
    icon: "web",
    details: ["Parallel WebViews", "Direct In-App Results", "Smooth Browser Switching"],
    gradient: "identity-gradient"
  },
  {
    title: "Offline AI Search Mode",
    description: "Search offline anytime. Download our advanced AI model directly inside the app to get instant search responses based on your parameters.",
    icon: "cloud_off",
    details: ["Offline Local AI Model", "Parameter-Based Responses", "Premium Members Exclusive"],
    gradient: "brand-gradient"
  },
  {
    title: "Location-Based Results",
    description: "Enable location permissions to automatically receive localized search trends, nearby recommendations, and regional search optimizations.",
    icon: "location_on",
    details: ["Localized Content Access", "Regional Trends Insights", "Precise Location Context"],
    gradient: "identity-gradient"
  },
  {
    title: "Profile & Avatar Upload",
    description: "Customize your user profile inside the app. Securely upload and update your custom profile picture with gallery permission.",
    icon: "photo_library",
    details: ["Gallery Upload Permission", "Custom Avatar Picture", "Personalized Settings Control"],
    gradient: "brand-gradient"
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-white dark:bg-gray-900 py-20 border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#131118] dark:text-white mb-4">
            Powerful Multi-Browser Search Features
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to search simultaneously, run in-app web views, search offline with local AI models, and customize your experience.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className={`${feature.gradient} text-white p-8 rounded-2xl shadow-lg flex flex-col h-full transition-all duration-300`}
            >
              <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <span className="material-symbols-outlined text-3xl text-white">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="opacity-90 mb-6 text-sm flex-1 leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-2 opacity-90 text-xs">
                {feature.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
