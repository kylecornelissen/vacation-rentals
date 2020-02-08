import React, { Component } from 'react';
import { fetchAreaDetails } from '../helpers.js';
import './AreasContainer.css';
import { Link } from "react-router-dom";

import Navigation from '../Navigation/Navigation.js'

class AreasContainer extends Component {
  constructor() {
  	super();
  	this.state = {
      name: '',
      purpose: '',
  		areas: [],
  		error: ''
  	}
  }

  componentDidMount() {
  	fetch('http://localhost:3001/api/v1/areas')
  	  .then(response => response.json())
  	  .then(data => fetchAreaDetails(data.areas))
  	  .then(areaData => this.setState({areas: areaData}))
    	.catch(error => this.setState({error}))
  }

  render() {
    const { areas } = this.state;
    return areas.map(location => {

      return (
      	<article key={location.id}>
          <h1>{location.shortName}</h1>
          <h2>{location.name}</h2>
          <p>{location.about}</p>
          <Link to={{
            pathname: `/areas/${location.id}/listings`,
            state: {listings: location.listings}
          }}>
            <button>See Listings</button>
          </Link>
        </article>
      	)
    })
  }
}

export default AreasContainer
