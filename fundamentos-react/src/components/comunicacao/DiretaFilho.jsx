import React from 'react';

export default function DiretaFilho( {nome, idade, nerd} )
{
    return (
        <div>
            <span>{nome}</span>&nbsp;
            <span><strong>{idade}</strong></span>&nbsp;
            <span>{nerd ? "Verdadeiro" : "Falso"}!</span>
        </div>
    );
}