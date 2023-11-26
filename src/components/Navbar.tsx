// components/Navbar.tsx
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 z-50 backdrop-blur-lg shadow w-full px-8 ">
      <div className="flex items-center justify-center text-2xl text-white">
        <div className="hidden sm:flex items-center justify-between max-w-6xl w-full">
          <Link className="py-6 hover:underline" href="/">
            Home
          </Link>
          <Link className="py-6 hover:underline" href="/offer">
            Offer
          </Link>
          <Link className="py-6 hover:underline" href="/about">
            About Us
          </Link>
          <Link className="py-6 hover:underline" href="/gallery"> Gallery
          </Link>
          <Link className="py-6 hover:underline" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;