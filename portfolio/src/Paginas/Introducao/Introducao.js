import React from 'react';
import Header from '../../Componentes/Header/Header';
import './Introducao.css'
import brasao from "../../Imagens/brasao.png"
import labenu from '../../Imagens/labenu.png'

const Introducao = () => {
    return (
        <div className='introduction-page'>
            <Header />
            <div className="eu">
                <pre>
                    <b>Gabriel Luiz Gonçalves</b> <br />
                    Front-End Developer <br />
                    Logo será um Full Stack Developer <br />
                    Disposto a residir onde a empresa necessitar <br />
                    Preparado para pensar, planejar e executar tarefas para otimizar a produtividade <br />
                    <br />
                    <b>Minha missão é o seu crescimento empresarial, meu desenvolvimento pessoal e profissional!</b> <br />
                    <b>Saiba mais sobre mim e meus projetos nas abas Pessoal e galeria deste portfólio e entre em contato comigo!</b>
                </pre>
            </div>

            <div className="tabela">
                <table>
                    <tr>
                        <th>Atualmente</th>
                        <td>Labenu <br />
                            Curso Web Full Stack | Agosto 2021 - Fevereiro 2022
                        </td>
                        <td><img src={labenu} alt="Logo Labenu" /></td>
                    </tr>
                    <tr>
                        <th>Ensino Superior</th>
                        <td>Universidade Federal de Viçosa <br />
                            Medicina Veterinária |
                            2013 - 2018
                        </td>
                        <td><img src={brasao} alt="Brasão UFV" /></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Introducao