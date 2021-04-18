import React from 'react';
import './cityCard.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const cityCard = (props)=> {
    return(
      <Link
      to="/" 
      style={{color: 'black', textDecoration: 'none'}}
      onClick={()=>props.onUpdatingCity(props.name, props.id)}>
        <div className="card city rounded shadow">
            <div className="card-body">
                <h4 className="card-title">{props.name}</h4>
                <h5 className="card-subtitle mb-2 text-muted">{props.temp}°C</h5>
                <h4>{props.weather}</h4>
            </div>
       </div>
      </Link>
    )
}


const mapDispatchToProps = (dispatch)=> {
  return{
    onUpdatingCity: (cityName, cityKey)=> dispatch({type: 'UPDATE_CITY', name: cityName, key: cityKey})
  }
}


export default connect(null, mapDispatchToProps)(cityCard);