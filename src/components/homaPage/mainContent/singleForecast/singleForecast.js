import react, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import './singleForecast.css';

class singleForecast extends Component{

    state={
        temp: ''
    }

// componentDidMount= async()=>{
//         const res = await axios.get(
//         `http://dataservice.accuweather.com/currentconditions/v1/${this.props.currentCity.key}
//         ?apikey=Ajju11Im5AOYc49UZibKKAiOGutAxrGL&language=en-en"`);
//         this.setState({temp:res.data[0].Temperature.Metric.Value +  res.data[0].Temperature.Metric.Unit});
//      }
    

 componentDidUpdate= async()=>{
    const res = await axios.get(
    `http://dataservice.accuweather.com/currentconditions/v1/${this.props.currentCity.key}
    ?apikey=Ajju11Im5AOYc49UZibKKAiOGutAxrGL&language=en-en"`);
    this.setState({temp:res.data[0].Temperature.Metric.Value +  res.data[0].Temperature.Metric.Unit});
 }

    render(){
        return(
            <div className="single">
                <b>
               {this.props.currentCity.name} <br/>
               27C
               {this.state.temp}
               </b>
            </div>
        )

    }
} 

const mapStateToProps= (state)=> {
    return{
      currentCity: state.currentCity
    }
  }

export default connect(mapStateToProps)(singleForecast);