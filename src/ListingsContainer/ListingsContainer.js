import React, { Component } from 'react';
import './ListingsContainer.css';

class ListingsContainer extends Component {
  constructor() {
    super();
    this.state = {
      listings: []
    }
  }
  componentDidMount() {
    const listings = this.props.location.state.listings;
    listings.forEach(listing => {
      fetch('http://localhost:3001' + listing)
        .then(res => res.json())
        .then(data => this.setState({listings: [...this.state.listings, data]}))
        .catch(error => console.log(error))
    });
  }
  render() {
    return this.state.listings.map(listing => {
      return (
        <article key={listing.listing_id}>
          <h1>{listing.name}</h1>
        </article>
      )
    });
  }
}

export default ListingsContainer;
