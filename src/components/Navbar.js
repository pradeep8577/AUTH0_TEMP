import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from 'react-router-dom'

const Navbar = () => {

  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } = useAuth0();

  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-sm ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            AUTH0
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                {isAuthenticated ? (
                  <button className="btn btn-outline-danger" onClick={() => logout({ returnTo: window.location.origin })}>
                    Logout
                  </button>
                ) : (
                  <button className="btn btn-outline-success" onClick={loginWithRedirect}>
                    Login
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
