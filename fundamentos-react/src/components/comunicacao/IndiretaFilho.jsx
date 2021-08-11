import React from 'react';

export default function IndiretaFilho( {callback} )
{
    const cb = function ( e ) { callback( 'José Ricardo', 65, false ); };

    return (
        <div>
            <div>Filho</div>
            <button onClick={cb}>Fornecer informações</button>
        </div>
    );
}