import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineClose } from 'react-icons/md'

import './burguer.scss'

export default function BurguerMenu() {
    const [inOpenU, setIsOpenU] = useState(false)

    function handleOpenCloseMenu() {
        inOpenU ? setIsOpenU(false) : setIsOpenU(true)
        console.log("clickoi")
    }

    return (
        <div className='burguerDiv'>
            <div className="overlay" style={{ display: inOpenU ? "flex" : "none" }}>
                <a href="/projetos" className="navBur">PROJETOS</a>
                <a href="/sobre" className="navBur">SOBRE</a>
                <a href="/galeria" className="navBur">GALERIA</a>
                <a href="/contato" className="navBur">CONTATO</a>
            </div>
            <button onClick={handleOpenCloseMenu} className='burguerButton'>{inOpenU ? (<MdOutlineClose color='white' size={50} />) : (<GiHamburgerMenu color='#6da3d6' size={50} />)}</button>
        </div>
    )
}