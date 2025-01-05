const SkillsCard = ({ icon, title, text }) => {
  return (
    <article>
      <img className="w-20" src={icon} />
      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-2 text-slate-500">{text}</p>
    </article>
  );
};
export default SkillsCard;
