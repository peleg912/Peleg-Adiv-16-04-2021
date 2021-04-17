import React, { useState, useEffect} from 'react';
import DailyCard from '../dailyCard/dailyCard';
import axios from 'axios';
import {connect} from 'react-redux';

const FiveDays = (props)=> {
  
    const [state, setState] = useState({fiveDays: [], text: ''});

    useEffect ( async()=> {
        try {
            const res = await axios.get(`${process.env.REACT_APP_MAIN_URL}/forecasts/v1/daily/5day/${props.id}?apikey=${process.env.REACT_APP_API_KEY}?metric=true`);
            setState({
             fiveDays: res.data.DailyForecasts,
             text: res.data.DailyForecasts.Day.IconPhrase});
             console.log(res.data.DailyForecasts);
        } catch (error) {
            alert(error);
        }
    }, []);

    
        return(
        <>
         <h1>
          <b>{state.text}</b> 
        </h1>

        <div className="row row-cols-5 gx-5 gy-5 fiveDays">
             {state.fiveDays.map(obj=> (
                    <DailyCard
                    className="col"
                    key={obj.Date}
                    day= {obj.name}
                    temp={obj.Temperature.Maximum.Value}
                    weather={state.text}/> 
                 ))} 
        </div>
        </>

        )
    }



const mapStateToProps = (state)=> {
    return{
        id: state.currentCity.key
    }
}

export default connect(mapStateToProps)(FiveDays);