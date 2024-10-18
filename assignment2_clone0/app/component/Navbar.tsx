"use client"
import { useState } from 'react';
import Image from 'next/image';
import Logo from '@/public/download.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-blue-900">
            <nav className="container mx-auto flex justify-between items-center h-16 px-4 lg:px-8">
                {/* Logo and Title */}
                <div className="flex items-center">
                    <Image src={Logo} alt="logo" height={80} width={80} className="ml-4" />
                    <h1 className="text-blue-300 ml-4 lg:ml-8 font-bold text-lg lg:text-2xl">
                        Tution Free Educational Program on Latest Technologies
                    </h1>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="space-y-1.5">
                    
                        <div className="w-6 h-0.5 bg-white"></div>
                        <div className="w-6 h-0.5 bg-white"></div>
                        <div className="w-6 h-0.5 bg-white"></div>
                    </button>
                </div>

                {/* Navigation Links */}
                <ul className={`lg:flex space-x-8 text-white items-center ${isOpen ? 'block' : 'hidden'} lg:block mt-4 lg:mt-0`}>
                    <li>Home</li>
                    <li>Apply</li>
                    <li>Jobs</li>
                    <li>Result</li>
                    <li>
                        <select id="Course" name="Course" className="bg-blue-900 text-white border-none">
                            <option value="Course">Course</option>
                        </select>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
