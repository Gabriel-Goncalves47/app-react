import React from 'react';
import './Contato.css'
import face from './imagens/face.png'
import github from './imagens/github.png'
import insta from './imagens/insta.png'
import linkedin from './imagens/linkedin.png'
import whats from './imagens/whats.png'

class Contato extends React.Component {
    render () {
        return (
            <div>
                <div className='titulo'>
                <h1>Clique nos ícones e seja redirecionado às minhas redes sociais</h1>
                </div>
                <div className='contato'>
                    <a href='https://api.whatsapp.com/send?phone=5533999195096' target='_blank'><img src={whats} alt='WhatsApp Logo' /></a>
                    <h2>(33) 9.9919-5096</h2>
                </div>
                <footer>
                    <div className="redes-sociais">
                        <a href='https://www.instagram.com/gabrielgoncalves3601/?hl=pt-br' target='_blank'><img src={insta} alt='Instagram Logo'></img></a>
                        <a href='https://www.facebook.com/gabriel.goncalves.73345' target='_blank'><img src={face} alt='Facebook Logo'></img></a>
                        <a href='https://www.linkedin.com/in/gabriel-luiz-gon%C3%A7alves-b62a5b21b/' target='_blank'><img src={linkedin} alt='LinkedIn Logo'></img></a>
                        <a href='https://github.com/Gabriel-Goncalves47' target='_blank'><img src={github} alt='Github Logo'></img></a>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Contato