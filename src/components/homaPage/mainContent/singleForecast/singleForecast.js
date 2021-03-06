import react, { useEffect } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import './singleForecast.css';

const SingleForecast = (props)=> {
    
useEffect(async()=>{
    try {
         const res = await axios.get(`${process.env.REACT_APP_MAIN_URL}/currentconditions/v1/${props.id}
         ?apikey=${process.env.REACT_APP_API_KEY}&language=en-en"`);
         await props.onUpdatingTemp(res.data[0].Temperature.Metric.Value, res.data[0].WeatherText);
    } catch (error) {
        alert(error);
      }
    }, []);

    useEffect(async()=>{
        try {
                const res = await axios.get(`${process.env.REACT_APP_MAIN_URL}/currentconditions/v1/${props.id}
                ?apikey=${process.env.REACT_APP_API_KEY}&language=en-en"`);
                await props.onUpdatingTemp(res.data[0].Temperature.Metric.Value, res.data[0].WeatherText);
        } catch (error) {
            alert(error);
          }
        }, [props.name]);
    
        return(
            <div className="single">
                <b>
               {props.name} <br/>
               {props.temp}°C
               </b>
            </div>
        )

    }


const mapStateToProps= (state)=> {
    return{
      name: state.currentCity.name,
      temp: state.currentCity.temp,
      id: state.currentCity.key
    }
  }

const mapDispatchToProps = (dispatch)=> {
    return{
        onUpdatingTemp: (temp, desc)=> dispatch({type: "UPDATE_TEMP", temp: temp, desc: desc})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleForecast);