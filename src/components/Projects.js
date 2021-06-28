import React, { useContext } from 'react'

import { LangContext } from '../PortfolioApp'
import { palette } from '../data/palette'
import { projectsEng, projectsSpa } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { GithubLink } from './GithubLink'


export const Projects = () => {

    const lang = useContext(LangContext)

    const projectsStyle = {
        backgroundColor: palette.color5
    }

    return (
        <div id="projects" className="d-flex flex-column align-items-center justify-content-start pb-5 pt-3 text-center" style={ projectsStyle }>
            {
                ( lang === 'english' )
                && ( <h2 className="fw-bolder mt-5 mb-5">My Projects</h2> )
            }
            {
                ( lang === 'spanish' )
                && ( <h2 className="fw-bolder mt-5 mb-5">Mis Proyectos</h2> )
            }
            <div className="d-flex flex-wrap justify-content-evenly mt-5">
                {
                    ( lang === 'english' )
                    && ( projectsEng.map( (project, i) => <ProjectCard project={ project } key={ i } /> ) )
                }
                {
                    ( lang === 'spanish' )
                    && ( projectsSpa.map( (project, i) => <ProjectCard project={ project } key={ i } /> ) )
                }
            </div>
            <div className="m-2">
                {
                    ( lang === 'english')
                    && ( <span>This Portfolio</span> )
                }
                {
                    ( lang === 'spanish')
                    && ( <span>Este Portafolio</span> )
                }
                <GithubLink githubLink="https://github.com/eddyvy/eddyvy-portfolio" />
            </div>
            <div className="m-2">
                {
                    ( lang === 'english')
                    && ( <span>My GitHub Profile</span> )
                }
                {
                    ( lang === 'spanish')
                    && ( <span>Mi Perfil de Github</span> )
                }
                <GithubLink githubLink="https://github.com/eddyvy" />
            </div>
        </div>
    )
}
