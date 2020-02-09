import React, { Component } from 'react';
import './ListingsContainer.css';
import { Link } from 'react-router-dom';

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
          <img src={process.env.PUBLIC_URL + `/images/${listing.listing_id}_a.jpg`} />
          <Link to={`/areas/${listing.area_id}/listings/${listing.listing_id}`}><button type="submit">More Details</button></Link>
        </article>
      )
    });
  }
}

export default ListingsContainer;
