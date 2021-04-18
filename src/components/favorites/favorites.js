import React from 'react';
import CityCard from './cityCard/citycard';
import {connect} from 'react-redux';

const favorites = (props)=> {
  
    return(
        <div className="row row-cols-5 gy-5" style={{marginLeft:'10%', marginTop:'1%'}}>
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
        </div>
    )
}


const mapStateToProps = (state)=> {
    return{
        faves: state.favorites
    }
}


export default connect(mapStateToProps)(favorites);