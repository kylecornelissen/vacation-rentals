import React, {Component} from 'react';

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favoriteListings: []
    }
  }
  componentDidMount() {
    this.getFavorites();
  }
  getFavorites = () => {
    const {favorites} = this.props;
    favorites.forEach(listing => {
      listing = `/api/v1/listings/${listing}`
      fetch('http://localhost:3001' + listing)
        .then(res => res.json())
        .then(data => this.setState({favoriteListings: [...this.state.favoriteListings, data]}))
        .catch(error => console.log(error))
    });
  }
  toggleFavorite = (listingId, favorited) => {
    const {addFavorite} = this.props;
    addFavorite(listingId);
    favorited = !favorited;
    console.log(favorited);
  }
  render() {
    const {favoriteListings} = this.state;
    const {favorites} = this.props;
    if (favoriteListings.length > 0) {
      return <ul>{favoriteListings.map(favorite => {
        let favorited = favorites.includes(favorite.listing_id);
        return (
          <li key={favorite.listing_id}>
            <h1>{favorite.name}</h1>
            <img src={process.env.PUBLIC_URL + `/images/${favorite.listing_id}_b.jpg`} alt={`${favorite.name}`} />
            <button type="submit" onClick={() => this.toggleFavorite(favorite.listing_id, favorited)}>
              <img src={process.env.PUBLIC_URL + (favorited ? "/star-active.svg" : "/star.svg")}
                   alt="favorite button"
                   className="fav-btn"
              />
            </button>
          </li>
        )
      })} </ul>
    } else {
      return <h1> YOU HAVE NO FAVORITES </h1>
    }
  }
}

export default Favorites;
