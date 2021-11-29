import React from 'react';
import './Contato.css'
import Header from '../../Componentes/Header/Header';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Contato = () => {
    return (
        <div className='contact-page'>
            <Header />
            <div className='titulo'>
                <h1 id='titulo-contatos'>Clique nos ícones e seja redirecionado às minhas redes sociais</h1>
            </div>
            <div className='contato'>
                <div className='lip'>
                    <span className='tootext'>Clique em mim!</span>
                    <a href='https://api.whatsapp.com/send?phone=5533999195096' target="_blank"><WhatsAppIcon id="whats" /></a>
                </div>
                <h2>(33) 9.9919-5096</h2>
            </div>
            <footer>
                <div className="redes-sociais">
                    <div className='lip'>
                        <span className='tootext'>Clique em mim!</span>
                        <a href='https://www.instagram.com/gabrielgoncalves3601/?hl=pt-br' target='_blank'><InstagramIcon id="insta" /></a>
                    </div>
                    <div className='lip'>
                        <span className='tootext'>Clique em mim!</span>
                        <a href='https://www.facebook.com/gabriel.goncalves.73345' target='_blank'><FacebookIcon id="face" /></a>
                    </div>
                    <div className='lip'>
                        <span className='tootext'>Clique em mim!</span>
                        <a href='https://www.linkedin.com/in/gabriel-luiz-gon%C3%A7alves-b62a5b21b/' target='_blank'><LinkedInIcon id="linked" /></a>
                    </div>
                    <div className='lip'>
                        <span className='tootext'>Clique em mim!</span>
                        <a href='https://github.com/Gabriel-Goncalves47' target='_blank'><GitHubIcon id="github" /></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Contato