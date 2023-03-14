
import Modal from "react-modal"

import { AiOutlineCloseCircle } from 'react-icons/ai'

import React from "react"
import './modal.scss'

/*
interface ModalProps {
    isOpen: boolean,
    onRequestClose: () => void
    order: any
}*/

export function ModalPhoto({ isOpen, onRequestClose, url, name }) {

    const customStyles = {
        content: {
            top: '50%',
            bottom: 'auto',
            left: '50%',
            right: 'auto',
            padding: '30px',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderRadius: '5px',
            width: '90%',
            height: '90%',
            border: '0'
        },
        overlay: {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(5px)',
            zIndex: 100
        }
    }
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
            <div className="imageDivModal">
                <button type="button" onClick={onRequestClose} className="react-modal-close" style={{ borderWidth: 0, background: 'transparent' }} >
                    <AiOutlineCloseCircle size={50} color="#6291BC" />
                </button>
                <img src={url} alt="Imagem" />
                <h2 className="image-name-modal">{name}</h2>
            </div>

        </Modal>
    )
} 