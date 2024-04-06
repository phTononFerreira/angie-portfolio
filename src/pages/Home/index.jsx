import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { setupApiClient } from '../../services/api'

import './home.scss'

export default function Home() {

    const [projects, setProjects] = useState([])
    const [projectsURL, setProjectsURL] = useState([])

    async function injectURL() {

        const api = setupApiClient()

        if (projects.length === 0) {
            return
        }
        console.log(projects)
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
        const projectsInjectedFirst = projectsInjected.slice(-3).reverse()

        setProjectsURL(projectsInjectedFirst)

    }

    async function loadProjects() {
        const api = setupApiClient()
        const responseProject = await api.get('/project')

        setProjects(responseProject.data)
        await injectURL()
    }
    useEffect(() => {
        injectURL()
    }, [projects])


    useEffect(() => {
        loadProjects()
        document.title = 'Portfólio / Angela Sanchez';
    }, [])

    return (
        <div>
            <div className='bannerDiv'>
                <div className='bannerLabelDiv'>
                    <h1 className='name'>Angela Sanchez</h1>
                    <h1 className='title'>Arquitetura & Urbanismo</h1>
                </div>
            </div>
            <div className='recentProjects'>
                <h1>Projetos recentes</h1>
                <div className='display' >
                    {projectsURL.length != 0 ? projectsURL.map((project) => {
                        return (
                            <Link key={project.name} to={`/projeto/${project.id}`}>
                                <div className='project box-shadow'>
                                    <img className='projectImg' alt='Foto projeto 1' src={project.url} />
                                    <span className='unselectable'>{project.name}</span>
                                </div>
                            </Link>
                        )
                    }) : (
                        <div className='loading-div'>
                            <div className='spinner'></div>
                        </div>)
                    }


                </div>
                <Link to="/projetos">
                    <button className='btoAllProjects'>Visualizar todos os projetos</button>
                </Link>
            </div>
        </div>

    )
}