// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="text-white text-2xl font-bold">MyLogo</p>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
            Home
          </Link>
          <Link href="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
            About
          </Link>
          <Link href="/services" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
            Services
          </Link>
          <Link href="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
