import React, { useState, useEffect} from 'react';
import DailyCard from '../dailyCard/dailyCard';
import axios from 'axios';
import {connect} from 'react-redux';
import { getByTestId } from '@testing-library/dom';

const FiveDays = (props)=> {
  
    const [state, setState] = useState({fiveDays: []});

    useEffect ( async()=> {
        try {
            const res = await axios.get(`${process.env.REACT_APP_MAIN_URL}/forecasts/v1/daily/5day/${props.id}?apikey=${process.env.REACT_APP_API_KEY}&metric=true`);
            setState({
             fiveDays: res.data.DailyForecasts});
        } catch (error) {
            // alert(error);
        }
    }, []);

    useEffect ( async()=> {
        try {
            const res = await axios.get(`${process.env.REACT_APP_MAIN_URL}/forecasts/v1/daily/5day/${props.id}?apikey=${process.env.REACT_APP_API_KEY}&metric=true`);
           console.log(res.data.DailyForecasts);
            setState({
             fiveDays: res.data.DailyForecasts});
        } catch (error) {
            // alert(error);
        }
    }, [props]);

    const getDay = (date)=> {
        const event = new Date(date);
        const options = { weekday: 'short'};
        console.log(event.toLocaleDateString(undefined, options));
        return event.toLocaleDateString(undefined, options);
    }

    
        return(
        <>

        <div className="row row-cols-5 gx-5 gy-5 fiveDays">
             {state.fiveDays.map(obj=> (
                    <DailyCard
                    className="col"
                    key={obj.Date}
                    id={props.id}
                    day= {getDay(obj.Date)}
                    temp={obj.Temperature.Maximum.Value}
                    weatherDesc={obj.Day.IconPhrase}/> 
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