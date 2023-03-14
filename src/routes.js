import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Footer from './components/Footer/index'
import Header from './components/Header/index'

import Contato from './pages/Contato'
import Galeria from './pages/Galeria'
import Home from './pages/Home'
import Projeto from './pages/Projeto'
import Projetos from './pages/Projetos'
import Sobre from './pages/Sobre'

import ScrollToTop from './services/ScrollToTop.js'

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/galeria" element={<Galeria />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/projeto/:id" element={<Projeto />} />
                <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RoutesApp