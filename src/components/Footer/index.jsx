import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';

import './footer.scss';

export default function Header() {
    return (
        <footer>
            <div className='centerDiv'>
                <div className='column-left'>
                    <div className='row'>
                        <a className='link' href="mailto:sanchez.18a18@gmail.com" target="_blank" rel="noreferrer">
                            <span>SANCHEZ.18A18@GMAIL.COM</span>
                            <SiGmail className='icon' size={28} />
                        </a>
                    </div>
                    <div className='row'>
                        <a className='link' href="https://www.linkedin.com/in/angelasanchezalves/" target="_blank" rel="noreferrer">
                            <span>ANGELASANCHEZALVES</span>
                            <BsLinkedin className='icon' size={28} />
                        </a>
                    </div>
                </div>
                <div className='column-right'>
                    <div className='row'>
                        <a className='link' href="https://wa.me/5511989000918" target="_blank" rel="noreferrer">
                            <BsWhatsapp className='icon' size={28} />
                            <span>(11) 98900-0918</span>
                        </a>
                    </div>
                    <div className='row'>
                        <a className='link' href="https://goo.gl/maps/K42PddDS3PpwB5Ej9" target="_blank" rel="noreferrer">
                            <FiMapPin className='icon' size={28} />
                            <span>SÃO PAULO - SP</span>
                        </a>
                    </div>
                </div>

            </div>
            <h3>
                © 2023 Angela Sanchez.
            </h3>
        </footer>
    )
}