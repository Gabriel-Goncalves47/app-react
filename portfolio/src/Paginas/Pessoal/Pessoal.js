import React from 'react';
import Header from '../../Componentes/Header/Header';
import './Pessoal.css'

const Pessoal = () => {
    return (
        <div className='personal-page'>
            <Header />
            <div className='apresentacao'>
                <h1>Breve apresentação</h1>
                <br />
                <p>
                    Encontrando no desenvolvimento web o entusiasmo do aprendizado, investi em conhecimento na área e dei início a minha caminhada aprendendo a desenvolver páginas Web com o uso de
                    HTML, CSS  e JavaScript, passando logo em seguida para o uso de React.JS incrementando ferramentas como Material UI e Styled Componentes para estilizações e fazendo páginas cada
                    vez mais funcionais utilizando API's.
                    <br />
                    <br />
                    Apresento este portfólio como demonstração do caminho percorrido, apresentando alguns dos mais de 15 projetos realizados ao longo dos meus estudos e algumas capacidades de
                    estilização demonstradas neste site/portfólio.
                    <br />
                    <br />
                    Hoje, ofereço minha experiência com ferramentas como ReactJs, JavaScript, HTML, CSS, Styled Components, Material UI, utilização de API's, Git, Github e metodologias ágeis junto
                    as soft skills adquiridas em minhas experiências profissionais passadas de 3 anos como médico veterinário.
                </p>
            </div>
            <div className="habilidades">
                <h1 id='titulo-habilidades'>Habilidades</h1>
                <br />
                <ul id='lista-habilidades'>
                    <li>React.JS;</li>
                    <br />
                    <li>JavaScript;</li>
                    <br />
                    <li>CSS;</li>
                    <br />
                    <li>HTML;</li>
                    <br />
                    <li>Styled Components;</li>
                    <br />
                    <li>Material UI;</li>
                    <br />
                    <li>Git;</li>
                    <br />
                    <li>Github;</li>
                    <br/>
                    <li>SQL;</li>
                    <br/>
                    <li>Typescript;</li>
                    <br/>
                    <li>Node.js;</li>
                    <br/>
                    <li>API REST.</li>
                </ul>
            </div>
        </div>
    )
}

export default Pessoal