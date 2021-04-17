import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import DefaultPage from './components/homaPage/mainContent/defaultPage';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Favorites from './components/favorites/favorites';



const App = (props)=> {
  const routes = (
    <Switch>
    <Route path="/favorites" component={Favorites}/>
    {/* <Route path={`/${name}`} component={DefaultPage}/> */}
    <Route path="/" exact component={DefaultPage}/>
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
