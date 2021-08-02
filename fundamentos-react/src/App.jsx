import React from 'react';
import PrimeiroComponente from './components/basics/Primeiro'
import ComponenteParametrizado from './components/basics/ComponenteComParametros'
import NumeroAleatorio from './components/basics/UINumeroAleatorio'

export default function App( props )
{
    return (
        <div>
            <h1>Fundamentos React</h1>
            <NumeroAleatorio min={2} max={10} />
            <PrimeiroComponente></PrimeiroComponente>
            <PrimeiroComponente/>
            <ComponenteParametrizado
                titulo="Situação do aluno"
                aluno="Pedro"
                nota={6.7} />
            <ComponenteParametrizado
                titulo="Situação do aluno"
                aluno="Maria"
                nota={9.9} />
        </div>
    );
}