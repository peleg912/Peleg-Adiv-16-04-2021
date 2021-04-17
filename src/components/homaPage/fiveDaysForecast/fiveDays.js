import React, { Component } from 'react';
import DailyCard from '../dailyCard/dailyCard';
import axios from 'axios';
import {connect} from 'react-redux';

class FiveDays extends Component{

    state = {
        fiveDays: []
    }

    componentDidMount = async()=> {
        try {
            const res = await axios.get
            (`${process.env.REACT_APP_MAIN_URL}/forecasts/v1/daily/5day/${this.props.id}?apikey=${process.env.REACT_APP_API_KEY}`);
            this.setState({fiveDays: res.data});
        } catch (error) {
            alert(error);
        }
    }
    
    render(){
        return(
        <>
         <h1>
          <b>Mostly Sunny</b> 
        </h1>

        <div className="row row-cols-5 gx-5 gy-5 fiveDays">
            {/* { this.state.fiveDays.map(obj=> {
                return( */}
                    <DailyCard
                    className="col"/>
                    {/* // key={obj.key}
                    // day= {obj.name}
                    // temp={obj.temp}/> */}
                {/* )
            })
        } */}
                
        </div>
        </>

        )
    }
}


const mapStateToProps = (state)=> {
    return{
        id: state.currentCity.key
    }
}

export default connect(mapStateToProps)(FiveDays);