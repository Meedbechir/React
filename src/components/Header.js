import React from "react";
import orgbg from '../Images/orgbg.png';

const Header = () => {
  return (
    <header>
      <div className="container-fluid header1 py-2">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand text-light" href="/">
               <p className="h3">sunnyside</p>
              </a>
              <button class="navbar-toggler" type="button">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto">
                  <a className="nav-item nav-link text-light" href="/">
                    About
                  </a>
                  <a className="nav-item nav-link text-light" href="/">
                    Services
                  </a>
                  <a className="nav-item nav-link text-light" href="/">
                    Projects
                  </a>
                  <button className="btn border border-dark rounded-pill px-3 text-dark bg-light">
                    Contact
                  </button>
                </div>
              </div>
            </nav>
          </div>
          <div className="text-center py-5 text-light">
            <h1>WE ARE CREATIVES</h1>
            <img src={orgbg} alt="Pic" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
