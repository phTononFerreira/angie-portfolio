import './contato.scss'

import { useEffect } from 'react'
import { BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

export default function Contato() {
    useEffect(()=>{
        document.title = 'Contato / Angela Sanchez';
    }, [])

    return (
        <section className='contato-section'>
            <div className="mainDivContato">
                <div className='gridContato'>
                    <div className='contatoDivP'>
                        <a target="_blank" href='https://www.instagram.com/arq_angelasanchez/' className='contatoDiv instagram'>
                            <h2>Instagram</h2>
                            <BsInstagram size={40} />
                        </a>
                    </div>

                    <div className='contatoDivP'>
                        <a target="_blank" href='https://www.linkedin.com/in/angelasanchezalves/' className='contatoDiv linkedin'>
                            <h2>LinkedIn</h2>
                            <BsLinkedin size={40} />
                        </a>
                    </div>

                    <div className='contatoDivP'>
                        <a target="_blank" href='https://wa.me/5511989000918' className='contatoDiv whatsapp'>
                            <h2>Whatsapp</h2>
                            <BsWhatsapp size={40} />
                        </a>
                    </div>

                    <div className='contatoDivP'>
                        <a target="_blank" href='mailto:sanchez.18a18@gmail.com' className='contatoDiv email'>
                            <h2>Email</h2>
                            <HiOutlineMail size={40} />
                        </a>
                    </div>
                </div>
            </div>

        </section>

    )
}