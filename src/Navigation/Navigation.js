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
          <article className="nav_signoff-container">
            <h1>
              {this.props.name}
            </h1>
            <h1>
              {this.props.purpose}
            </h1>
            <NavLink to='/favorites' className="fav-btn"> FAVS </NavLink>
            <NavLink to='/' className="nav_button"> SIGN OUT </NavLink>
          </article>

        </div>
        )
    }

}

export default Navigation;
