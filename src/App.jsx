import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

const App = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme["dark"];
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className=" dark:bg-slate-950">
      <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
