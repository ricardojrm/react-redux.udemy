import './UICard.css';
import React from 'react';

export default function UICard({ titulo, children })
{
    return (
        <div className="card">
            <div className="title">{titulo}</div>
            <div className="content">{children}</div>
        </div>
    );
}