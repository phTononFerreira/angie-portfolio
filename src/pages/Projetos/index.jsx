import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'; // Importando useQuery do react-query
import { Link } from 'react-router-dom'
import { setupApiClient } from '../../services/api'

import './projetos.scss'

export default function Projetos() {
    const [projectsURL, setProjectsURL] = useState([])

    // Definindo a função para buscar os projetos
    const { data: projects, isLoading } = useQuery('projects', async () => {
        const api = setupApiClient()
        const response = await api.get('/project')
        return response.data
    })

    // Definindo a função para buscar as URLs das imagens
    const { data: projectsImageUrls } = useQuery(['projectImages', projects], async () => {
        if (!projects || projects.length === 0) return []
        const api = setupApiClient()
        const imageUrls = await Promise.all(
            projects.map(async (project) => {
                const responseImage = await api.get(`/project/images?project_id=${project.id}`);
                if (responseImage.data.length === 0) {
                    return "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";
                } else {
                    return responseImage.data[0].url
                }
            })
        );
        return imageUrls
    })

    // Atualizando o estado das URLs das imagens quando houver mudanças
    useEffect(() => {
        if (projectsImageUrls) {
            setProjectsURL(projectsImageUrls)
        }
    }, [projectsImageUrls])

    useEffect(() => {
        document.title = `Projetos / Angela Sanchez`;
    }, [])

    return (
        <section >
            <div className='banner'>
                <img alt='Banner projetos' src='https://images.pexels.com/photos/5584052/pexels-photo-5584052.jpeg' />
                <h1>Projetos</h1>
            </div>
            <div className='grid'>
                {isLoading ? (
                    <div className='loading-div'>
                        <h1>CARREGANDO...</h1>
                        <div className='spinner'></div>
                    </div>
                ) : (
                    projectsURL.map((url, index) => (
                        <Link to={`/projeto/${projects[index].id}`} key={projects[index].id}>
                            <div className='project-item'>
                                <img alt='Project' src={url} />
                                <div className='project-item-label'>
                                    <span className='project-name'>{projects[index].name}</span>
                                    <span className='project-year'>{projects[index].date}</span>
                                </div>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </section>
    )
}
