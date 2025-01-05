import aboutSvg from "../assets/undraw_apps_i78y.svg";
import { SectionTitle } from "./SectionTitle";

export const About = () => {
  return (
    <section class=" py-20  mx-auto px-4 sm:max-w-7xl" id="about">
      <div class="align-element grid  md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <div className="dark:text-[#FF7F0B]">
            <SectionTitle text="About me" />
          </div>
          <p className="text-slate-600 mt-8 leading-loose text-justify dark:text-white">
            Hi there! 👋 I'm , passionate front-end developer with a keen eye
            for design and a love for crafting intuitive, user-friendly
            interfaces. My journey into coding began with a curiosity about how
            websites work and has evolved into a career dedicated to bringing
            creative ideas to life on the web. With expertise in HTML, CSS,
            JavaScript, and modern frameworks like React (or insert relevant
            framework), I specialize in building responsive and accessible web
            applications that perform seamlessly across devices. I take pride in
            writing clean, maintainable code and collaborating with designers,
            developers, and stakeholders to create digital experiences that make
            a lasting impression. When I'm not coding, you’ll find me exploring
            the latest design trends, learning new technologies, or contributing
            to open-source projects. I’m always excited to tackle new challenges
            and push the boundaries of what’s possible on the web. Let’s build
            something amazing together!
          </p>
        </article>
      </div>
    </section>
  );
};
