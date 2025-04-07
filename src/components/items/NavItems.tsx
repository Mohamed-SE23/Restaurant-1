import { navItems, NavType } from "../../data";
import { useState } from "react";

const NavItems = () => {
    const [active, setActive] = useState<string>("home");

  return (
    <ul className="hidden sm:flex sm:items-center sm:gap-4">
      {navItems.map((nav: NavType, i:number) => {
        return <li 
            key={i}
            onClick={() => setActive(nav.id)}
            className={`text-lg transition duration-300 ease-in ${active === nav.id ? 'text-primary': ''}`}>
                <a href={`#${nav.id}`}>
                 {nav.title}
                </a>
        </li>
      })}
    </ul>
  )
}

export default NavItems;
