import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { setupApiClient } from '../../services/api'

import './projetos.scss'

export default function Projetos() {
    const [projects, setProjects] = useState([])
    const [projectsURL, setProjectsURL] = useState([])

    async function injectURL() {

        const api = setupApiClient()

        if (projects.length === 0) {
            
            return
        }
        const projectsInjected = await Promise.all(
            projects.map(async (project) => {
                const responseImage = await api.get(`/project/images?project_id=${project.id}`);
                const response = responseImage.data;

                if (response.length === 0) {
                    project.url = "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";
                } else {
                    project.url = response[0].url
                }

                return project;
            })
        );
        
        setProjectsURL(projectsInjected)

    }

    async function loadProjects() {
        const api = setupApiClient()
        const responseProject = await api.get('/project')

        if (Array.isArray(responseProject.data)) {
            setProjects(responseProject.data)
            await injectURL()
        }
    }

    useEffect(() => {
        injectURL()
    }, [projects])


    useEffect(() => {
        loadProjects()
        injectURL()
        document.title = `Projetos / Angela Sanchez`;
    }, [])

    return (
        <section >
            <div className='banner'>
                <img alt='Banner projetos' src='https://images.pexels.com/photos/5584052/pexels-photo-5584052.jpeg' />
                <h1>Projetos</h1>
            </div>
            <div className='grid'>
                {projectsURL.length !== 0 ? projectsURL.map((project) => {
                    return (
                        <Link to={`/projeto/${project.id}`}>
                            <div key={project.id} className='project-item'>
                                <img alt='Project' src={project.url} />
                                <div className='project-item-label'>
                                    <span className='project-name'>{project.name}</span>
                                    <span className='project-year'>{project.date}</span>
                                </div>
                            </div>
                        </Link>
                    )
                }) : (
                
                <div className='loading-div'>
                    <h1>CARREGANDO...</h1>
                    <div className='spinner'></div>
                </div>
                )}
            </div>
        </section>

    )
}