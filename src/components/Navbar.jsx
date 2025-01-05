import { links } from "../data";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export const Navbar = ({ handleThemeSwitch, theme }) => {
  return (
    <nav className="">
      <div className="mx-auto px-4 sm:max-w-7xl py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold dark:text-white">
          Va<span className="text-[#FF7F0B]">YimD</span>
        </h2>
        <div className="flex gap-x-3 dark:text-white">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-[#FF7F0B] duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
        <button onClick={handleThemeSwitch} className="">
          {theme === "dark" ? (
            <BsFillMoonFill className="dark: text-white" />
          ) : (
            <BsFillSunFill />
          )}
        </button>
      </div>
    </nav>
  );
};
