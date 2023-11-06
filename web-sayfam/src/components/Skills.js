import { skillsData } from "../api/data";

function Skills() {
  return (
    <div className="skills-area dark:bg-zinc-800">
      <h1 className="dark:text-lime-200">Skills</h1>
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
