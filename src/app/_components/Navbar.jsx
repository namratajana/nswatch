'use client';

import Image from 'next/image';
import Link from 'next/link';
import {FiShoppingCart, FiMenu, FiX} from 'react-icons/fi';
import {useState} from 'react';
import {motion} from 'framer-motion'; // Import framer-motion

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        {name: 'Home', href: '/'},
        {name: 'Featured', href: '#featured'},
        {name: 'Products', href: '#products'},
    ];

    return (
        <nav className="w-full px-6 py-4 bg-white shadow-md flex items-center justify-between sticky z-50 top-0">
            {/* Left: Logo + Brand */}
            <div className="flex items-center gap-2">
                <Image src="/wristiq-removebg-preview.png" alt="Logo" width={40} height={40}/>
                <span className="text-xl font-semibold text-gray-800">Weyra</span>
            </div>

            {/* Center: Desktop Navigation */}
            <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
                {navLinks.map((link) => (
                    <motion.li
                        key={link.name}
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.1 * navLinks.indexOf(link)}}
                    >
                        <Link href={link.href} className="relative group transition transform hover:scale-105">
                            <span className="hover:text-[#ffbd59]">{link.name}</span>
                            <span
                                className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#ffbd59] group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </motion.li>
                ))}
            </ul>

            {/* Right: Cart and Hamburger Menu (grouped for mobile) */}
            <div className="flex items-center gap-4 md:gap-6">
                {/* Cart Button with Y-Axis Flip Animation */}
                <Link href="/cart">
                    <button
                        className="text-gray-700 hover:text-[#ffbd59] transform transition duration-300 hover:[transform:rotateY(180deg)]"
                        style={{transformStyle: 'preserve-3d'}}
                        aria-label="Cart"
                    >
                        <FiShoppingCart size={24}/>
                    </button>
                </Link>

                {/* Hamburger Toggle for Mobile */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-gray-700 hover:text-[#ffbd59] transition"
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <FiX size={26}/> : <FiMenu size={26}/>}
                </button>
            </div>

            {/* Mobile Drawer with Animation */}
            {menuOpen && (
                <motion.div
                    className="absolute top-[100%] left-0 w-full bg-white shadow-md py-4 px-6 flex flex-col gap-4 md:hidden"
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.3}}
                >
                    {navLinks.map((link) => (
                        <motion.div
                            key={link.name}
                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.3, delay: 0.1 * navLinks.indexOf(link)}}
                        >
                            <Link
                                href={link.href}
                                className="text-gray-700 hover:text-[#ffbd59] text-lg transition"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
