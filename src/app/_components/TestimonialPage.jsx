'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import framer-motion
import testimonials from '@/data/testimonialData'; // Import data

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const { name, role, image, quote } = testimonials[current];

  return (
    <section className="bg-white py-20 px-6 md:px-12 relative">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        What Our Customers Say
      </h2>

      <motion.div
        className="max-w-xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md text-center relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* User Image */}
        <div className="w-20 h-20 mx-auto mb-4 relative rounded-full overflow-hidden">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        {/* Name & Role */}
        <motion.h3
          className="text-lg font-semibold text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {name}
        </motion.h3>
        <motion.p
          className="text-sm text-gray-500 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {role}
        </motion.p>

        {/* Quote */}
        <motion.p
          className="text-gray-600 italic leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          “{quote}”
        </motion.p>

        {/* Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 pl-4">
          <motion.button
            onClick={prev}
            className="bg-[#ffbd59] p-2 rounded-full text-white hover:bg-[#e6a84c] transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowLeft />
          </motion.button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 pr-4">
          <motion.button
            onClick={next}
            className="bg-[#ffbd59] p-2 rounded-full text-white hover:bg-[#e6a84c] transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowRight />
          </motion.button>
        </div>
      </motion.div>

      {/* Dots (optional for mobile navigation) */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <motion.span
            key={index}
            className={`w-2.5 h-2.5 rounded-full ${
              index === current ? 'bg-[#ffbd59]' : 'bg-gray-300'
            } cursor-pointer`} // Merged className values
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => setCurrent(index)} // Allow users to click on dots to navigate
          ></motion.span>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSlider;
