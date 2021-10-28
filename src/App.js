import React from 'react';
import Header from './components/Header';
import Nav from './components/Navigation'
// import './App.css';

function App() {
  return (
    <div className="flex-row" id="header-background">
        <Header />
        <Nav />
    </div>
  );
}

export default App;
