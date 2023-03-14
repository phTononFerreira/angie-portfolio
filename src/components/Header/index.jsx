import { Link, NavLink } from 'react-router-dom'
import './header.scss'

import BurguerMenu from '../BurguerMenu'

export default function Header() {
    return (
        <header>
            <div className='mainDiv'>
                <Link to="/">
                    <div className='logo'>
                        <h1>ANGELA SANCHEZ</h1>
                        <h2>Portfólio</h2>
                    </div>
                </Link>
                <div className='menu'>
                    <BurguerMenu />
                </div>

                <div className='options'>
                    <NavLink to="/projetos" className="nav">PROJETOS</NavLink>
                    <NavLink to="/sobre" className="nav">SOBRE</NavLink>
                    <NavLink to="/galeria" className="nav">GALERIA</NavLink>
                    <NavLink to="/contato" className="nav">CONTATO</NavLink>
                </div>
            </div>
        </header >
    )
}