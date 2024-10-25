import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-black text-white w-full">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        <div className="flex-shrink-0">
          <Image
            src="https://wsa1.pakwheels.com/assets/new-pw-logo-white-c4cd16ae34613cc1fa16d7840f34a71e.svg"
            alt="Logo"
            height={50}
            width={150}
            className="object-contain"
          />
        </div>
        <nav className="hidden lg:flex flex-1 justify-center space-x-6 text-lg">
          <Link href={"/"} className="hover:text-red-500">Used Cars▼</Link>
          <Link href={"/"} className="hover:text-red-500">New Cars▼</Link>
          <Link href={"/"} className="hover:text-red-500">Bikes▼</Link>
          <Link href={"/"} className="hover:text-red-500">Auto Store▼</Link>
          <Link href={"/"} className="hover:text-red-500">Home</Link>
          <Link href={"/"} className="hover:text-red-500">Forums</Link>
          <Link href={"/"} className="hover:text-red-500">Blog</Link>
          <Link href={"/"} className="hover:text-red-500">More▼</Link>
        </nav>

        <div className="hidden lg:block">
          <button className="bg-red-700 px-6 py-2 text-lg font-bold rounded-md hover:bg-red-600 transition">
            Post an Ad▼
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden w-full mt-4">
          <nav className="flex flex-wrap justify-center space-x-4 text-sm">
            <Link href={"/"} className="hover:text-red-500">Used Cars▼</Link>
            <Link href={"/"} className="hover:text-red-500">New Cars▼</Link>
            <Link href={"/"} className="hover:text-red-500">Bikes▼</Link>
            <Link href={"/"} className="hover:text-red-500">Auto Store▼</Link>
            <Link href={"/"} className="hover:text-red-500">Home</Link>
            <Link href={"/"} className="hover:text-red-500">Forums</Link>
            <Link href={"/"} className="hover:text-red-500">Blog</Link>
            <Link href={"/"} className="hover:text-red-500">More▼</Link>
          </nav>
          <div className="mt-4 text-center">
            <button className="bg-red-700 px-6 py-2 text-lg font-bold rounded-md hover:bg-red-600 transition">
              Post an Ad▼
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
