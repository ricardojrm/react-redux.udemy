import React from 'react';
import produtos from '../../data/produtos';
import './TabelaProduto.css';

export default function TabelaProduto()
{
    function adicionarLinha( {id, nome, preco}, idx )
    {
        /* Determinando o estilo da linha conforme padrão par/ímpar. */
        const styleClass = ( idx % 2 === 0 ) ? "even" : "odd";

        return (
            <tr key={idx}
                id={"produto-"+idx}
                className={styleClass}>
                <td>{id}</td>
                <td>{nome}</td>
                <td>{preco.toLocaleString( 'pt-br', { style: 'currency', currency: 'BRL' })}</td>
            </tr>
        );
    };

    return (
        <table className="produtos">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {produtos.map( adicionarLinha )}
            </tbody>
            <tfoot>
                <tr>
                    <td colspan={3}>Encontrado {produtos.length} produtos</td>
                </tr>
            </tfoot>
        </table>
    );
}