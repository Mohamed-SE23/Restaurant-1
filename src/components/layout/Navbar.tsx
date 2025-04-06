import { Link } from "react-router-dom";
import { logo } from "../../assets";
import Hamburger from "../items/Hamburger";
import NavItems from "../items/NavItems";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed inset-0 w-full px-6 sm:px-10 md:px-16 h-20 flex items-center justify-between gap-4 transition-all duration-300 ${scrolled ? 'bg-secondary' : ''} z-50`}>
      <Link to={'#home'}>
        <img src={logo} alt="logo" className="w-22 h-22 cursor-pointer" />
      </Link>
      <div className="text-forth">
        <NavItems />
        <Hamburger />
      </div>
    </nav>
  )
}

export default Navbar;
