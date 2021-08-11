import React from 'react';

export default function IndiretaFilho( {callback} )
{
    const min = 50;
    const max = 70;

    function gerarIdade()
    {
        return parseInt( Math.random() * (max - min) ) + min;
    }

    function gerarNerd()
    {
        return Math.random() > 0.5;
    }

    const cb = function ( e ) { callback( 'José Ricardo', gerarIdade(), gerarNerd() ); };

    return (
        <div>
            <div>Filho</div>
            <button onClick={cb}>Fornecer informações</button>
        </div>
    );
}