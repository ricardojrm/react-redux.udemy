import React from 'react';
import IndiretaFilho from './IndiretaFilho';

export default function IndiretaPai()
{
    let nome = "?";
    let idade = 0;
    let nerd = false;

    function preencherComponente( nome, idade, nerd )
    {
        console.log( nome, idade, nerd );
    }

    return (
        <div>
            <div>
                <span>{nome}</span>&nbsp;
                <span>{idade}</span>&nbsp;
                <span>{nerd ? "Verdadeiro" : "Falso"}</span>
            </div>
            <IndiretaFilho callback={preencherComponente} />
        </div>
    );
}