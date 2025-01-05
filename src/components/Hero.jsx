import heroImg from "../assets/about_me.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

export const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-transparent via-[#FFE7C5] to-transparent  py-24">
      <div className="mx-auto px-4 sm:max-w-7xl grid nd:grid-cols-2 items-center gap-8">
        {" "}
        <article>
          <h1 className="text-7xl font-bold tracking-wider dark:text-white">
            {" "}
            I'm Vanelle Yimdjo
          </h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide dark:text-white">
            {" "}
            Front-End Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize">
            Welcome to my personal website, here you will have all the necessary
            information about me, my work. Constantly focused on learning and
            expanding my expertise, crafting ever-improving, high-performing
            solutions.
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/vanelleyimdjo">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300 dark:text-white" />
            </a>
            <a href="https://www.linkedin.com/in/vanelle-yimdjo-673220149/">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300 dark:text-white" />
            </a>
            <a href="">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300 dark:text-white" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96"></img>
        </article>
      </div>
    </div>
  );
};
