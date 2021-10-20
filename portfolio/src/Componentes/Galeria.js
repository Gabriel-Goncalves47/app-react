import React from "react";
import './Galeria.css'

class Galeria extends React.Component {
    render () {
        return (
            <div>
                <div className='projeto'>
                    <iframe src='http://cute-oven.surge.sh/' title="Projeto desenvolvido 1"/>
                    <p>Projeto desenvolvido pensando em uma plataforma de
                        integração entre prestadores de serviços e contratantes.
                    </p>
                    <p>O site não carregou ou você deseja ver em uma janela separada?</p>
                    <a href='http://cute-oven.surge.sh/' target='_blank'>Clique aqui e confira a página!</a>
                </div>
                <div className='projeto'>
                    <iframe src='https://statuesque-fork.surge.sh/' title='Projeto desenvolvido 2'/>
                    <p>Este site foi criado ainda antes de iniciar os estudos em ReactJs, sendo
                        sua confecção em HTML, CSS e JavaScript puros.
                    </p>
                    <p>É uma simulação do aplicativo iFood.</p>
                    <a href='https://statuesque-fork.surge.sh/' target='_blank'>Confira a página aqui!</a>
                </div>
            </div>
        )
    }
}

export default Galeria