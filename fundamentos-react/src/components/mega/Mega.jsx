import React, { useState } from 'react';

export default function Mega( props )
{
    const INTERVALO_LIMITE_INFERIOR = 1;
    const INTERVALO_LIMITE_SUPERIOR = 60;

    const QUANTIDADE_SEQUENCIA = 6;

    const [numeros, setNumeros] = useState( Array( QUANTIDADE_SEQUENCIA ).fill( 0 ) );

    function gerarProximoNumero()
    {
        return parseInt( Math.random() * ( INTERVALO_LIMITE_SUPERIOR - INTERVALO_LIMITE_INFERIOR + 1 ) ) + INTERVALO_LIMITE_INFERIOR;
    }

    function gerarSequencia( qtdSequencia )
    {
        let novaSequencia = new Map();
        do {
            let novoNumero = gerarProximoNumero();
            novaSequencia.set( novoNumero , true );
            // console.log( novoNumero , novaSequencia.size , novaSequencia.size< TOTAL_SEQUENCIA );
        } while ( novaSequencia.size < qtdSequencia );
        setNumeros( [...novaSequencia.keys()] );
    }

    function gerarSurpresinha( e )
    {
        gerarSequencia( QUANTIDADE_SEQUENCIA );
    }

    return (
        <div>
            <div>{numeros.sort( ( n1, n2) => n1 - n2 ).map( n => n + " " )}</div>
            <button onClick={gerarSurpresinha}>Gerar Sequência</button>
        </div>
    );
}