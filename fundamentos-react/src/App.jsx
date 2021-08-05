import './App.css';
import React from 'react';
import PrimeiroComponente from './components/basics/PrimeiroComponente'
import ComponenteFragmentado from './components/basics/ComponenteComFragmento'
import ComponenteParametrizado from './components/basics/ComponenteComParametros'
import NumeroAleatorio from './components/basics/UINumeroAleatorio'
import UICard from './components/ui/UICard';
import Familia from './components/basics/Familia'
import MembroFamilia from './components/basics/FamiliaMembro';

export default function App( props )
{
    return (
        <div id="app">
            <h1>Fundamentos React</h1>
            <div id="cards">
                <UICard titulo="Componente com Filhos" color="brown">
                    <Familia sobrenome="Ramalho">
                        <MembroFamilia nome="Pedro" />
                        <MembroFamilia nome="Ana" />
                        <MembroFamilia nome="Gustavo" />
                    </Familia>
                </UICard>
                <UICard titulo="Número Aleatório" color="green">
                    <NumeroAleatorio min={2} max={10} />
                </UICard>
                <UICard titulo="Componente Parametrizado" color="red">
                    <ComponenteParametrizado
                        titulo="Situação do aluno"
                        aluno="Pedro"
                        nota={6.7} />
                    <ComponenteParametrizado
                        titulo="Situação do aluno"
                        aluno="Maria"
                        nota={9.9} />
                </UICard>
                <UICard titulo="Componente Fragmentado" color="yellow">
                    <ComponenteFragmentado />
                </UICard>
                <UICard titulo="Primeiro Componente">
                    <PrimeiroComponente></PrimeiroComponente>
                </UICard>
            </div>
        </div>
    );
}