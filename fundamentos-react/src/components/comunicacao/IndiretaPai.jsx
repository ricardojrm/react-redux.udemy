import React, { useState } from 'react';
import IndiretaFilho from './IndiretaFilho';

export default function IndiretaPai()
{
    const [nome, setNome] = useState( '?' );
    const [idade, setIdade] = useState( 0 );
    const [nerd, setNerd] = useState( false );

    function preencherComponente( nome, idade, nerd )
    {
        console.log( nome, idade, nerd );
        
        setNome( nome );
        setIdade( idade );
        setNerd( nerd );
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