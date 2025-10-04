'use client';

import { motion } from 'framer-motion'; // Import framer-motion
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section className="px-6 py-20 bg-white flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
      {/* Left Side */}
      <motion.div
        className="relative w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Yellow background square */}
        <div className="w-64 h-64 bg-[#ffbd59] rounded-lg" />
        
        {/* Overlapping black card */}
        <motion.div
          className="absolute top-6 left-6 w-64 h-64 bg-black rounded-lg flex items-center justify-center shadow-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
        >
          <Image
            src="/images/watch.jpg"
            alt="Watch"
            width={180}
            height={180}
            className="object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm font-semibold text-[#ffbd59] uppercase mb-2">Our Story</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Built on Tradition, Crafted with Passion
        </h2>
        <p className="text-gray-600 mb-6">
          Since the beginning, we've blended timeless design with modern craftsmanship to create watches that stand the test of time. Every detail reflects our commitment to excellence and elegance.
        </p>
        <Link href="/about">
          <motion.button
            className="bg-[#ffbd59] text-white px-6 py-3 rounded-md font-medium hover:scale-105 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default About;
