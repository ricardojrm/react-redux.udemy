import React from 'react';
import PrimeiroComponente from './components/basics/PrimeiroComponente'
import ComponenteFragmentado from './components/basics/ComponenteComFragmento'
import ComponenteParametrizado from './components/basics/ComponenteComParametros'
import NumeroAleatorio from './components/basics/UINumeroAleatorio'
import UICard from './components/ui/UICard';

export default function App( props )
{
    return (
        <div id="app">
            <h1>Fundamentos React</h1>
            <UICard titulo="Número Aleatório">
                <NumeroAleatorio min={2} max={10} />
            </UICard>
            <UICard titulo="Componente Parametrizado">
                <ComponenteParametrizado
                    titulo="Situação do aluno"
                    aluno="Pedro"
                    nota={6.7} />
                <ComponenteParametrizado
                    titulo="Situação do aluno"
                    aluno="Maria"
                    nota={9.9} />
            </UICard>
            <UICard titulo="Componente Fragmentado">
                <ComponenteFragmentado />
            </UICard>
            <UICard titulo="Primeiro Componente">
                <PrimeiroComponente></PrimeiroComponente>
            </UICard>
        </div>
    );
}