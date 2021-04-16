import React from 'react';
import './dailyCard.css';

const dailyCard = (props)=> {
    return(
        <div className="card daily">
            <div className="card-body">
                <h4 className="card-title">Sun</h4>
                <h5 className="card-subtitle mb-2 text-muted">28C</h5>
            </div>
        </div>
    
    )
}

export default dailyCard;