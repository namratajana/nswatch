'use client';

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import framer-motion

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 px-6">
        
        {/* Our Information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-4">Our Information</h3>
          <p className="text-gray-400">123 Watch Street, City, Country</p>
        </motion.div>

        {/* About Us */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <ul className="space-y-2">
            <li><a href="/support-center" className="text-gray-400 hover:text-[#ffbd59]">Support Center</a></li>
            <li><a href="/customer-support" className="text-gray-400 hover:text-[#ffbd59]">Customer Support</a></li>
            <li><a href="/about-us" className="text-gray-400 hover:text-[#ffbd59]">About Us</a></li>
            <li><span className="text-gray-400">© 2025 WatchStore</span></li>
          </ul>
        </motion.div>

        {/* Product */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-4">Product</h3>
          <ul className="space-y-2">
            <li><a href="/watches/men" className="text-gray-400 hover:text-[#ffbd59]">Men's Watches</a></li>
            <li><a href="/watches/women" className="text-gray-400 hover:text-[#ffbd59]">Women's Watches</a></li>
            <li><a href="/watches/smart" className="text-gray-400 hover:text-[#ffbd59]">Smart Watches</a></li>
            <li><a href="/watches/accessories" className="text-gray-400 hover:text-[#ffbd59]">Accessories</a></li>
          </ul>
        </motion.div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="https://facebook.com" className="text-gray-400 hover:text-[#ffbd59]">
              <FaFacebookF size={20} />
            </a>
            <a href="https://x.com" className="text-gray-400 hover:text-[#ffbd59]">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-[#ffbd59]">
              <FaInstagram size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section (Optional) */}
      <motion.div
        className="text-center text-gray-400 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <p>&copy; 2025 Weyra. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
