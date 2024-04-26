"use client";
// components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";
import homeIcon from "../../public/assets/icons/home-icon.svg";
import homeDarkIcon from "../../public/assets/icons/home-icon-dark.svg";
import emailIcon from "../../public/assets/icons/email-icon.svg";
import emailDarkIcon from "../../public/assets/icons/email-icon-dark.svg";
import menuIcon from "../../public/assets/icons/menu-icon.svg";
import menuDarkIcon from "../../public/assets/icons/menu-icon-dark.svg";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getBgColor } from "@/utils/getBgColor.util";
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { Menu } from '@/components/Menu'


// navbarIcons - it's is silly quick solution to support two variations of mobile icons,
// in the future the proper svg Icon component should be designed

type NavbarIcons = {
  menu: StaticImport;
  home: StaticImport;
  email: StaticImport
}

// workaround solution to support dynamic values
const navbarOptions = ["bg-green-50", "bg-gold-100", "bg-black", "bg-contact"];
const Navbar: React.FC = () => {
  const pathname = usePathname();
  const isNotHome = pathname !== "/";
  const [icons, setIcons] = useState<NavbarIcons>({menu: menuIcon, home: homeIcon, email: emailIcon});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is more than 100vh
      const position = window.scrollY;
      const screenHeight = window.innerHeight;
      setIsScrolled(position > screenHeight);
      setIsMenuOpen(false);
    };
    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIcons(prev => ({
      menu: isNotHome
        ? isMenuOpen
          ? menuIcon
          : menuDarkIcon
        : isMenuOpen
          ? menuDarkIcon
          : menuIcon, // TODO clean it up
      home: isNotHome ? homeDarkIcon : homeIcon,
      email: isNotHome ? emailDarkIcon : emailIcon,
    }))
  }, [isNotHome, isMenuOpen]);

  const navbarClasses = `base-navbar-styles fixed top-0 z-50 w-full px-8 ${isNotHome ? `text-black ${getBgColor(pathname)}` : "text-white"} ${isScrolled ? "slide-up" : "slide-down"}`;

  return (
    <nav className={navbarClasses}>
      <div
        className={`mx-auto flex items-center max-w-6xl justify-center text-2xl ${isNotHome ? "text-black" : "text-white"}`}
      >
        <div
          className={`hidden w-full max-w-6xl items-center justify-between sm:flex`}
        >
          <Link
            className={`my-6 border-b-2 border-transparent py-1 ${isNotHome ? "hover:border-black" : "hover:border-white"}`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`my-6 border-b-2 border-transparent py-1 ${isNotHome ? "hover:border-black" : "hover:border-white"}`}
            href="/offer"
          >
            Offer
          </Link>
          <Link
            className={`my-6 border-b-2 border-transparent py-1 ${isNotHome ? "hover:border-black" : "hover:border-white"}`}
            href="/about"
          >
            About Us
          </Link>
          <Link
            className={`my-6 border-b-2 border-transparent py-1 ${isNotHome ? "hover:border-black" : "hover:border-white"}`}
            href="/gallery"
          >
            {" "}
            Gallery
          </Link>
          <Link
            className={`my-6 border-b-2 border-transparent py-1 ${isNotHome ? "hover:border-black" : "hover:border-white"}`}
            href="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="flex w-full items-center justify-between sm:hidden">
          <Link className="py-6 hover:underline" href="/">
            <Image
              priority
              src={icons.home}
              height={48}
              width={48}
              alt={"Home page"}
            ></Image>
          </Link>
          <Image
            className={"py-6"}
            onClick={() => setIsMenuOpen(prev => !prev)}
            priority
            height={48}
            width={48}
            src={icons.menu}
            alt={"Site Navigation"}
          ></Image>
          <Link className="py-6 hover:underline" href="/contact">
            <Image
              priority
              height={48}
              width={48}
              src={icons.email}
              alt={"Contact Us"}
            ></Image>
          </Link>
          {isMenuOpen && <Menu bgColor={getBgColor(pathname)} isScrolledUp={isScrolled} onClose={() => setIsMenuOpen(false)}></Menu>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
