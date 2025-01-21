import { motion } from "motion/react";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const SkillsCard = ({ icon, title, text }) => {
  return (
    <motion.article
      className="bg-white shadow-lg rounded-xl p-4 text-center hover:shadow-xl transition-shadow duration-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.img
        src={icon}
        className="w-20 h-20 mx-auto rounded-full p-2 border-2 border-blue-500"
        variants={iconVariants(3)}
      />
      {/* <h4 className="mt-4 font-bold text-lg">{title}</h4>
      <p className="mt-2 text-gray-600">{text}</p>}*/}
    </motion.article>
  );
};

export default SkillsCard;
