import heroImg from "../assets/about_me.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { motion } from "motion/react"; // Corrigé l'import
import Typewriter from "typewriter-effect";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-transparent via-[#FFE7C5] to-transparent py-24">
      <div className="mx-auto px-4 sm:max-w-7xl grid nd:grid-cols-2 items-center gap-8">
        <article>
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-7xl font-bold tracking-wider dark:text-white"
          >
            I'm Vanelle Yimdjo
          </motion.h1>
          <motion.div
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="mt-4 text-3xl text-slate-700 capitalize tracking-wide dark:text-white"
          >
            <Typewriter
              options={{
                strings: ["Front-End Developer"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </motion.div>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="mt-2 text-lg text-slate-700 capitalize"
          >
            Welcome to my personal website, here you will have all the necessary
            information about me, my work. Constantly focused on learning and
            expanding my expertise, crafting ever-improving, high-performing
            solutions.
          </motion.p>
          <motion.div
            variants={container(1.3)}
            initial="hidden"
            animate="visible"
            className="flex gap-x-4 mt-4"
          >
            <a href="https://github.com/vanelleyimdjo">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300 dark:text-white" />
            </a>
            <a href="https://www.linkedin.com/in/vanelle-yimdjo-673220149/">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300 dark:text-white" />
            </a>
            <a href="">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300 dark:text-white" />
            </a>
          </motion.div>
        </article>
        <article className="hidden md:block">
          <motion.img
            variants={container(2)}
            initial="hidden"
            animate="visible"
            src={heroImg}
            className="h-80 lg:h-96"
          />
        </article>
      </div>
    </div>
  );
};
