import React, { Component } from 'react';
import ComponenteComFragmento from '../basics/ComponenteComFragmento';
import { timingSafeEqual } from 'crypto';

export default class Contador extends Component
{
    state = 
    {
        numero: 0,
        passo: 1,
    }

    constructor( {numeroInicial=0, passoInicial=1} )
    {
        super( numeroInicial );
        // console.log( this );
        this.state.numero = numeroInicial;
        this.state.passo = passoInicial;
        // this.inc = this.inc.bind( this );
    }

    setPasso = (e) =>
    {
        this.setState( {passo: +e.target.value} );
    }
     
    // inc()
    inc = () =>
    {
        // console.log( this );
        let i = this.state.numero + this.state.passo;
        this.setState( {numero: i} );
    }

    dec = () =>
    {
        let i = this.state.numero - this.state.passo;
        this.setState( {numero: i} );
    }

    render()
    {
        return (
            <div>
              <h2>Contador</h2>
              <p>Valor atual: {this.state.numero}</p>
              <div>
                  <label htmlFor="passoInput">Passo:</label>
                  <input id="passoInput"
                         type="number"
                         value={this.state.passo}
                         onChange={this.setPasso} />
              </div>
              <button onClick={this.dec}>-</button>
              <button onClick={this.inc}>+</button>
            </div>  
        );
    }
}