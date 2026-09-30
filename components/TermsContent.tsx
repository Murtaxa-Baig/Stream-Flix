"use client";

import { motion } from "framer-motion";

export default function TermsContent() {
  return (
    <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 border-b border-gray-100 dark:border-gray-800 pb-8 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl mt-8 font-black text-[#131118] dark:text-white mb-4">
          Terms & Conditions
        </h1>
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm">
          <span className="text-gray-500 dark:text-gray-400">
            Last Updated: July 31, 2026
          </span>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a
            className="text-primary font-medium hover:underline flex items-center gap-1"
            href="mailto:supportappnaya@gmail.com"
          >
            <span className="material-symbols-outlined text-sm">mail</span>
            supportappnaya@gmail.com
          </a>
        </div>
      </motion.header>
      <div className="space-y-12">
        {[
          {
            id: "acceptance",
            title: "1. Acceptance of Agreement",
            content: (
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                By accessing or using Stream Flix (“Service”), you agree to be
                legally bound by these Terms & Conditions. If you disagree with
                any provision, you must immediately cease use of the Service.
              </p>
            ),
          },
          {
            id: "definitions",
            title: "2. Definitions",
            content: (
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex gap-3">
                  <span className="font-bold text-[#131118] dark:text-white min-w-[100px]">
                    “Platform”:
                  </span>
                  <span>Refers to the Stream Flix website and applications.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#131118] dark:text-white min-w-[100px]">
                    “User”:
                  </span>
                  <span>
                    Refers to any individual accessing or using the Service.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#131118] dark:text-white min-w-[100px]">
                    “User Content”:
                  </span>
                  <span>
                    Refers to any watchlists, custom reviews, ratings, search logs, or profile details saved using the Service.
                  </span>
                </li>
              </ul>
            ),
          },
          {
            id: "services",
            title: "3. Description of Services",
            content: (
              <>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Stream Flix provides AI-driven movie discovery and analysis services, including movie information pages, cast & streaming availability info, AI-based movie recommendations, and custom summaries (with options for with or without spoilers based on your selection).
                </p>
              </>
            ),
          },
          {
            id: "subscriptions",
            title: "4. Subscriptions & Free Trials",
            content: (
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Stream Flix offers premium subscription plans (weekly and monthly auto-renewable plans) granting unlimited access to premium AI recommendations and custom movie summaries.
                </p>
                <p>
                  New users are eligible for a **3-day free trial** of the subscription plan, allowing full access to explore the complete potential of Stream Flix before charging begins.
                </p>
                <p>
                  You have the explicit right to cancel your subscription at any time. When canceled, your subscription remains active and premium features remain accessible until the end of the current billing cycle.
                </p>
              </div>
            ),
          },
          {
            id: "usage",
            title: "5. Acceptable Use Policy",
            content: (
              <>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  You agree NOT to:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Attempt to scrape, harvest, or crawl movie database information from the Service",
                    "Use AI recommendation queries to generate harmful, offensive, or harassing queries",
                    "Circumvent spoiler filters or abuse the spoiler selection module",
                    "Attempt to reverse engineer the recommendation models or software",
                    "Infringe upon third-party intellectual property or copy original layouts",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-2 items-center p-3 rounded-lg bg-red-50/50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20"
                    >
                      <span className="material-symbols-outlined text-red-500 text-sm">
                        block
                      </span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            ),
          },
          {
            id: "intellectual",
            title: "6. Intellectual Property",
            content: (
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p className="leading-relaxed">
                  Stream Flix owns the AI models, recommendation algorithms, database layout, software, and brand. You retain ownership of the custom watchlists and reviews you create, subject to these terms.
                </p>
              </div>
            ),
          },
          {
            id: "liability",
            title: "7. Limitation of Liability",
            content: (
              <>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  To the maximum extent permitted by law, Stream Flix shall not be
                  liable for:
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 pl-4">
                  <li>• Indirect or consequential damages</li>
                  <li>• Inaccuracy of AI-generated summaries or recommendations</li>
                  <li>• Technical interruptions or data loss</li>
                </ul>
              </>
            ),
          },
          {
            id: "contact",
            title: "8. Contact Information",
            content: (
              <div className="text-center p-8 rounded-2xl bg-primary/5 border border-primary/10">
                <h4 className="text-xl font-bold text-[#131118] dark:text-white mb-2">
                  Legal Inquiries
                </h4>
                <p className="text-[#6b608a] dark:text-[#a097bd] mb-6">
                  For legal inquiries, please contact us at:
                </p>
                <a
                  href="mailto:supportappnaya@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
                >
                  <span className="material-symbols-outlined">mail</span>
                  supportappnaya@gmail.com
                </a>
              </div>
            ),
          },
        ].map((section, index) => (
          <motion.section
            key={section.id}
            id={section.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[#131118] dark:text-white mb-4">
              {section.title}
            </h2>
            {section.content}
          </motion.section>
        ))}
      </div>
    </div>
  );
}
