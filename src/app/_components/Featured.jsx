'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import featuredWatches from '@/data/featuredData';
import { useState } from 'react';

const Featured = () => {
  const visibleWatches = featuredWatches.slice(0, 3); // Only show 3

  return (
    <section className="px-6 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Featured Watches</h2>

      <div className="flex justify-center gap-12 flex-wrap max-w-6xl mx-auto">
        {visibleWatches.map((watch) => (
          <Link
            href={`/product/${watch.id}`}
            key={watch.id}
            className="group bg-white hover:shadow-xl transform transition-all duration-300 hover:scale-105 w-[220px] overflow-hidden relative"
          >
            {/* Image Section */}
            <div className="w-full h-72 bg-gray-100 flex items-center justify-center">
              <Image
                src={watch.image}
                alt={watch.name}
                width={180}
                height={180}
                className="object-contain"
              />
            </div>

            {/* Info Section */}
            <div className="flex flex-col items-center justify-center text-center p-4">
              <h3 className="text-base font-semibold text-gray-800 mb-1">{watch.name}</h3>
              <p className="text-sm font-medium text-[#ffbd59]">₹{watch.price.toLocaleString()}</p>
            </div>

            {/* Expandable button area */}
            <div className="h-0 group-hover:h-14 transition-all duration-300 overflow-hidden">
              <div className="flex justify-center items-center bg-white bg-opacity-70 h-full">
                <button className="bg-[#ffbd59] text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm font-semibold hover:scale-105 transition">
                  Add to Cart
                  <FaShoppingCart />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Featured;
