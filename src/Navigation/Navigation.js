import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './Navigation.css';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {}
  }
	render() {
    return(
      <div className="nav_container">
        <ul className="nav_signoff-container">
          <li className="nav-btn">{this.props.name}</li>
          <li className="nav-btn">{this.props.purpose}</li>
          <NavLink to='/areas'><li className="nav-btn">AREAS</li></NavLink>
          <NavLink to='/favorites'><li className="nav-btn">FAVS{`(${this.props.favorites.length})`}</li></NavLink>
          <NavLink to='/' className="sign-off-btn"><li className="sign-off-btn">SIGN OUT</li></NavLink>
        </ul>
      </div>
    )
  }

}

export default Navigation;
