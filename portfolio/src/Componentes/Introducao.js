import React from 'react';
import './Introducao.css'
import brasao from "./imagens/brasao.png"
import labenu from './imagens/labenu.png'

class Introducao extends React.Component {
    render () {
        return (
            <div>
                <div className="eu">
                <pre>
                    <b>Gabriel Luiz Gonçalves</b> <br/> 
                    Brasileiro <br/>
                    Mineiro <br/>
                    Jovem <br/>
                    Disposto a residir onde a empresa necessitar <br/>
                    Preparado para pensar, planejar e executar tarefas para otimizar a produtividade <br/>
                    <br/>
                    <b>Minha missão é o seu crescimento empresarial e meu desenvolvimento pessoal e profissional!</b>
                </pre>
                </div>

                <div className="tabela">
                <table>
                    <tr>
                        <th>Atualmente</th>
                        <td>Labenu</td>
                        <td><img src={labenu} alt="Logo Labenu"/></td>
                    </tr>
                    <tr>
                        <th>Ensino Superior</th>
                        <td>Universidade Federal de Viçosa</td>
                        <td><img src={brasao} alt="Brasão UFV"/></td>
                    </tr>
                </table>
                </div>
            </div>
        )
    }
}

export default Introducao