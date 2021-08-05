import React from 'react';
import produtos from '../../data/produtos';

export default function TabelaProduto()
{
    const format = function( {id, nome, preco}, idx )
    {
        return (
            <tr key={idx} id={"produto-"+idx}>
                <td>{id}</td>
                <td>{nome}</td>
                <td>R$ {preco}</td>
            </tr>
        );
    };

    return (
        <table className="produtos">
            <thead>
                <tr>
                    <td>Código</td>
                    <td>Nome</td>
                    <td>Preço</td>
                </tr>
            </thead>
            {produtos.map( format )}
            <tfoot>
                <tr>
                    <td colspan={3} style={{textAlign:"left"}}>Encontrado {produtos.length} produtos</td>
                </tr>
            </tfoot>
        </table>
    );
}