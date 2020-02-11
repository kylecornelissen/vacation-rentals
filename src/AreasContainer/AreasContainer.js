import React, { Component } from 'react';
import { fetchAreaDetails } from '../helpers.js';
import './AreasContainer.css';
import { Link } from "react-router-dom";

class AreasContainer extends Component {
  constructor() {
  	super();
  	this.state = {
  		areas: []
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
      	<article className="areas_listing-container" key={location.id}>
          <div className="area_name-box">
            <h1 className="area_name-text">{location.shortName}</h1>
          </div>
          <div className="img_here"></div>
          <h2>{location.name}</h2>
          <p>{location.about}</p>
          <Link to={{
            pathname: `/areas/${location.id}/listings`,
            state: {listings: location.listings}
          }}>
            <button className="button_listing" >See Listings</button>
          </Link>
        </article>
      	)
    })
  }
}

export default AreasContainer
