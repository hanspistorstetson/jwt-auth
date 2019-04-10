import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  navbarLinks() {
    if (this.props.authenticated) {
      return [
        <li key="secret">
          <Link to="/secret">Secret</Link>
        </li>,
        <li key="signout">
          <Link to="/signout">Sign Out</Link>
        </li>
      ];
    }

    return [
      <li key="signin">
        <Link to="/signin">Sign in</Link>
      </li>,
      <li key="signup">
        <Link to="/signup">Sign Up</Link>
      </li>
    ];
  }

  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <Link to="/">
            <span className="brand">Auth-app</span>
          </Link>
        </div>
      </nav>
    );
  }
}
