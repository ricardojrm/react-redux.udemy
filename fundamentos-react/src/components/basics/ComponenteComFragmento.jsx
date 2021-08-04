import React from 'react';

export default function ComponenteComFragmento( props )
{
    const msg = 'Este é o nosso primeiro componente fragmentado!';
    return (
        <React.Fragment>
            <h2>Primeiro Componente Com Fragmento</h2>
            <p>{msg}</p>
        </React.Fragment>
    );
}