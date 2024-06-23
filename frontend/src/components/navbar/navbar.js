import React from 'react';
import {Link} from "react-router-dom"



function Navbar() {
  return (
    <div>
      <header className="heading d-flex grow-shrink-basis align-center">
        <div className="heading-title-icon d-flex grow-shrink-basis align-center">
          <img className="icon mr-1" src="/assets/image.png" alt="lightbulb" />
          <h1 className="heading-title">
            <Link to="/" className="link">Quizy</Link>
          </h1>
        </div>
        <nav className="navigation">
          <ul className="list-non-bullet">
            <li className="list-item-inline">
              <Link to="#" className="link cursor">Home</Link>
            </li>
            <li className="list-item-inline">
              <a href="#" className="link cursor">About</a>
            </li>
            <li className="list-item-inline">
              <a href="#" className="link cursor">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
