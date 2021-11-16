import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Navigation'
import About from './components/About';
// import Page from './components/Page';
import ContactForm from './components/Contact';
import Gallery from './components/Gallery';

// import './App.css';

function App() {
  const [pages] = useState([
    {
      name: 'About Me',
      description:
        "Short description about myself",
    },
    {
      name: 'Portfolio',
      description:
        "Project List",
    },
    {
      name: 'Contact',
      description:
        "Let's get in touch",
    },
    {
      name: 'Resume',
      description:
        "Official resume",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div >
      <div className="flex-row" id="header-background">
        <Header></Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </div>
      {/* <div>
        <Page
          currentPage={currentPage}
        ></Page>
      </div> */}
      <main>
        <Gallery></Gallery>
        <About></About>
        <ContactForm></ContactForm>
      </main>
    </div>
  );
}

export default App;
