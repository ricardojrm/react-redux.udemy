import './ListaAlunos.css';
import React from 'react';
import alunos from '../../data/alunos';

export default function ListaAlunos()
{
    console.log( alunos );
    const doConvert = function( aluno, idx )
    {
        const styleClass = (aluno.nota >= 7) ? "aprovado" : "reprovado";
        return (<li key={aluno.id} id={"aluno-"+aluno.id} className={styleClass}>{aluno.id}) {aluno.nome} - {aluno.nota}</li>);
    };

    return (
        <React.Fragment>
            <ul id="curso-react-redux" className="notas">
                {alunos.map( doConvert )}
            </ul>
        </React.Fragment>
    );
}