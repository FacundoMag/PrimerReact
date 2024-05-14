import { Component, component } from 'react'
import Contador from './componentes/Contador';
import './App.css';
import Formulario from './componentes/Formulario';

//const contadores = ['Alumnos', 'Profesores', 'Aulas'];

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      contadores: []
    }
  }

  guardar(nombre){
    let nuevosContadores = this.state.contadores;
    nuevosContadores.push(nombre);
    this.setState({contadores: nuevosContadores});
  }
  eliminar(){
  }

  render(){
    return(
      <div className='Contenedor'>
        <Formulario
          guardar={(nombre) => this.guardar(nombre)}/>
        <div className='ListaContadores'>
        {this.state.contadores.map((cont, index) =>
            <Contador key={index}>{cont}</Contador>
        )}
        </div>
      </div>
    )
  }
}