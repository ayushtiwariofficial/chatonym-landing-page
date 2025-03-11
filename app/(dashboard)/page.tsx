"use client";

import { useState, useEffect } from "react";
import { FaTwitter, FaLinkedin, FaDiscord, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [queryName, setQueryName] = useState("");
  const [queryEmail, setQueryEmail] = useState("");
  const [queryMessage, setQueryMessage] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // ✅ Ensures animations run only after hydration
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`You're on the waitlist! Stay tuned, ${email}`);
  };

  const handleQuerySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Thanks for your feedback, ${queryName}! We'll reach out at ${queryEmail}`
    );
  };

  return (
    <div className="min-h-screen text-white font-inter">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white bg-opacity-90 shadow-lg backdrop-blur-lg py-4 px-8 flex justify-between items-center z-50">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-wide">
          Chatonym
        </h1>
        <nav>
          <ul className="flex space-x-6 font-medium text-gray-800">
            <li>
              <a href="#features" className="hover:text-blue-500 transition">
                Features
              </a>
            </li>
            <li>
              <a
                href="#early-access"
                className="hover:text-blue-500 transition"
              >
                Early Access
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-blue-500 transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="#query" className="hover:text-blue-500 transition">
                Feedback
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 md:px-20 py-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
        {/* Left Side - Text & CTA */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Talk Freely, Stay Anonymous.
          </motion.h1>

          <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed">
            Chatonym lets you connect with strangers worldwide in a secure &
            anonymous environment. No sign-ups. No tracking. Just pure
            conversations.
          </p>

          {/* CTA - Email Capture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="mt-6 w-full md:w-96 mx-auto md:mx-0"
          >
            <Card className="bg-white p-6 shadow-xl rounded-lg">
              <CardContent>
                <h2 className="text-2xl font-bold text-gray-800 text-center">
                  🚀 Join the Early Access List
                </h2>
                <p className="text-gray-600 text-center text-sm">
                  First 100 users unlock all premium features for free!
                </p>
                <form onSubmit={handleEmailSubmit} className="space-y-4 mt-4">
                  <ModernInput
                    type="email"
                    value={email}
                    onChange={setEmail}
                    placeholder="Enter your email"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-lg font-semibold py-3"
                  >
                    Join Waitlist Now
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Right Side - Illustration */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.img
            src="/hero_illustration.png"
            alt="Anonymous Chat Illustration"
            className="w-full max-w-lg"
            initial={{ opacity: 0, x: 80 }} // Start off-screen to the right
            animate={{ opacity: 1, x: 0 }} // Move to actual position
            transition={{ duration: 1.2, ease: "easeOut" }} // Smooth easing
            whileInView={
              typeof window !== "undefined"
                ? {
                    y: [0, -10, 0], // Bounce effect (up and down)
                    transition: {
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                    },
                  }
                : {}
            }
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-100 text-gray-900"
      >
        <h2 className="text-4xl font-extrabold">Why Chatonym?</h2>
        <p className="text-lg max-w-2xl text-gray-700 mt-4">
          A next-gen platform where you can talk without fear, share your
          thoughts freely, and **connect beyond limits.**
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <FeatureCard
            title="🕶️ True Anonymity"
            description="No sign-ups. No data tracking. Just chat."
          />
          <FeatureCard
            title="💡 Smart Matching"
            description="Connect instantly with people who share your interests."
          />
          <FeatureCard
            title="🌎 Global Access"
            description="Meet people from across the world in real time."
          />
          <FeatureCard
            title="🔒 Secure & Private"
            description="End-to-end encryption ensures complete privacy."
          />
        </div>
      </section>

      {/* Early Access Section */}
      <section
        id="early-access"
        className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-purple-600 to-blue-500"
      >
        <h2 className="text-5xl font-bold">
          🔥 First 100 Users Get Premium for FREE!
        </h2>
        <p className="text-lg mt-4 max-w-2xl">
          Be part of the **exclusive early access** and enjoy premium features
          **forever**.
        </p>
      </section>

      {/* Query/Suggestion Form */}
      <section
        id="query"
        className="min-h-screen flex flex-col items-center justify-center text-center bg-white text-gray-900"
      >
        <h2 className="text-4xl font-bold">💬 Have Suggestions? Tell Us!</h2>
        <p className="text-lg mt-2 max-w-xl text-gray-700">
          Your thoughts matter. Help shape Chatonym with your ideas!
        </p>
        <form
          onSubmit={handleQuerySubmit}
          className="space-y-4 mt-6 max-w-md w-full"
        >
          <ModernInput
            type="text"
            value={queryName}
            onChange={setQueryName}
            placeholder="Your Name"
          />
          <ModernInput
            type="email"
            value={queryEmail}
            onChange={setQueryEmail}
            placeholder="Your Email"
          />
          <ModernInput
            type="text"
            value={queryMessage}
            onChange={setQueryMessage}
            placeholder="Share your thoughts"
          />
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500"
          >
            Submit Feedback
          </Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Chatonym. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4 text-xl text-gray-400">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaDiscord />
          </a>
          <a
            href="mailto:contact@chatonym.com"
            className="hover:text-white transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </footer>
    </div>
  );
}

// Reusable Components
function ModernInput({ type, value, onChange, placeholder }) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full p-4 border-2 border-gray-300 rounded-md text-black shadow-lg focus:ring-2 focus:ring-blue-500 transition"
      required
    />
  );
}

// Feature Card Component (Fix for missing reference)
function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg w-64"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </motion.div>
  );
}
