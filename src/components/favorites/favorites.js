import React from 'react';
import CityCard from './cityCard/citycard';
import {connect} from 'react-redux';

const favorites = (props)=> {
  
    return(
        props.faves.length > 0?
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
        </div> :
        <>
               <img
               className="rounded-circle shadow" 
               style={{width:'450px', marginLeft:"33%", marginTop:'2%'}}
               src="https://image.freepik.com/free-vector/businessman-get-idea_1133-350.jpg"/>
        </>
    )
}


const mapStateToProps = (state)=> {
    return{
        faves: state.favorites
    }
}


export default connect(mapStateToProps)(favorites);