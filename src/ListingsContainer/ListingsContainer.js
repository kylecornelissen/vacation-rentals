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
  toggleFavorite = (listingId, favorited) => {
    const {addFavorite} = this.props;
    addFavorite(listingId);
    favorited = !favorited;
  }
  render() {
    const {favorites} = this.props;
    return this.state.listings.map(listing => {
      let favorited = favorites.includes(listing.listing_id);
      return (
        <article key={listing.listing_id}>
          <h1>{listing.name}</h1>
          <img src={process.env.PUBLIC_URL + `/images/${listing.listing_id}_a.jpg`} alt={`${listing.name}`} />
          <button type="submit" onClick={() => this.toggleFavorite(listing.listing_id, favorited)}>
            <img src={process.env.PUBLIC_URL + (favorited ? "/star-active.svg" : "/star.svg")}
                 alt="favorite button"
                 className="fav-btn"
            />
          </button>
          <Link to={{
            pathname: `/areas/${listing.area_id}/listings/${listing.listing_id}`,
            state: {listing}
          }}>
            <button type="submit">More Details</button>
          </Link>
        </article>
      )
    });
  }
}

export default ListingsContainer;
