import React from 'react';
import './Card.css'

const Card = props => (
    <div className="card">
        <div className="img-container" onClick={() => props.selectCard(props.id)}>
            <img alt={props.name} src={props.image}/>
        </div>
    </div>
);

export default Card;