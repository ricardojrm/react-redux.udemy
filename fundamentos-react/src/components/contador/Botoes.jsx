import React from 'react';

export default function Botoes( {onInc, onDec} )
{
    return (
        <React.Fragment>
            <button onClick={onInc}>+</button>
            <button onClick={onDec}>-</button>
        </React.Fragment>
    );
}