import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation'
import About from './components/About';
import Contact from './components/Contact';

// import './App.css';

function App() {
  // const [currentPage] = useState("about");

  const [currentPage, setCurrentPage] = useState("about");

  return (
    <div >
      <div className="flex-row" id="header-background">
        <Header></Header>
        <Navigation
          // pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Navigation>
      </div>
      {/* <div>
        <Page
          currentPage={currentPage}
        ></Page>
      </div> */}
      <main>
        <About></About>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
