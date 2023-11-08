import { useContext } from "react";
import { SiteGlobalContext } from "../contexts/SiteGlobalProvider";
import { projectData } from "../api/data";
import { projectsHeader } from "../api/data";

function Projects() {
  const { lang } = useContext(SiteGlobalContext);

  return (
    <div className="projects-area dark:bg-zinc-900">
      <h2 className="dark:text-lime-200">
        {lang === "tr" ? projectsHeader.tr : projectsHeader.en}
      </h2>
      <div className="projects-main-area">
        {projectData.map((project, i) => (
          <div key={i} className="project dark:bg-zinc-800">
            <div className="project-img">
              <img src={project.image} />
            </div>
            <div className="project-details">
              <h6 className="dark:text-violet-400">{project.header}</h6>
              <p className="dark:text-white">
                {lang === "tr"
                  ? project.description.tr
                  : project.description.en}
              </p>
              <div className="project-buttons">
                {project.buttons.map((button, i) => (
                  <button key={i} className="button dark:bg-violet-400">
                    {button}
                  </button>
                ))}
              </div>
              <div className="project-links">
                {project.links.map((link, i) => (
                  <a className="dark:text-lime-200" key={i} href="#">
                    {lang === "tr" ? link.tr : link.en}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
