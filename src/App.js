import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import HomePage from './components/homaPage/mainContent/homePage';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Favorites from './components/favorites/favorites';



const App = (props)=> {
  const routes = (
    <Switch>
    <Route path="/favorites" component={Favorites}/>
    <Route path="/" exact component={HomePage}/>
    <Redirect to="/"/>
    </Switch>
  )


  return (
      <div>
         <Navbar/>
          {routes}
     </div>
  );
}

export default withRouter(App);
