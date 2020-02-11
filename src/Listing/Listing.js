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
      costPerNight: listingData.details.cost_per_night,
      favorited: this.props.favorites.includes(listingData.listing_id)
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
    const listing = {...this.state.listing};
    listing.favorited = !this.state.listing.favorited;
    this.setState({listing});
  }
  render() {
    const { listing, features } = this.state;
    return (
      <article className="listing_box" key={listing.id}>
        <article className="name_box">
          <h1 className="name_h1">{listing.name}</h1>
        </article>
        <div className="listing_flex-container">
          <article className="feature_list-container">
            <h2 className="listing_address">{listing.streetAddress}, {listing.zip}</h2>
            <h2>${listing.costPerNight}/night</h2>
            <p className="feature_text">Beds: {listing.numBed}</p>
            <p className="feature_text"> Bath: {listing.numBath}</p>
            <article>
              <ul className="listing_feature_list">Features: {features.map(feat => {
                return (
                  <li key={feat}>{feat}</li>
                )
              })}</ul>
            </article>
          </article>
        </div>
        <div className="listing_img-container">
          <img className="listing_img" src={process.env.PUBLIC_URL + `/images/${listing.id}_a.jpg`} alt={`${listing.name} 1`} />
          <img className="listing_img" src={process.env.PUBLIC_URL + `/images/${listing.id}_b.jpg`} alt={`${listing.name} 2`} />
          <img className="main_listing-img listing_img" src={process.env.PUBLIC_URL + `/images/${listing.id}_c.jpg`} alt={`${listing.name} 3`} />
        </div>
        <button type="submit" onClick={() => this.toggleFavorite(listing.id)}>
          <img src={process.env.PUBLIC_URL + (listing.favorited ? "/star-active.svg" : "/star.svg")}
               alt="favorite button"
               className="fav-btn"
          />
        </button>
        <article></article>
      </article>
    )
  }
}

export default Listing;
