import React from "react";
import Header from '../../Componentes/Header/Header';
import './Galeria.css'

const Galeria = () => {
    return (
        <div className='galery-page'>
            <Header />
            <div className='projeto'>
                <iframe src='http://keen-food.surge.sh/' title="Projeto desenvolvido principal" />
                <br />
                <p>Último projeto desenvolvido até então.<br />
                    Foi realizado em equipe e desenvolvido para
                    plataformas mobile com adaptação para desktops (mobile first).<br />
                    Tem por finalidade oferecer uma experiência semelhante a aplicativos de delivery alimentício. <br />
                    Foram aplicadas técnicas de verificação e autenticação, consumo de API, estilização com styled components e
                    material UI, usando ReactJS, JavaScript, CSS e HTML/JSX.<br />
                    Inspirado no aplicativo Rappi.
                </p>
                <a href='http://keen-food.surge.sh/' target='_blank'>Veja o projeto completo aqui!</a>
            </div>
            <div className='projeto'>
                <iframe src='http://cute-oven.surge.sh/' title="Projeto desenvolvido 1" />
                <br />
                <p>Projeto desenvolvido pensando em uma plataforma de
                    integração entre prestadores de serviços e contratantes. <br />
                    Feito em grupo, este site foi desenvolvido em ReactJs sendo estilizado com Material UI e Styled Components e CSS.
                </p>
                <p>O site não carregou ou você deseja ver em uma janela separada?</p>
                <a href='http://cute-oven.surge.sh/' target='_blank'>Clique aqui e confira a página!</a>
            </div>
            <div className='projeto'>
                <iframe src='https://statuesque-fork.surge.sh/' title='Projeto desenvolvido 2' />
                <br />
                <p>Este site foi criado ainda antes de iniciar os estudos em ReactJs, sendo
                    sua confecção em HTML, CSS e JavaScript puros.
                </p>
                <p>É uma simulação do aplicativo iFood.</p>
                <a href='https://statuesque-fork.surge.sh/' target='_blank'>Confira a página aqui!</a>
            </div>
        </div>
    )
}

export default Galeria