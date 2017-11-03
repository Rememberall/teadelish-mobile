import React, { Component } from 'react';
import './App.css';
import Banana from './banana/Banana';
import NavigationBar from './NavigationBar';

const App = (props) => (
  <div className="App">
    <NavigationBar />
    <header className="App-header">
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      HALLO
    </p>
    <Banana />
  </div>
);

export default App;
