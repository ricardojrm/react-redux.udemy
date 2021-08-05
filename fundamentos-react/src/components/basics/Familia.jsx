import React from 'react';

export default function Familia( {sobrenome, children} )
{
    const doClone = function( child, idx )
    {
        return React.cloneElement( child, {sobrenome, key: idx} );
    };

    return (
        <React.Fragment>
            {
                /* React.cloneElement( children, {sobrenome} ) */
                /* React.Children.map( children, doClone ) */
                children.map( doClone )
            }
        </React.Fragment>
    );
}