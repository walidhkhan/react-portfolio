import React from 'react';
import Navigation from "../Navigation";


function Header(props) {
  const { currentPage, setCurrentPage } = props;

  return (
    <header id="header-background">
      <div>
        <h2>Walid Khan</h2>
      </div>
      <div>
        <Navigation
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></Navigation>
      </div>
    </header>
  );
}

export default Header;