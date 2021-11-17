import React from "react";
import { useHistory } from "react-router";
import {goToIntroduction, goToGalery, goToPersonal, goToContact} from "../../Router/Coordinator" 
import { StyledButton, StyledNav, StyledHeaderPage } from "./StyledHeader";

const Header = () => {

    const history = useHistory()

    return (
        <StyledHeaderPage>
            <StyledNav>
                <StyledButton onClick={() => goToIntroduction(history)}>Introdução</StyledButton>
                <StyledButton onClick={() => goToGalery(history)}>Galeria</StyledButton>
                <StyledButton onClick={() => goToPersonal(history)}>Pessoal</StyledButton>
                <StyledButton onClick={() => goToContact(history)}>Contato</StyledButton>
            </StyledNav>
        </StyledHeaderPage>
    )
}

export default Header