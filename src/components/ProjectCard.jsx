import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "motion/react";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

const ProjectCard = ({ url, img, github, title, text }) => {
  return (
    <motion.article
      className="bg-gradient-to-r from-gray-50 via-white to-gray-100 rounded-xl shadow-xl hover:shadow-2xl duration-300 mx-auto px-4 sm:max-w-7xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      whileHover="hover"
    >
      <motion.img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64"
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.5 }}
      />
      <div className="capitalize p-8">
        <h2 className="text-2xl tracking-wide font-semibold">{title}</h2>
        <p className="mt-4 text-slate-600 leading-loose">{text}</p>
        <div className="mt-4 flex gap-x-4">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <TbWorldWww className="h-8 w-8 text-gray-400 hover:text-blue-600 transition-transform duration-300 transform hover:scale-110" />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithubSquare className="h-8 w-8 text-gray-400 hover:text-black transition-transform duration-300 transform hover:scale-110" />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
