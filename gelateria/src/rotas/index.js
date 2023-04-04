import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from '../paginas/Home'
import { PaginaSabores } from '../paginas/Sabores'
import { PaginaSobre } from '../paginas/Sobre'

export const Paginas = () => {
    return (  
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/sabores" element={ <PaginaSabores/> }/>
                <Route path="/sobre" element={ <PaginaSobre/> }/>
            </Routes>
        </BrowserRouter>
    )
}