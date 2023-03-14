import { useEffect, useState } from 'react'
import { setupApiClient } from '../../services/api'

import Modal from 'react-modal'
import { ModalPhoto } from '../../components/ModalPhoto'

import './galeria.scss'


export default function Galeria() {

    const [projects, setProjects] = useState([])
    const [images, setImages] = useState([])

    const [modalVisible, setModalVisible] = useState(false)
    const [urlImage, setUrlImage] = useState(false)
    const [nameImage, setNameImage] = useState("")

    Modal.setAppElement('#root')

    function handleOpenImage(url, name) {
        setModalVisible(true)
        setUrlImage(url)
        setNameImage(name)
    }

    async function loadAllImages() {

        const api = setupApiClient()

        if (projects.length === 0) {
            
            return
        }

        const allImages = await Promise.all(
            projects.map(async (project) => {
                const responseImage = await api.get(`/project/images?project_id=${project.id}`);
                const response = responseImage.data;
                return response.map((image) => {
                    return { url: image.url, name: image.name, project: project.name };
                });
            })
        );

        const flattenedImages = allImages.flat(); // unir arrays de imagens em um só
        flattenedImages.sort(() => Math.random() - 0.5);
        setImages(flattenedImages)

    }

    async function loadProjects() {
        const api = setupApiClient()
        const responseProject = await api.get('/project')

        setProjects(responseProject.data)
        await loadAllImages()
    }
    useEffect(() => {
        loadAllImages()
    }, [projects])


    useEffect(() => {
        loadProjects()
        loadAllImages()
        document.title = 'Galeria / Angela Sanchez';
    }, [])


    return (
        <section >
            <div className="banner">
                <img alt='Banner projetos (Casa moderna)' src='https://images.pexels.com/photos/297494/pexels-photo-297494.jpeg' />
                <h1>Galeria</h1>
            </div>
            <div className='grid'>
                {images.length != 0 ? (images.map((image) => {
                    return (
                        <div onClick={()=>{handleOpenImage(image.url, image.name)}} key={image.url} className='photo-item'>
                            <div className='photo box-shadow'>
                                <img className='photoImg' alt={image.name} src={image.url} />
                                <span className='unselectable'>{image.project + " - " + image.name}</span>
                            </div>
                        </div>
                    )
                })) : (
                    <div className='loading-div'>
                        <h1>CARREGANDO...</h1>
                        <div className='spinner'></div>
                    </div>
                )}

            </div>
            {modalVisible && (<ModalPhoto isOpen={Boolean(modalVisible)} onRequestClose={() => { setModalVisible(false) }} url={urlImage} name={nameImage} />)}
        </section>

    )
}