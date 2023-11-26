// components/Navbar.tsx
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-green-500">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div className="hidden md:flex items-center space-x-1">
              <Link className="py-5 px-3 text-gray-700 hover:text-gray-900" href="/">
                Home
              </Link>
              <Link className="py-5 px-3 text-gray-700 hover:text-gray-900" href="/offer">
                Offer
              </Link>
              <Link className="py-5 px-3 text-gray-700 hover:text-gray-900" href="/about">
                About Us
              </Link>
              <Link className="py-5 px-3 text-gray-700 hover:text-gray-900" href="/gallery"> Gallery
              </Link>
              <Link className="py-5 px-3 text-gray-700 hover:text-gray-900" href="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;