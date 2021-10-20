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
                        Médico veterinário graduado em janeiro de 2018 na Universidade Federal de Viçosa. <br/>
                        Reside em Governador Valadares – MG, contudo, com total disponibilidade para residir em outra cidade. <br/>
                    </p>
                    <p> 
                        Passando por 3 áreas da medicina veterinária sempre prestando serviços para empresas consolidadas e tradicionais no mercado local da cidade de Governador Valadares/MG,
                        obtive grande experiência com uma cultura empresarial que preza pelo trabalho em equipe mantendo um convívio cortês e amigável com os colegas de trabalho, encarregados e superiores,
                        focando em tornar o ambiente de trabalho agradável e o mais produtivo possível, eliminando comportamentos contra produtivos. 
                        <br/>
                        <br/>
                        Hoje, ofereço minha experiência como responsável técnico de estabelecimentos que produzem e/ou processam produtos carneos para consumo humano
                        e também com controle de qualidade da industrialização de produtos de origem animal.
                    </p>
                </div>
                <div className="habilidades">  
                    <h1>Habilidades</h1>
                    <ul>
                        <li>Habituado ao trabalho em equipe</li>
                        <ul>
                            <li>O convívio empresarial me ensinou a lidar com situações adversas através do compartilhamento e integração de conhecimento com toda a hierarquia produtiva.</li>
                        </ul>
                        <li>Prática em integrar diferentes setores em benefício da produtividade</li>
                        <ul>
                            <li>Apesar de parecer intuitivo, dialogar e estabelecer um plano de ação entre setores de diferentes competências (manutenção, higienização, administrativo e técnico) é uma aptidão rara de se encontrar, extremamente benéfico para a empresa e incluso em meus serviços.</li>
                        </ul>
                        <li>Versado em atuar como supervisor</li>
                        <ul>
                            <li>Ordenar e controlar informações dos mais diversos gêneros (capacidades estruturais do setor, relação entre os colaboradores, condições funcionais dos equipamentos de trabalho, antecipação de períodos de escassez e períodos de bonança, entre outros) faz parte importante das atribuições de um supervisor. Em tais atribuições fui experimentado durante uma atuação como Supervisor de Controle de Qualidade em um estabelecimento produtor de alimentos para consumo humano e agora as ofereço como parte de minhas competências.</li>
                        </ul>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Profissionalismo