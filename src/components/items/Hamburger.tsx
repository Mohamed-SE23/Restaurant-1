import { useState } from "react";
import { NavLink, navLinks } from "../../data";
import { Link } from "react-router-dom";

const Hamburger = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [active, setActive] = useState<string>("")

  return (
      <label>
        <div
          className="w-9 h-10 sm:hidden cursor-pointer flex flex-col items-center justify-center"
        >
          <input 
                className="hidden peer" 
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)} />
          <div
            className="w-[50%] h-[2px] bg-forth rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"
          ></div>
          <div
            className="w-[50%] h-[2px] bg-forth rounded-md transition-all duration-300 origin-center peer-checked:hidden"
          ></div>
          <div
            className="w-[50%] h-[2px] bg-forth rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"
          ></div>
        </div>
          <ul
            className={`${checked ? "absolute top-14 right-6 sm:right-8 flex flex-col gap-4 p-6 bg-secondary text-forth shadow-lg rounded-md": "hidden"}`}
          >
            {navLinks.map((nav: NavLink, i:number) => {
              return <li 
                key={i}
                onClick={() => setActive(nav.id)}
                className={`text-lg transition-all duration-100 ease-in ${active === nav.id ? 'text-primary border-b-2 border-primary': ''}`}>
                    <Link to={`#${nav.id}`}>
                    {nav.title}
                    </Link>
            </li>
          })}
          </ul>
      </label>
  );
}

export default Hamburger;
