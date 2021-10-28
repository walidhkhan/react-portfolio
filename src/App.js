import React from 'react';
import Header from './components/Header';
import Nav from './components/Navigation'
import Project from './components/Project';
// import './App.css';

function App() {
  

  return (
    <div >
      <div className="flex-row" id="header-background">
        <Header></Header>
        <Nav></Nav>
      </div>
      <div>
        <Project></Project>
      </div>
    </div>
  );
}

export default App;
