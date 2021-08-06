import React from 'react';
import If, { Else } from './If';

export default function UsuarioInfo( {usuario={}} )
{
    return (
        <div id="welcome">
            <If conditional={usuario && usuario.nome}>
                <div>Seja bem-vindo <strong>{usuario.nome}</strong>!</div>
                <Else>
                    <div>Seja bem-vindo <strong>Amigão</strong>!</div>
                </Else>
            </If>
        </div>
    );
}