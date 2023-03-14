import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './projeto.scss';

import { setupApiClient } from '../../services/api';

import Modal from 'react-modal';
import { ModalPhoto } from '../../components/ModalPhoto';

export default function Projeto() {
    const { id } = useParams()
    const navigate = useNavigate();
    const [projeto, setProjeto] = useState({ name: "Projeto" })
    const [projectImages, setProjectImages] = useState([{ url: "" }])

    const [modalVisible, setModalVisible] = useState(false)
    const [urlImage, setUrlImage] = useState(false)
    const [nameImage, setNameImage] = useState("")

    function handleOpenImage(url, name) {
        setModalVisible(true)
        setUrlImage(url)
        setNameImage(name)
    }

    async function loadImages(id) {
        const api = setupApiClient()
        const response = await api.get(`/project/images?project_id=${id}`)
        const images = response.data

        setProjectImages(images)
    }

    async function loadProject(id) {
        const api = setupApiClient()
        const response = await api.get('/project')
        const project = response.data.filter((p) => String(p.id) === id)[0]
        console.log(project)
        if (project !== undefined) {
            setProjeto(project)
        }
        document.title = `${project.name} / Angela Sanchez`;
    }
    //<span className='detail'>{projeto ? projeto.description  : ""}</span>
    useEffect(() => {
        if (projeto == undefined) {
            console.log("ENTROU")
            navigate('/')
        }
    }, [projeto])

    useEffect(() => {
        loadProject(id)
        loadImages(id)
    }, [])

    Modal.setAppElement('#root')

    return (
        <section >
            <div className="banner">
                {projeto != undefined && projectImages.length > 0 ? (
                    <img alt='Banner projetos (Casa moderna)' src={projectImages[0].url} />) : (
                    <img alt='Banner projetos (Casa moderna)' src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" />
                )}
                <div className='infoDiv'>
                    <div className='labelDiv'>
                        <h2>{projeto ? projeto.name : ""}</h2>
                        <div className='detailsProject'>
                            <span className='detail'>{projeto ? projeto.softwares : ""}</span>
                            <span className='detail'>{projeto ? projeto.date : ""}</span>
                        </div>
                    </div>
                    <div className='descriptionDiv'>
                        <span >{projeto ? projeto.description : ""}</span>
                    </div>
                </div>

            </div>
            <div className='grid projetosDiv'>
                {projectImages.map((image) => {
                    return (
                        <div onClick={() => { handleOpenImage(image.url, image.name) }} key={image.id} className='photo-item'>
                            <div className='photo box-shadow'>
                                <img className='photoImg' alt={image.name} src={image.url} />
                                <span className='unselectable'>{image.name}</span>
                            </div>
                        </div>
                    )
                })}

            </div>
            {modalVisible && (<ModalPhoto isOpen={Boolean(modalVisible)} onRequestClose={() => { setModalVisible(false) }} url={urlImage} name={nameImage} />)}
        </section>

    )
}