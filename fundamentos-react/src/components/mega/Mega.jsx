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

    function gerarSequencia( e )
    {
        let novaSequencia = new Map();
        do {
            let novoNumero = gerarProximoNumero();
            novaSequencia.set( novoNumero , true );
            // console.log( novoNumero , novaSequencia.size , novaSequencia.size< TOTAL_SEQUENCIA );
        } while ( novaSequencia.size < QUANTIDADE_SEQUENCIA );
        setNumeros( [...novaSequencia.keys()] );
    }

    return (
        <div>
            <div>{numeros.map( n => n + " " )}</div>
            <button onClick={gerarSequencia}>Gerar Sequência</button>
        </div>
    );
}