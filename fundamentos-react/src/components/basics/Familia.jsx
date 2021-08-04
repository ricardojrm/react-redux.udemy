import React from 'react';
import MembroFamilia from './FamiliaMembro';

export default function Familia( {sobrenome} )
{
    return (
        <div>
            <MembroFamilia nome="Pedro" sobrenome={sobrenome} />
            <MembroFamilia nome="Ana" {...arguments[0]} />
            <MembroFamilia nome="Gustavo" />
        </div>
    );
}