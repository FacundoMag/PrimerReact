import { Component } from 'react';
import Contador from './componentes/Contador';
import './App.css';
import Formulario from './componentes/Formulario';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contadores: [],
    };
  }

  guardar(nombre, valor) {
    let nuevosContadores = this.state.contadores;
    nuevosContadores.push({ nombre, valor });
    this.setState({ contadores: nuevosContadores });
  }

  eliminar(index) {
    let nuevosContadores = this.state.contadores;
    nuevosContadores.splice(index, 1);
    this.setState({ contadores: nuevosContadores });
  }

  render() {
    return (
      <div className='Contenedor'>
        <Formulario guardar={(nombre, valor) => this.guardar(nombre, valor)} />
        <div className='ListaContadores'>
          {this.state.contadores.map((cont, index) => (
            <Contador
              key={index}
              nombre={cont.nombre}
              valorInicial={cont.valor}
              eliminar={() => this.eliminar(index)}
            />
          ))}
        </div>
      </div>
    );
  }
}
