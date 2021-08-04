import React from 'react';

export default function PrimeiroComponente()
{
    const msg = 'Este é o nosso primeiro componente!';
    return (
        <span>
            <h2>Primeiro Componente</h2>
            <p>{msg}</p>
        </span>
    );
}