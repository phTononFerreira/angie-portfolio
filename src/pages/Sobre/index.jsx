import { useEffect } from 'react'
import { BsCloudyFill } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './sobre.scss'

export default function Sobre() {
    useEffect(() => {
        document.title = `Sobre / Angela Sanchez`;
    }, [])

    return (

        <section className='sobre-section'>
            <div className="mainDivSobre">
                <img className='profilepic' src='https://cdn.discordapp.com/attachments/810357545436315671/1084590856180342835/328154226_157199103438439_4804731725574381367_n.jpg' />
                <h1 className='titleSobre'>Olá, sou Angela Sanchez.<FaHeart className='iconSobre' size={40} color="white" /></h1>
                <p className='paragraph'>Duis eget nisl ex. Donec et scelerisque enim. Nunc egestas odio a est consectetur, suscipit ultricies sem venenatis. Vestibulum mollis justo sed tortor condimentum posuere. Fusce nulla purus, condimentum sed velit in, feugiat elementum ligula. Fusce id libero a libero interdum cursus ut eget odio. Donec convallis, justo nec hendrerit malesuada, metus eros volutpat lorem, quis volutpat velit massa ut magna. Integer hendrerit ac sapien in tincidunt.</p>
                <span>arquitetura / urbanismo / edificação / planejamento / habitação / paisagem / patrimônio / história / sustentabilidade / eficiência / desenho / maquete / estética / funcionalidade</span>
            </div>
            <div className='socialDiv'>
                <h1>Vamos trabalhar juntos!<BsCloudyFill className='iconSobre' size={50} color="white" /></h1>
                <Link className='btoAllProjects' to="/contato">
                    <h2>Contato</h2>
                </Link>
            </div>

        </section>

    )
}