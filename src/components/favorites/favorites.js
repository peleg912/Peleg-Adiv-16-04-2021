import React from 'react';
import CityCard from './cityCard/citycard';
import {connect} from 'react-redux';
import './favorites.css';

const favorites = (props)=> {
  
    return(
        props.faves.length > 0?
        <div className="row row-cols-auto gy-5 mobile-fav" style={{marginLeft:'10%', marginTop:'1%'}}>
           {props.faves.map(obj=>{
                return(
                    <CityCard
                    className="col"
                    key={obj.id}
                    id={obj.id}
                    name={obj.name}
                    weather={obj.weatherDesc}
                    temp={obj.temp}/>
                )
            })}
        </div> :
        <>

            <div style={{marginTop:'10%', textAlign:'center'}}>
                <h1 style={{ fontFamily: 'Montserrat, sans-serif'}}>
                    <b>No Current Favorites :)</b>
                </h1>
            </div>

        </>
    )
}


const mapStateToProps = (state)=> {
    return{
        faves: state.favorites
    }
}


export default connect(mapStateToProps)(favorites);