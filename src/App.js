import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import SearchBar from './components/serachBar/searchBar';

const App = (props)=> {
  return (
      <div>
         <Navbar/>
         <SearchBar/>
     </div>
  );
}

export default App;
