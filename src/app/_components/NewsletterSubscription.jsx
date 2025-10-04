'use client';

import { useState } from 'react';
import { motion } from 'framer-motion'; // Import framer-motion

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Handle email submission logic here
    }
  };

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between">
        
        {/* Left side: Heading and Paragraph */}
        <motion.div
          className="text-center md:text-left mb-8 md:mb-0 md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600">Stay updated with the latest news, offers, and more!</p>
        </motion.div>

        {/* Right side: Email Input and Subscribe Button */}
        <div className="flex flex-col items-center md:items-end w-full md:w-1/2">
          {/* Success Message */}
          {submitted ? (
            <motion.div
              className="text-green-500 mb-4 text-center md:text-left"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-semibold">Thank you for subscribing!</h3>
              <p>We'll keep you updated with the latest news.</p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="w-full md:w-3/4 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Input Field and Button */}
              <motion.input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="p-3 rounded-l-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#ffbd59] focus:border-[#ffbd59] w-full h-[48px]"
                required
                whileFocus={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <motion.button
                type="submit"
                className="bg-[#ffbd59] text-white p-3 rounded-r-md font-semibold hover:bg-[#e6a84c] transition-all duration-300 h-[48px]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Subscribe
              </motion.button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;
