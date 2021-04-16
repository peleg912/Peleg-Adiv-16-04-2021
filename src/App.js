import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import SearchBar from './components/homaPage/searchBar/searchBar';
import MainContent from './components/homaPage/mainContent/mainContent';

const App = (props)=> {
  return (
      <div>
         <Navbar/>
         <SearchBar/>
         <MainContent/>
     </div>
  );
}

export default App;
