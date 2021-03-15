import React, { memo } from 'react';

import './style.css';
function ProjectCard({ project }) {

    function parseName(name) {
        return name.split('-').join(' ');
    }


    return (
        <li className='project-card-container'>
            <header className='project-card-header project-card-base-style'>
                {parseName(project.name)}
            </header>
            <main className='project-card-description project-card-base-style'>
                {project.description ? project.description : 'Sem Descrição'}
            </main>
            <footer className='project-card-footer project-card-base-style'>
                <a href={project.html_url} target='_blank' > link do github</a>
            </footer>
        </li>
    )
}

export default memo(ProjectCard);