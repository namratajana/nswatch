'use client';

import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import productData from '@/data/productdata';
import { motion } from 'framer-motion'; // Import framer-motion

const ProductsSection = () => {
  return (
    <section className="px-6 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Our Products</h2>

      {/* Flex container with wrapping */}
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {productData.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative bg-white hover:shadow-xl transition-all duration-300 w-[220px] h-[340px] rounded-lg overflow-hidden group"
          >
            {/* Image */}
            <div className="w-full h-2/3 bg-gray-100 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                width={180}
                height={180}
                className="object-contain"
              />
            </div>

            {/* Name & Price */}
            <div className="flex flex-col items-center justify-center text-center py-4 h-1/3">
              <h3 className="text-base font-semibold text-gray-800 mb-1">{product.name}</h3>
              <p className="text-sm font-medium text-[#ffbd59]">₹{product.price.toLocaleString()}</p>
            </div>

            {/* Bag Icon */}
            <div className="absolute bottom-3 right-3">
              <motion.button
                className="bg-[#ffbd59] p-2 rounded-full text-white transition-all duration-300 hover:scale-110 hover:shadow-md hover:bg-[#e6a84c]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Add to Cart"
              >
                <FaShoppingCart size={16} />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
