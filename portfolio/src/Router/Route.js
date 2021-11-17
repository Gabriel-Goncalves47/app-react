import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Introducao from "../Paginas/Introducao/Introducao"
import Galeria from "../Paginas/Galeria/Galeria"
import Pessoal from "../Paginas/Pessoal/Pessoal"
import Contato from "../Paginas/Contato/Contato"
import Projeto from "../Paginas/Projetos/Projeto"
import Erro from "../Paginas/Erro/Erro"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Introducao />
                </Route>
                <Route exact path="/galeria">
                    <Galeria />
                </Route>
                <Route exact path="/pessoal">
                    <Pessoal />
                </Route>
                <Route exact path="/contato">
                    <Contato />
                </Route>
                <Route exact path="/projeto">
                    <Projeto />
                </Route>
                <Route>
                    <Erro />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router