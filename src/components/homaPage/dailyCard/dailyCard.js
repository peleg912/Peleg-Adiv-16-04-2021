import React from 'react';
import './dailyCard.css';

const dailyCard = (props)=> {
    return(
        <div className="card daily rounded shadow">
            <div className="card-body">
                <h4 className="card-title">{props.day}</h4>
                <h5 className="card-subtitle mb-2 text-muted">{props.temp}C</h5>
            </div>
        </div>
    
    )
}

export default dailyCard;