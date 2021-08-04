import React from 'react';

export default function ComponenteComParametro( props )
{
    const nota = props.nota;
    const situacao = ( nota > 7 ) ? <strong>Aprovado</strong> : <React.Fragment>em <strong>Recuperação</strong></React.Fragment>
    return (
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <p>Aluno <strong>{props.aluno}</strong> recebeu a nota <strong>{nota}</strong> e está {situacao}</p>
        </React.Fragment>
    );
}