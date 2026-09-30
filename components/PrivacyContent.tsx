"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const sections = [
  { id: "introduction", label: "1. Introduction" },
  { id: "information-collect", label: "2. Information We Collect" },
  { id: "how-we-use", label: "3. How We Use Your Information" },
  { id: "subscription-credits", label: "4. Subscription & Premium Policy" },
  { id: "legal-basis", label: "5. Legal Basis for Processing" },
  { id: "third-party", label: "6. Third-Party Services" },
  { id: "ai-disclaimer", label: "7. AI Providers Disclaimer" },
  { id: "data-retention", label: "8. Data Retention" },
  { id: "international-transfers", label: "9. International Transfers" },
  { id: "user-rights", label: "10. User Rights" },
  { id: "cookies-tech", label: "11. Cookies & Technical Info" },
  { id: "childrens-privacy", label: "12. Children's Privacy" },
  { id: "policy-updates", label: "13. Policy Updates" },
  { id: "contact-info", label: "14. Contact Information" },
  { id: "acceptance-policy", label: "15. Acceptance of Policy" },
];

export default function PrivacyContent() {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header section with modern brand identity */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 pb-10 border-b border-gray-200 dark:border-gray-800 text-center md:text-left"
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          Privacy Protection Guaranteed
        </span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#131118] dark:text-white mb-6">
          Privacy Policy
        </h1>
        <p className="text-[#6b608a] dark:text-[#a097bd] text-lg md:text-xl font-normal leading-relaxed max-w-3xl mb-8">
          Stream Flix is dedicated to maintaining transparent information about how we collect, use, process, and protect your data while using our AI-powered movie discovery and summary services.
        </p>
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <span className="material-symbols-outlined text-base">calendar_today</span>
            <span>Last Updated: <span className="font-semibold text-gray-800 dark:text-gray-200">July 31, 2026</span></span>
          </div>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-700">|</span>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <span className="material-symbols-outlined text-base">mail</span>
            <span>Contact Email: </span>
            <a
              className="text-primary font-semibold hover:underline"
              href="mailto:supportappnaya@gmail.com"
            >
              supportappnaya@gmail.com
            </a>
          </div>
        </div>
      </motion.header>

      {/* Main Content & Navigation Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Left Side: Sticky Navigation */}
        <aside className="hidden lg:block lg:col-span-4 xl:col-span-3">
          <div className="sticky top-24 max-h-[calc(100vh-140px)] overflow-y-auto pr-4 space-y-6 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-800">
            <div className="p-5 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-2">
                Table of Contents
              </h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 ${activeSection === section.id
                        ? "bg-primary text-white shadow-md shadow-primary/25"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary dark:hover:text-white"
                      }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${activeSection === section.id ? "bg-white" : "bg-transparent"}`}></span>
                    <span className="truncate">{section.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Quick Contact Info Box */}
            <div className="p-5 rounded-2xl brand-gradient text-white shadow-lg space-y-3">
              <h4 className="font-bold text-lg">Need Support?</h4>
              <p className="text-xs text-white/80 leading-relaxed">
                If you have questions about this policy or your data rights, our privacy officer is ready to help.
              </p>
              <a
                href="mailto:supportappnaya@gmail.com"
                className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 bg-white text-primary rounded-xl text-xs font-bold shadow-md hover:bg-opacity-95 transition-all"
              >
                <span className="material-symbols-outlined text-sm">mail</span>
                Send Email
              </a>
            </div>
          </div>
        </aside>

        {/* Right Side: Document Content */}
        <div className="col-span-11 lg:col-span-8 xl:col-span-9 space-y-16">

          {/* Section 1: Introduction */}
          <motion.section
            id="introduction"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">1</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#131118] dark:text-white">Introduction</h2>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm space-y-4">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                This Privacy Policy explains how **Stream Flix** collects, uses, stores, and protects user information when using our mobile application, website, and AI-powered movie recommendation and summary services.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                By using Stream Flix, you agree to the practices described in this Privacy Policy.
              </p>
            </div>
          </motion.section>

          {/* Section 2: Information We Collect */}
          <motion.section
            id="information-collect"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">2</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#131118] dark:text-white">Information We Collect</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Account Information */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined p-2 rounded-xl bg-primary/10">account_circle</span>
                  <h3 className="font-bold text-lg text-[#131118] dark:text-white">Account Information</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span>Full Name</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span>Email Address</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span>Authentication details through third-party login providers</span>
                  </li>
                </ul>
              </div>

              {/* Usage Information */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm space-y-4">
                <div className="flex items-center gap-3 text-brand-purple">
                  <span className="material-symbols-outlined p-2 rounded-xl bg-brand-purple/10">monitoring</span>
                  <h3 className="font-bold text-lg text-[#131118] dark:text-white">Usage Information</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
                    <span>Movie search history and viewed titles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
                    <span>Spoiler settings and summary preference selections</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
                    <span>AI recommendation history and feedback ratings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
                    <span>Device type and operating system version</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
                    <span>App analytics, crash reports, performance diagnostic info</span>
                  </li>
                </ul>
              </div>

              {/* Movie & Preferences Data */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm space-y-4">
                <div className="flex items-center gap-3 text-brand-blue">
                  <span className="material-symbols-outlined p-2 rounded-xl bg-brand-blue/10">movie</span>
                  <h3 className="font-bold text-lg text-[#131118] dark:text-white">Movie & Preferences Data</h3>
                </div>
                <p className="text-xs text-gray-500">Depending on features used, we may temporarily process:</p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                    <span>Movie names or keywords entered for summaries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                    <span>Spoiler preference state (with or without spoilers)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                    <span>AI-generated custom recommendations and summaries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                    <span>Saved custom movie lists, watchlists, and favorite genres</span>
                  </li>
                </ul>
              </div>

              {/* Permissions & Device Data */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm space-y-4">
                <div className="flex items-center gap-3 text-green-500">
                  <span className="material-symbols-outlined p-2 rounded-xl bg-green-500/10">photo_library</span>
                  <h3 className="font-bold text-lg text-[#131118] dark:text-white">Permissions & Device Data</h3>
                </div>
                <p className="text-xs text-gray-500">With your explicit permission, Stream Flix may access:</p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    <span>Media Library & Gallery files (profile picture update only)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    <span>Location Data (approximate and precise)</span>
                  </li>
                </ul>
                <div className="p-3 bg-green-500/5 rounded-xl border border-green-500/10 text-xs text-green-600 dark:text-green-400 leading-relaxed space-y-2">
                  <p>
                    <strong>Media Library Access:</strong> Used solely for updating user profile pictures. We do not inspect other photos or upload unauthorized content.
                  </p>
                  <p>
                    <strong>Location Access:</strong> Required to enable location-based features, localized streaming platform availability, regional cinema listings, and regional popularity trends. We protect your coordinates and never share your locations.
                  </p>
                </div>
              </div>

            </div>
          </motion.section>

          {/* Section 3: How We Use Your Information */}
          <motion.section
            id="how-we-use"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">3</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#131118] dark:text-white">How We Use Your Information</h2>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                We process and utilize the information we collect for the following key purposes:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { text: "Create and manage user accounts & profiles", icon: "manage_accounts" },
                  { text: "Provide detailed movie information & ratings", icon: "movie" },
                  { text: "Generate AI-based movie recommendations", icon: "auto_awesome" },
                  { text: "Deliver custom spoiler-controlled summaries", icon: "description" },
                  { text: "Provide location-based listings & local streaming info", icon: "location_on" },
                  { text: "Manage subscriptions and premium feature access", icon: "credit_card" },
                  { text: "Track search and taste history to refine suggestions", icon: "history" },
                  { text: "Prevent fraud, abuse, or unauthorized access", icon: "shield_lock" },
                  { text: "Provide customer support and technical assistance", icon: "contact_support" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                    <span className="material-symbols-outlined text-primary text-lg">{item.icon}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Section 4: Subscription & Premium Policy */}
          <motion.section
            id="subscription-credits"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">4</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#131118] dark:text-white">Subscription & Premium Policy</h2>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Free Trial */}
                <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-8 -mt-8"></div>
                  <div className="flex items-center gap-3 text-primary mb-3">
                    <span className="material-symbols-outlined">stars</span>
                    <h3 className="font-bold text-lg text-[#131118] dark:text-white">3-Day Free Trial</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    Stream Flix provides:
                  </p>
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 text-center">
                    <div className="text-3xl font-black text-primary">3-Day Free Trial</div>
                    <div className="text-xs text-[#6b608a] dark:text-[#a097bd] mt-1">Explore Unlimited Movie Discoveries</div>
                  </div>
                </div>

                {/* Subscription Plans */}
                <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-purple/5 rounded-full -mr-8 -mt-8"></div>
                  <div className="flex items-center gap-3 text-brand-purple mb-3">
                    <span className="material-symbols-outlined">card_membership</span>
                    <h3 className="font-bold text-lg text-[#131118] dark:text-white">Subscription Plans</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    We offer auto-renewable plans:
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-brand-purple/5 border border-brand-purple/10 rounded-xl text-center">
                      <span className="text-sm font-bold text-brand-purple block">Weekly Plan</span>
                    </div>
                    <div className="p-3 bg-brand-purple/5 border border-brand-purple/10 rounded-xl text-center">
                      <span className="text-sm font-bold text-brand-purple block">Monthly Plan</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                    Subscriptions renew automatically unless canceled through App Store or Google Play account settings.
                  </p>
                </div>

              </div>

              {/* Card 2: Feature Access Details */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm space-y-4">
                <div className="flex items-center gap-3 text-brand-blue">
                  <span className="material-symbols-outlined">key</span>
                  <h3 className="font-bold text-lg text-[#131118] dark:text-white">Feature Access Rules</h3>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 space-y-2">
                    <h4 className="font-bold text-sm text-[#131118] dark:text-white">AI-Powered Premium Features</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      AI movie recommendations and selective-spoiler summaries are advanced features. Subscriptions grant users unlimited requests to these AI movie models. Account access levels can be updated directly within the application.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 space-y-2">
                    <h4 className="font-bold text-sm text-[#131118] dark:text-white">Subscription Cancellation</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      Users can cancel their subscription at any time. When canceled, premium access benefits remain valid until the end of the current billing cycle, after which automatic renewal and features cease.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Billing & Renewals */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm space-y-4">
                <div className="flex items-center gap-3 text-yellow-600 dark:text-yellow-500">
                  <span className="material-symbols-outlined">event_repeat</span>
                  <h3 className="font-bold text-lg text-[#131118] dark:text-white">Billing & Renewals</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-yellow-500 text-sm mt-0.5">check_circle</span>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      Payments are processed securely through **Apple App Store** or **Google Play Store**.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-yellow-500 text-sm mt-0.5">check_circle</span>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      Subscriptions renew automatically unless canceled at least **24 hours** before the end of the billing period.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-yellow-500 text-sm mt-0.5">check_circle</span>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      Renewal charges occur within **24 hours** prior to the end of the current subscription period.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-yellow-500 text-sm mt-0.5">check_circle</span>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      Users can manage or cancel subscriptions anytime from their device&apos;s account settings.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </motion.section>

          {/* Section 5: Legal Basis for Processing */}
          <motion.section
            id="legal-basis"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">5</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#131118] dark:text-white">Legal Basis for Processing</h2>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                We process your information in compliance with standard legal guidelines under the following bases:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "User Consent", desc: "Given when enabling device permissions or submitting search requests.", icon: "done_all" },
                  { label: "Contractual Necessity", desc: "Required to deliver movie recommendations & summaries.", icon: "handshake" },
                  { label: "Legitimate Interests", desc: "Improving platform security, performance & recommendations.", icon: "troubleshoot" },
                  { label: "Legal Compliance", desc: "Meeting legal records, audits, or regulatory demands.", icon: "gavel" }
                ].map((basis, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 space-y-2">
                    <span className="material-symbols-outlined text-primary text-xl">{basis.icon}</span>
                    <h4 className="font-bold text-sm text-[#131118] dark:text-white">{basis.label}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{basis.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Section 6: Third-Party Services & Data Processors */}
          <motion.section
            id="third-party"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">6</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#131118] dark:text-white">Third-Party Services & Data Processors</h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-sm">
                  We partner with trusted service providers to run secure processing, database systems, and billing services. These third parties only process data necessary to provide app functionality:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {/* AI Recommendation Engines */}
                  <div className="p-5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-base text-[#131118] dark:text-white">AI Recommendation Engines</h4>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-500/10 text-blue-500">AI Processing</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      Used for movie search analysis, recommendations, and custom summaries. Any data processed through our AI providers (such as OpenAI) is governed by their own privacy policies.
                    </p>
                  </div>

                  {/* Firebase */}
                  <div className="p-5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-base text-[#131118] dark:text-white">Firebase</h4>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-orange-500/10 text-orange-500">Backend / Analytics</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      Used for user authentication, preference tracking, cloud databases, crash reporting, and server infrastructure.
                    </p>
                  </div>

                  {/* RevenueCat & Stores */}
                  <div className="p-5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-base text-[#131118] dark:text-white">RevenueCat / Stores</h4>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-green-500/10 text-green-500">Sub Billing</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      Handles premium subscription lifecycle management, purchase verification, and app store transactions.
                    </p>
                  </div>

                  {/* Cloud Infrastructure */}
                  <div className="p-5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-base text-[#131118] dark:text-white">Cloud Infrastructure</h4>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-purple-500/10 text-purple-500">Hosting</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      Top-tier cloud service providers are utilized to manage secure data hosting, object data storage, and global content delivery.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 7: Disclaimer Regarding Third-Party AI Providers */}
          <motion.section
            id="ai-disclaimer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">7</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#131118] dark:text-white">Disclaimer Regarding Third-Party AI Providers</h2>
            </div>

            <div className="p-6 rounded-2xl bg-amber-500/5 dark:bg-amber-500/5 border border-amber-500/20 shadow-sm space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 text-amber-500/10 pointer-events-none">
                <span className="material-symbols-outlined text-8xl">warning</span>
              </div>
              <div className="flex items-center gap-3 text-amber-600 dark:text-amber-500">
                <span className="material-symbols-outlined text-2xl">info</span>
                <h3 className="font-bold text-lg">Important Association Disclaimer</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Stream Flix is built using advanced AI technologies powered in part by third-party AI service models (such as OpenAI).
                </p>
                <p className="font-semibold text-gray-800 dark:text-gray-200">
                  We are not affiliated with, endorsed by, or officially associated with these third-party AI service providers.
                </p>
                <p>
                  All trademarks, service marks, product names, and company names belong to their respective owners. Any queries processed through third-party services are strictly subject to their own privacy practices and policies.
                </p>
              </div>
            </div>

            {/* AI Recommendation & Summary Details Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <span className="material-symbols-outlined p-2 rounded-xl bg-primary/10">auto_awesome</span>
                <h3 className="font-bold text-lg text-[#131118] dark:text-white">AI Movie Processing Details</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                To provide our AI movie recommendations and customizable summaries, we process search keywords, movie titles, and preferences in partnership with third-party providers under strict privacy guidelines:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 space-y-1">
                  <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Data Sent</span>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Search keywords, movie names, preferred genres, and spoiler setting selections.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 space-y-1">
                  <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Purpose</span>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    To generate personalized recommendations, character breakdowns, and custom summaries.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 space-y-1">
                  <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Shared With</span>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Third-party AI service providers (solely to process and return recommendation suggestions).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 space-y-1">
                  <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">User Consent</span>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Data is processed only when you actively request recommendations or movie summaries.
                  </p>
                </div>

                <div className="col-span-1 md:col-span-2 p-4 rounded-xl bg-primary/5 border border-primary/10 space-y-1">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">security</span> Data Protection
                  </span>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    We do not sell personal data. Our partners process data only for service delivery and are required to follow strict privacy and security standards.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 8: Data Retention */}
          <motion.section
            id="data-retention"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">8</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#131118] dark:text-white">Data Retention</h2>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm space-y-4">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We retain user information only as long as necessary to fulfill the following requirements:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Provide recommendations & reviews",
                  "Maintain active subscriptions",
                  "Comply with legal obligations",
                  "Resolve unexpected disputes",
                  "Prevent platform abuse & fraud"
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-xl flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-500 text-sm">check</span>
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 text-xs text-primary leading-relaxed">
                <strong>Movie search cleanup:</strong> General queries and temporary session choices are deleted from intermediate servers after completion. Saved watchlists and profiles are stored securely in databases and deleted immediately upon request.
              </div>
            </div>
          </motion.section>

          {/* Section 9: International Data Transfers */}
          <motion.section
            id="international-transfers"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">9</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#131118] dark:text-white">International Data Transfers</h2>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm space-y-4">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Your information may be processed and stored in countries outside your local jurisdiction where our third-party infrastructure providers operate (such as securely configured data centers in the United States and globally).
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                We use commercially reasonable safeguards to help protect transferred data, ensuring privacy regulations are strictly adhered to.
              </p>
            </div>
          </motion.section>

          {/* Section 10: User Rights */}
          <motion.section
            id="user-rights"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">10</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#131118] dark:text-white">User Rights</h2>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm space-y-6">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Depending on your geographic region, you may possess the following legal rights regarding your personal information:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Access to Personal Data", desc: "Request details and copy of the personal information stored in our secure database.", icon: "database" },
                  { title: "Correction of Information", desc: "Request updates to correct or complete any outdated/inaccurate data records.", icon: "edit_note" },
                  { title: "Deletion of Account Data", desc: "Request permanent removal of your account, watchlists, location logs, and profile info.", icon: "delete_forever" },
                  { title: "Withdrawal of Consent", desc: "Revoke permissions previously granted (e.g. location or media library permissions).", icon: "cancel" },
                  { title: "Account Termination", desc: "Voluntarily terminate account usage and services at any time.", icon: "no_accounts" },
                ].map((right, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 transition-transform hover:-translate-y-0.5">
                    <span className="material-symbols-outlined text-primary p-2 rounded-lg bg-primary/10 mt-0.5">{right.icon}</span>
                    <div className="space-y-1">
                      <h4 className="font-bold text-sm text-[#131118] dark:text-white">{right.title}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{right.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-500 text-center dark:text-gray-400">
                To initiate any data rights requests, please submit your request to our support email:
                <a className="text-primary font-bold ml-1 hover:underline text-sm" href="mailto:supportappnaya@gmail.com">supportappnaya@gmail.com</a>.
              </p>
            </div>
          </motion.section>

          {/* Section 11: Cookies & Technical Information */}
          <motion.section
            id="cookies-tech"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">11</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#131118] dark:text-white">Cookies & Technical Information</h2>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm space-y-4">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Stream Flix may implement standard technical tracking and performance technologies:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { title: "Essential Sessions", desc: "Maintaining secure login state across page interactions.", icon: "login" },
                  { title: "Device Identifiers", desc: "Recognizing specific device environments safely.", icon: "ad_units" },
                  { title: "Analytics Tools", desc: "Aggregating feature usage for experience tracking.", icon: "insights" },
                  { title: "Performance Diagnostics", desc: "Monitoring connection speed, crashes, and memory leaks.", icon: "query_stats" }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 text-center space-y-2">
                    <span className="material-symbols-outlined text-primary text-xl">{item.icon}</span>
                    <h4 className="font-bold text-xs text-[#131118] dark:text-white">{item.title}</h4>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-normal">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                These core technologies are solely executed to improve service functionality, platform security, and user experience.
              </p>
            </div>
          </motion.section>

          {/* Section 12: Children’s Privacy */}
          <motion.section
            id="childrens-privacy"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">12</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#131118] dark:text-white">Children’s Privacy</h2>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 text-red-500/10 pointer-events-none">
                <span className="material-symbols-outlined text-8xl">child_care</span>
              </div>
              <div className="flex items-center gap-2 text-red-500">
                <span className="material-symbols-outlined">block</span>
                <span className="font-bold text-sm">Age Safeguard Warning</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                Stream Flix is not intended for children under the age of **13**. We do not knowingly collect or request personal information from children.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                If we become aware that we have inadvertently collected information from a child under 13, we will take immediate steps to delete all such data promptly from our secure databases.
              </p>
            </div>
          </motion.section>

          {/* Section 13: Policy Updates */}
          <motion.section
            id="policy-updates"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">13</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#131118] dark:text-white">Policy Updates</h2>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm space-y-4">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We reserve the right to modify, revise, or update this Privacy Policy at any time.
              </p>
              <div className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-xl text-xs text-gray-500 dark:text-gray-400 leading-relaxed space-y-2">
                <p>
                  • Changes become effective **immediately** upon publication within the application or website.
                </p>
                <p>
                  • Continued use of Stream Flix after updates are posted constitutes your explicit acceptance of the revised Privacy Policy.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 14: Contact Information */}
          <motion.section
            id="contact-info"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">14</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#131118] dark:text-white">Contact Information</h2>
            </div>

            <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10 text-center space-y-6 relative overflow-hidden">
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>

              <h4 className="text-xl font-extrabold text-[#131118] dark:text-white">
                Privacy Concerns or Legal Requests?
              </h4>
              <p className="text-sm text-[#6b608a] dark:text-[#a097bd] max-w-lg mx-auto">
                For general privacy concerns, data collection inquiries, legal requests, or account-related inquiries, please contact our support team.
              </p>

              <div className="inline-flex items-center gap-3 px-6 py-4 bg-white dark:bg-[#120F20] border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm">
                <span className="material-symbols-outlined text-primary text-2xl">mail</span>
                <div className="text-left">
                  <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">Email Address</span>
                  <a
                    href="mailto:supportappnaya@gmail.com"
                    className="text-base font-extrabold text-[#131118] dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    supportappnaya@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 15: Acceptance of Policy */}
          <motion.section
            id="acceptance-policy"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">15</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#131118] dark:text-white">Acceptance of Policy</h2>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm space-y-4">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2.5 rounded-xl">assignment_turned_in</span>
                <div className="space-y-2">
                  <h4 className="font-extrabold text-[#131118] dark:text-white text-base">Acknowledgment & Agreement</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    By using **Stream Flix**, you acknowledge that you have read, understood, and agreed to be bound by all guidelines, procedures, and practices detailed in this Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
