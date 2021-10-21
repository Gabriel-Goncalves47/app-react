import React from 'react';
import './Profissionalismo.css'

class Profissionalismo extends React.Component {
    render () {
        return (
            <div>
                <div className='cabecalho'></div>
                <div className='apresentacao'>
                    <h1>Breve apresentação</h1>
                    <p>
                        Graduado em medicina veterinária na Universidade Federal de Viçosa e tendo 3 anos de experiências em diversas áreas de atuação desta profissão, encontrei na programação minha paixão profissonal.  
                        <br/>
                        Doando-me totalmente ao desenvolvimento, investi em conhecimento e venho crescendo cada vez mais.
                        <br/>
                        <br/>
                        Apresento este portfólio como demonstração do caminho percorrido até aqui no desenvolvimento Web.
                    </p>
                    <br/>
                    <p> 
                        No decorrer dos estudos em programação web, tutorado pela Labenu, pratiquei mais de 500 horas de desenvolvimento com a realização de projetos tanto individuais quanto em equipe, dois destes projetos  <br/>
                        podem ser conferidos na aba Galeria deste webportfólio e mais atualizações serão publicadas.
                        <br/>
                        <br/>
                        Hoje, ofereço minha experiência com ferramentas como ReactJs, JavaScript, HTML e CSS junto as soft skills adquiridas em minhas experiências profissionais passadas.
                    </p>
                </div>
                <div className="habilidades">  
                    <h1>Habilidades</h1>
                    <ul>
                        <li>Habituado ao trabalho em equipe;</li>
                        <br/>
                        <li>O convívio empresarial me ensinou a lidar com situações adversas através do compartilhamento e integração de conhecimento com toda a hierarquia produtiva;</li>
                        <br/>
                        <li>Capacidade de integrar diferentes setores na execução das atividades;</li>
                        <br/>
                        <li>Versado em atuar como supervisor.</li>
                        </ul>
                </div>
            </div>
        )
    }
}

export default Profissionalismo