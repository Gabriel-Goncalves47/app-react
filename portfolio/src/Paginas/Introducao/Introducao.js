import React from 'react';
import Header from '../../Componentes/Header/Header';
import './Introducao.css'
import brasao from "../../Imagens/brasao.png"
import labenu from '../../Imagens/labenu.png'

const Introducao = () => {
    return (
        <div className='introduction-page'>
            <Header/>
            <div className="eu">
                <span>
                    <b>Gabriel Luiz Gonçalves</b> <br />
                    Brasileiro <br />
                    Mineiro <br />
                    Jovem <br />
                    Disposto a residir onde a empresa necessitar <br />
                    Preparado para pensar, planejar e executar tarefas para otimizar a produtividade <br />
                    <br />
                    <b>Minha missão é o seu crescimento empresarial, meu desenvolvimento pessoal e profissional!</b> <br/>
                    <b>Saiba mais sobre mim e meus projetos neste portfólio e entre em contato comigo!</b>
                </span>
            </div>

            <div className="tabela">
                <table>
                    <tr>
                        <th>Atualmente</th>
                        <td>Labenu</td>
                        <td><img src={labenu} alt="Logo Labenu" /></td>
                    </tr>
                    <tr>
                        <th>Ensino Superior</th>
                        <td>Universidade Federal de Viçosa</td>
                        <td><img src={brasao} alt="Brasão UFV" /></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Introducao