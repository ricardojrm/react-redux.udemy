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
        let novaSequencia = [];
        do {
            let novoNumero = gerarProximoNumero();
            if ( !novaSequencia.includes( novoNumero ) )
            {
                novaSequencia.push( novoNumero );
            }
        } while ( novaSequencia.length < qtdSequencia );
        setNumeros( novaSequencia.sort( ( n1, n2) => n1 - n2 ) );
    }

    function gerarSurpresinha( e )
    {
        gerarSequencia( QUANTIDADE_SEQUENCIA );
    }

    return (
        <div>
            <div>{numeros.join( " " )}</div>
            <button onClick={gerarSurpresinha}>Gerar Sequência</button>
        </div>
    );

}