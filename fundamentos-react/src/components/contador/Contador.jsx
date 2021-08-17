import React, { Component } from 'react';
import Display from './Display';
import PassoForm from './PassoForm';
import Botoes from './Botoes';

export default class Contador extends Component
{
    state = 
    {
        numero: undefined,
        passo: undefined,
    }

    constructor( {numeroInicial=0, passoInicial=1} )
    {
        super( {numeroInicial, passoInicial} );
        this.state.numero = numeroInicial;
        this.state.passo = passoInicial;
        // this.inc = this.inc.bind( this );
    }

    setPasso = ( passo ) =>
    {
        this.setState( {passo: passo} );
    }
     
    // inc()
    inc = () =>
    {
        // console.log( this );
        let i = this.state.numero + this.state.passo;
        this.setState( {numero: i} );
        // let newState = this.state;
        // newState.numero += newState.passo;
        // this.setState( newState );
        // this.state.numero += this.state.passo;
        // this.setState( this.state );
    }

    dec = () =>
    {
        let i = this.state.numero - this.state.passo;
        this.setState( {numero: i} );
        // this.state.numero -= this.state.passo;
        // this.setState( this.state );
    }

    render()
    {
        return (
            <div>
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} onChange={this.setPasso} />
                <Botoes onInc={this.inc} onDec={this.dec} />
            </div>  
        );
    }
}