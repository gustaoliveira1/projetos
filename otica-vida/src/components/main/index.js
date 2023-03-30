import React from "react";

import Banner from '../secaoCapa'
import Produtos from '../secaoProdutos'
import Sobre from '../secaoSobre'
import Contato from "../secaoContato";

export default function Main() {
    return (
        <main>
            <Banner/>
            <Produtos/> 
            <Sobre/>
            <Contato/>
        </main>
    )
}