import './UICard.css';
import React from 'react';

export default function UICard({ titulo, color, children })
{
    const cardStyle = {
        backgroundColor: color || 'gray',
        borderColor: color || 'gray'
    };

    return (
        <div className="card" style={cardStyle}>
            <div className="title">{titulo}</div>
            <div className="content">{children}</div>
        </div>
    );
}