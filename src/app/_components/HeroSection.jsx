'use client';

import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import framer-motion

const HeroSection = () => {
  const heroData = {
    title: 'Timeless Style, Crafted for You',
    description: 'Discover the elegance and precision of our latest collection. Designed to complement every moment.',
    image: '/images/watch.jpg',
  };

  return (
    <section className="w-full px-6 py-16 bg-white flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">
      
      {/* Left: Text Content */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Subtitle */}
        <motion.p
          className="text-sm uppercase tracking-widest text-[#ffbd59] font-semibold mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          New Arrival
        </motion.p>

        {/* Main Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-[#ffbd59]">Luxury</span> Meets Precision
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-gray-500 text-base md:text-lg mb-6 max-w-lg mx-auto md:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {heroData.description}
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="inline-flex items-center gap-3 bg-[#ffbd59] text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-[#e0a847] hover:scale-105 transition-all"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <FaShoppingCart className="text-lg" />
          Add to Cart
        </motion.button>
      </motion.div>

      {/* Right: Watch Image in Card */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="w-80 h-96 rounded-2xl bg-[#ffbd59] flex items-center justify-center shadow-lg overflow-hidden">
          <Image
            src={heroData.image}
            alt="Watch"
            width={240}
            height={240}
            className="object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
