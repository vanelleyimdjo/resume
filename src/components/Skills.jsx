import SkillsCard from "./SkillsCard";
import { skills } from "../data";
import { SectionTitle } from "./SectionTitle";

export const Skills = () => {
  return (
    <section
      className="py-20 align-element mx-auto px-4 sm:max-w-7xl"
      id="skills"
    >
      <div className="dark:text-[#FF7F0B]">
        <SectionTitle text="tech stack " />
      </div>

      <div class=" py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
