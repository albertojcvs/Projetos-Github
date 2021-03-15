import React, { useState } from "react";

import "./style.css";
import ProjectCard from "../ProjectCard";
import Pagination from "../Pagination";

const PROJECTS_LIMIT = 12;

function ProjectList({ projectList, username }) {
  const [offset, setOffset] = useState(0);
  const projects = projectList.slice(offset, offset + PROJECTS_LIMIT);
  return (
    <div className="project-list-container">
      <div className="project-list-title">
        {username && `Projetos de: ${username}`}
      </div>
      <ul className="projects-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>

      <Pagination
        limit={PROJECTS_LIMIT}
        offset={offset}
        setOffset={setOffset}
        total={projectList.length}
      />
    </div>
  );
}

export default ProjectList;
