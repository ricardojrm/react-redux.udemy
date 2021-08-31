import './Calculator.css';
import React, { Component } from 'react';
import Display from '../components/Display';
import Button from '../components/Button';

class Calculator extends Component
{
    initialState = {
        displayValue: '0',
        clearDisplay: false,
        operation: null,
        values: [ 0, 0 ],
        current: 0,
    }

    state = {...this.initialState}

    clear = () =>
    {
        console.log( 'limpar' );
        this.setState( {...this.initialState} );
    }

    setOperation = ( op ) =>
    {
        console.log( op );

        let currentValue = this.state.displayValue;
        let clearDisplay = true;
        let operation = op;
        let values = [...this.state.values];
        let current = this.state.current;

        // Se o poteiro ainda apontar para o primeiro dígito...
        if ( current === 0 )
        {
            current = 1;
        }
        else
        {
            const beforeOperation = this.state.operation;
            console.log( beforeOperation );
            
            if ( beforeOperation != null )
            {
                currentValue = eval( `${values[0]} ${beforeOperation} ${values[1]}` );
                values[ 0 ] = currentValue;
                values[ 1 ] = 0;
            }
            
            // Se foi clicado no botão "="...
            if ( operation === '=' )
            {
                operation = null;
                current = 1;
            }

            console.log( values );
        }

        this.setState( {displayValue: currentValue, clearDisplay, operation, values, current} );
    }

    addDigit = ( n ) =>
    {
        console.log( n );

        // Validação #1: Não podemos digitar mais de '.'
        if ( n === '.' 
                && this.state.displayValue.includes( n ) )
        {
            return;
        }

        const isClearDisplay = this.state.displayValue === "0" || this.state.clearDisplay;
        const currentValue = isClearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + n;
        this.setState( {displayValue, clearDisplay: false} );

        // Se o valor informado for um dígito...
        if ( n !== "." )
        {
            const i = this.state.current;
            const newValue = parseFloat( displayValue );
            const values = this.state.values;
            values[i] = newValue;
            this.setState( {values} );
            console.log( values );
        }
    }
     
    render()
    {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clear} triple />
                <Button label="/"  click={this.setOperation} operation />
                <Button label="7"  click={this.addDigit} />
                <Button label="8"  click={this.addDigit} />
                <Button label="9"  click={this.addDigit} />
                <Button label="*"  click={this.setOperation} operation />
                <Button label="4"  click={this.addDigit} />
                <Button label="5"  click={this.addDigit} />
                <Button label="6"  click={this.addDigit} />
                <Button label="-"  click={this.setOperation} operation />
                <Button label="1"  click={this.addDigit} />
                <Button label="2"  click={this.addDigit} />
                <Button label="3"  click={this.addDigit} />
                <Button label="+"  click={this.setOperation} operation />
                <Button label="0"  click={this.addDigit} double />
                <Button label="."  click={this.addDigit} />
                <Button label="="  click={this.setOperation} operation />
            </div>
        );
    }
}

export default Calculator;