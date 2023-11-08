import { useContext } from "react";
import { skillsData } from "../api/data";
import { skillsHeader } from "../api/data";
import { SiteGlobalContext } from "../contexts/SiteGlobalProvider";

function Skills() {
  const { lang } = useContext(SiteGlobalContext);

  return (
    <div className="skills-area dark:bg-zinc-800">
      <h2 className="dark:text-lime-200">
        {lang === "tr" ? skillsHeader.tr : skillsHeader.en}
      </h2>
      <div className="skills-list-area">
        {skillsData.map((skill, i) => (
          <div className="skill" key={i}>
            <img src={skill.image} />
            <h6 className="dark:text-white">{skill.text}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Skills;
