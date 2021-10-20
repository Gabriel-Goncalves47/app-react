import React from 'react';
import './App.css';
import Profissionalismo from './Componentes/Profissionalismo';
import Introducao from './Componentes/Introducao';
import Contato from './Componentes/Contato';
import Galeria from './Componentes/Galeria';

class App extends React.Component {

  state = {
    telaExibida: ""
  }

  renderizaSecao = () => {
    switch (this.state.telaExibida) {
      case "introducao":
        return <Introducao/>

      case "profissionalismo":
        return <Profissionalismo/>

      case "galeria":
        return <Galeria/>

      case "contato":
        return <Contato/>

      default:
        return <Introducao/>
    }
  }

  exibeIntrocucao = () => {
    this.setState({telaExibida: 'introducao'})
  }

  exibeProfissionalismo = () => {
    this.setState({telaExibida: 'profissionalismo'})
  }

  exibeContato = () => {
    this.setState({telaExibida: 'contato'})
  }

  exibeGaleria = () => {
    this.setState({telaExibida: "galeria"})
  }

  render () {
    return (
      <div className='geral'>
        <nav className='navBar'>
          <button onClick={this.exibeIntrocucao}>Introdução</button>
          <button onClick={this.exibeGaleria}>Galeria</button>
          <button onClick={this.exibeProfissionalismo}>Profissionalismo</button>
          <button onClick={this.exibeContato}>Fale comigo</button>
        </nav>
        {this.renderizaSecao()}
      </div>
    )
  }
}

export default App