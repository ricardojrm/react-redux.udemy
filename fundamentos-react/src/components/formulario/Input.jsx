import React from 'react';

export default function Input()
{
    const valor = "Hello World!";

    return (
        <div>
            <input value={valor} readOnly />
        </div>
    );
}