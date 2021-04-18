import React, { useState } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import './searchBar.css';

const  SearchBar = (props)=>{

  const [state, setState] = useState({searchTerm: 'Tel Aviv', cityNotFound: false, cityOptions: []});
  
  const setSearchTerm = (event)=> {
      setState((prevState)=>({
        searchTerm: event.target.value,
        cityNotFound: prevState.cityNotFound,
        cityOptions: prevState.cityOptions
      }))
    }

  const search = async()=> {
    try{
      const res = await axios.get(`${process.env.REACT_APP_MAIN_URL}/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_API_KEY}&q=${state.searchTerm}&language=en-en`);
      if (res.data.length>0){
        setState((prevState)=> ({
          cityOptions: res.data,
          searchTerm: prevState.searchTerm,
          cityNotFound: false
        }));
        
       
      }else{
       setState((prevState)=> ({
         cityNotFound: true,
         searchTerm: prevState.searchTerm,
         cityOptions: prevState.cityOptions,
        }))
      }
    }catch(error){
      alert(error);
    }
  };

  const getForecast = async()=> {
    try {
      const current = state.cityOptions.find(obj=> obj.LocalizedName === state.searchTerm);
      if (current){
        await props.onUpdatingCity(state.searchTerm, current.Key);
      }else{
        await props.onUpdatingCity(state.searchTerm, props.defaultKey);
      }
    } catch (error) {
      alert(error);
    }
  }

    return(
      <>
        <form className="input-group flex-nowrap search" onKeyPress={search}>
          <input
          list="datalistOptions"
           type="text" 
           className="form-control"
           placeholder="Search for a city..."
           value={state.searchTerm}
           onChange={(event)=>{setSearchTerm(event)}}/>

            <datalist id="datalistOptions">
              {state.cityOptions.map(city=> {
                return(
                  <option
                  key={city.Key} 
                  value={city.LocalizedName}/>
                )
              })}
            </datalist>



          <span className="input-group-text" id="addon-wrapping" onClick={getForecast} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click Me!">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
             </svg>
          </span>
        </form>

              {state.cityNotFound ? 
            <div className="alert alert-warning alert-dismissible fade show oops" role="alert">
              <strong>Holy guacamole!</strong> We could'nt find this city, please try again!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div> : null}
      
  
      </>
    )
}


const mapStateToProps= (state)=> {
  return{
    name: state.currentCity.name,
    defaultKey: state.defaultKey
  }
}

const mapDispatchToProps= (dispatch)=> {
  return{
    onUpdatingCity: (cityName, cityKey)=> dispatch({type: 'UPDATE_CITY', name: cityName, key: cityKey})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
