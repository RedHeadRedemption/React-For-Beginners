import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <header className="top">
        <h1>Catch 
          <span className="ofThe">
          <span className="of">of</span>
          <span className="The">The</span>
          </span>
          Day</h1>
        <h3 classNme="tagline">
          <span>Fresh Daily</span>
        </h3>
      </header>
    );
  }
}

export default Header;