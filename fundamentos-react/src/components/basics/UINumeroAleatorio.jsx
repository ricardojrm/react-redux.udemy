import React from 'react';

export default function UINumeroAleatorio( {min=1, max=10} )
{
    const aleatorio = Math.floor( Math.random() * (max - min + 1) + min );

    return (
        <p>O número aleatório entre <strong>{min}</strong> e <strong>{max}</strong> de agora é <strong>{aleatorio}</strong></p>
    );
}