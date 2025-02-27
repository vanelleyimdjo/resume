import ProjectsCard from "./ProjectCard";
import { projects } from "../data";
import { SectionTitle } from "./SectionTitle";

export const Projects = () => {
  return (
    <section
      className="py-20 align-element mx-auto px-4 sm:max-w-7xl"
      id="projects"
    >
      <div className="dark:text-[#FF7F0B]">
        <SectionTitle text="web creations " />
      </div>
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
