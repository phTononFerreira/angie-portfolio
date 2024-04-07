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
                <img className='profilepic' src='https://res.cloudinary.com/dgejoa3jk/image/upload/v1712504500/xkoptef5fua9rpxgl5aa.jpg' />
                <h1 className='titleSobre'>Olá, sou Angela Sanchez.<FaHeart className='iconSobre' size={40} color="white" /></h1>
                <p className='paragraph'>Desde a infância, o desenho foi uma paixão e habilidade que sempre me acompanhou. Ao longo do tempo, descobri que a Arquitetura e Urbanismo eram as áreas perfeitas para unir minha paixão pelo desenho com minha vontade de criar e transformar espaços.
                    Tenho uma grande vontade de aprender e estou sempre em busca de novas ferramentas e conhecimentos que me ajudem a evoluir na minha carreira. Além disso, sou comunicativa e acredito que a troca de ideias e experiências é fundamental para o desenvolvimento de projetos incríveis.
                    Como profissional, estou sempre aberta a novas oportunidades e desafios que possam expandir minha visão e me permitir crescer ainda mais. Estou animada para continuar a explorar a Arquitetura e Urbanismo, criando espaços que inspirem e transformem a vida das pessoas.</p>
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

