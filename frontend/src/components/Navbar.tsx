import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/">
                <a className="flex items-center py-4">
                  <Image src="/logo.png" alt="Logo" width={40} height={40} />
                  <span className="font-semibold text-gray-500 text-lg ml-2">MonSite</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/connexion">
              <a className="py-2 px-4  bg-blue-500 hover:bg-blue-600 text-white rounded transition duration-300">Connexion</a>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6 text-gray-500 hover:text-blue-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen
                  ? <path d="M6 18L18 6M6 6l12 12" />
                  : <path d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <Link href="/connexion">
          <a className="block py-2 px-4 text-sm hover:bg-gray-200">Connexion</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
