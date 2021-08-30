import './Button.css';
import React from 'react';

function Button( props )
{
    const classNames = [ "button" ];
    const operation = props.operation || false;
    const double = props.double || false;
    const triple = props.triple || false;
    
    if ( operation ) { classNames.push( "operation" ); }
    if ( double ) { classNames.push( "double" ); }
    if ( triple ) { classNames.push( "triple" ); }

    function doClick( e )
    {
        props.click && props.click( props.label );
    }

    return (
        <button className={classNames.join( " " )} onClick={doClick}>{props.label}</button>  
    );
}

export default Button;