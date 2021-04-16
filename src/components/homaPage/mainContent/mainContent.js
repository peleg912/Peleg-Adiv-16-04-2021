import React from 'react';
import SingleForecast from './singleForecast/singleForecast';
import './mainContent.css';
import DailyCard from '../dailyCard/dailyCard';
import {connect} from 'react-redux';

const mainContent = (props)=> {
    return(
        <div className="jumbotron shadow rounded main">
            <SingleForecast/>

            {props.liked?
            <div className="rounded-circle dis"
             data-bs-toggle="tooltip" data-bs-placement="bottom" title="Remove from favorites"
            onClick={()=>{props.onRemovingFromFaves(props.id)}}>
                <img src="https://img.icons8.com/ios/50/000000/thumbs-down.png" alt="..."/>
            </div> :

            <div className="rounded-circle fav" 
            data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add to favorites"
            onClick={()=>props.onAddingToFaves(props.id, props.name)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
            </div>}


            <h1>
               <b>Mostly Sunny</b> 
            </h1>
            <div className="row row-cols-5 gx-5 gy-5 fiveDays">
                <DailyCard className="col"/>
                <DailyCard className="col"/>
                <DailyCard className="col"/>
                <DailyCard className="col"/>
                <DailyCard className="col"/>
            </div>

        </div>
    
    )
}

const mapStateToProps=(state)=> {
    return{
        id: state.currentCity.key,
        name: state.currentCity.name,
        liked: state.currentCity.like
    }
}

const mapDispatchToProps=(dispatch)=> {
    return{
        onAddingToFaves: (key, name)=> dispatch({type:'ADD_TO_FAVORITES', id: key, name: name}),
        onRemovingFromFaves: (key)=> dispatch({type:'REMOVE_FROM_FAVORITES', id: key}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(mainContent);