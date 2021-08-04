import React from 'react';

export default function FamiliaMembro( {nome="Dino",sobrenome="Silva Sauro"} )
{
    return (
        <div>{nome} <strong>{sobrenome}</strong></div>
    );
}