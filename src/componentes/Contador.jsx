import { Component } from 'react';
import Boton from './Boton';

export default class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = { valor: props.valorInicial };
  }

  restar() {
    this.setState({ valor: this.state.valor - this.props.valorInicial });
  }

  sumar() {
    this.setState({ valor: this.state.valor + this.props.valorInicial });
  }

  multiplicar() {
    this.setState({ valor: this.state.valor * this.props.valorInicial });
  }

  dividir() {
    this.setState({ valor: this.state.valor / this.props.valorInicial });
  }

  render() {
    return (
      <div className='Contador'>
        <span className='Titulo'>{this.props.nombre}</span>
        <span className='Valor'>{this.state.valor}</span>
        <div className='Botonera'>
          <Boton simbolo='-' accion={() => this.restar()} />
          <Boton simbolo='+' accion={() => this.sumar()} />
          <Boton simbolo='x' accion={() => this.multiplicar()} />
          <Boton simbolo='/' accion={() => this.dividir()} />
          <Boton simbolo='x' accion={() => this.props.eliminar()} />
        </div>
      </div>
    );
  }
}
