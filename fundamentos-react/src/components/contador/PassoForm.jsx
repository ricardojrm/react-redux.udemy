import React from 'react';

export default function PassoForm( {passo, onChange} )
{
    function doChange( e )
    {
        onChange( +e.target.value );
    }

    return (
        <div>
            <label htmlFor="passoInput">Passo:</label>
            <input id="passoInput"
                type="number"
                value={passo}
                onChange={doChange} />
        </div>
    );
}