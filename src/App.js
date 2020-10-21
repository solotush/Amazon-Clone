import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './Header'
import Home from './Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
