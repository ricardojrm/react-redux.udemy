import React from 'react';

export default function ParOuImpar( {numero} )
{
    const isPar = numero % 2 === 0;
    return (
        <React.Fragment>
            <span>O número <strong>{numero}</strong> é <strong>{ isPar ? "Par" : "Ímpar"}</strong>.</span>
        </React.Fragment>
    )
}