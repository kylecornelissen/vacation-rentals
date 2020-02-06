import React, { Component } from 'react';
import { fetchAreaDetails } from '../helpers.js';
import './AreasContainer.css';

class AreasContainer extends Component {
  constructor() {
  	super();
  	this.state = {
  		areas: [],
  		error: ''
  	}
  }

  componentDidMount() {
  	fetch('http://localhost:3001/api/v1/areas')
  	  .then(response => response.json())
  	  .then(data => fetchAreaDetails(data.areas))
  	  // .then(dataYo => console.log(dataYo))
  	  .then(areaData => this.setState({areas: areaData}))
  	.catch(error => this.setState({error}))
  }

  render() {
    const { areas } = this.state;
    return areas.map(location => {

      return (
      	<article>
          <h1>{location.shortName}</h1>
          <h2>{location.name}</h2>
          <p>{location.about}</p>
        </article>
      	)
    })
  }
}

export default AreasContainer
