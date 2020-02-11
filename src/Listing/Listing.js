import React, { Component } from 'react';
import './Listing.css';

class Listing extends Component {
  constructor() {
    super();
    this.state = {
      listing: {},
      features: []
    };
  }
  componentDidMount() {
    const listingData = this.props.location.state.listing;
    this.setState({ listing: this.createListing(listingData),
                    features: this.getFeatures(listingData)
                 });
  }
  createListing = listingData => {
    return {
      id: listingData.listing_id,
      area_id: listingData.area_id,
      name: listingData.name,
      streetAddress: listingData.address.street,
      zip: listingData.address.zip,
      numBath: listingData.details.baths,
      numBed: listingData.details.beds,
      costPerNight: listingData.details.cost_per_night
    }
  }
  getFeatures = listingData => {
    return listingData.details.features.map(feat => {
      return feat
    });
  }
  toggleFavorite = listingId => {
    const {addFavorite} = this.props;
    addFavorite(listingId);
  }
  render() {
    const { listing, features } = this.state;
    return (
      <article className="listing_box" key={listing.id}>
      <article className="name_box">
        <h2 className="name_h2">{listing.streetAddress}, {listing.zip}</h2>
      </article>
        <h1>{listing.name}</h1>
        <h2>${listing.costPerNight}/night</h2>
        <p>Beds: {listing.numBed}</p>
        <p>Bath: {listing.numBath}</p>
        <div className="listing_img-container">
          <img className="listing_img" src={process.env.PUBLIC_URL + `/images/${listing.id}_a.jpg`} alt={`${listing.name} 1`} />
          <img className="listing_img" src={process.env.PUBLIC_URL + `/images/${listing.id}_b.jpg`} alt={`${listing.name} 2`} />
          <img className="main_listing-img listing_img" src={process.env.PUBLIC_URL + `/images/${listing.id}_c.jpg`} alt={`${listing.name} 3`} />
        </div>
        <ul>Features: {features.map(feat => {
          return (
            <li key={feat}>{feat}</li>
          )
        })}</ul>
        <button onClick={() => this.toggleFavorite(listing.id)}>Favorite</button>
        <article></article>
      </article>
    )
  }
}

export default Listing;
