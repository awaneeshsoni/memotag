"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-transparent fixed top-0 left-0 w-full z-50  ">
            <div className="  container mx-auto py-4 px-6 flex items-center justify-between bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-20 rounded-xl shadow-lg">
                
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/memotag-logo.svg" 
                        alt="Company Logo"
                        width={100}
                        height={100}
                        className=""
                    />
                </Link>

                
                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="text-gray-700 hover:text-gray-900">
                        Home
                    </Link>
                    <Link href="/about" className="text-gray-700 hover:text-gray-900">
                        About
                    </Link>
                    <Link href="/services" className="text-gray-700 hover:text-gray-900">
                        Services
                    </Link>
                    <Link href="/contact" className="text-gray-700 hover:text-gray-900">
                        Contact
                    </Link>
                    
                </div>

                
                <button onClick={toggleMenu} className="md:hidden text-gray-700 focus:outline-none">
                    <FontAwesomeIcon icon={faBars} size="lg" />
                </button>

                
                <div
                    className={`md:hidden absolute top-full left-0 w-full bg-white bg-opacity-90 backdrop-blur-md py-4 px-6 ${
                        isOpen ? 'block' : 'hidden'
                    }`}
                >
                    <div className="flex flex-col space-y-4">
                        <Link href="/" className="text-black hover:text-gray-900 block">
                            Home
                        </Link>
                        <Link href="/blog" className="text-black hover:text-gray-900 block">
                            Blog
                        </Link>
                        <Link href="/about" className="text-black hover:text-gray-900 block">
                            About
                        </Link>
                        <Link href="/contactus" className="text-black hover:text-gray-900 block">
                            Contact Us
                        </Link>
                        
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;