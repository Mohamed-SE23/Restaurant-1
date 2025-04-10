import { useState } from "react";
import { navItems, NavType } from "../../data";

const Hamburger = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [active, setActive] = useState<string>("")

  // handle click to set checked value
  const handleClick = (str: string) => {
    setChecked(!checked);
    setActive(str);
  }

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
            className={`${checked ? "absolute top-14 right-6 sm:hidden flex flex-col gap-4 p-6 bg-secondary text-forth shadow-lg rounded-md": "hidden"}`}
          >
            {navItems.map((nav: NavType, i:number) => {
              return <li 
                key={i}
                onClick={() => handleClick(nav.id)}
                className={`text-lg transition-all duration-100 ease-in ${active === nav.id ? 'text-primary': ''}`}>
                  <a href={`#${nav.id}`}>
                   {nav.title}
                  </a>
            </li>
          })}
          </ul>
      </label>
  );
}

export default Hamburger;
