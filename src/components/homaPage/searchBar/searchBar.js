import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import './searchBar.css';

class  searchBar extends Component{

  state ={
    searchTerm: 'Tel Aviv',
    cityNotFound: false 
  }

  setSearchTerm = (event)=> {
    this.setState({searchTerm: event.target.value});
  }

  search = async()=> {
    try{
      const res = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=Ajju11Im5AOYc49UZibKKAiOGutAxrGL&q=${this.state.searchTerm}&language=en-en`);
      if (res.data.length>0){
        await this.props.onUpdatingCity(res.data[0].LocalizedName, res.data[0].Key);
        this.setState({cityNotFound: false});
      }else{
       this.setState({cityNotFound: true});
      //  alert('not found');
       }
    }catch(error){
      alert('oops');
    }
  }
    


  render(){
    return(
      <>
        <form className="input-group flex-nowrap search">
          <input
           type="text" 
           className="form-control"
           placeholder="Search for a city..."
           value={this.state.searchTerm}
           onChange={(event)=>{this.setSearchTerm(event)}}/>
          <span className="input-group-text" id="addon-wrapping" onClick={this.search}>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
             </svg>
          </span>
        </form>

              {this.state.cityNotFound ? 
            <div className="alert alert-warning alert-dismissible fade show oops" role="alert">
              <strong>Holy guacamole!</strong> We could'nt find this city, please try again!
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div> : null}
      
  
      </>
    )
  }
}


const mapStateToProps= (state)=> {
  return{
    currentCity: state.currentCity
  }
}

const mapDispatchToProps= (dispatch)=> {
  return{
    onUpdatingCity: (cityName, cityKey)=> dispatch({type: 'UPDATE_CITY', name: cityName, key: cityKey})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(searchBar);
