import React from 'react';
import DiretaFilho from './DiretaFilho';

export default function DiretaPai( {nome, idade, nerd} )
{
    return (
        <React.Fragment>
            <DiretaFilho nome="Nicole" idade={9} nerd={true} />
            <DiretaFilho nome="Gabrielle" idade={13} nerd={true} />
        </React.Fragment>
    );
}