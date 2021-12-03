import React from "react";
import { useHistory } from "react-router";
import {goToIntroduction, goToGalery, goToPersonal, goToContact} from "../../Router/Coordinator" 
import './Header.css'

const Header = () => {

    const history = useHistory()

    return (
        <div className='header-comp'>
            <nav className='nav'>
                <button className='nav-button' onClick={() => goToIntroduction(history)}><span>Introdução</span></button>
                <button className='nav-button' onClick={() => goToGalery(history)}><span>Galeria</span></button>
                <button className='nav-button' onClick={() => goToPersonal(history)}><span>Pessoal</span></button>
                <button className='nav-button' onClick={() => goToContact(history)}><span>Contato</span></button>
            </nav>
        </div>
    )
}

export default Header