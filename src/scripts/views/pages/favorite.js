import favoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantList } from '../template/template-creators';

const favorite = {
  async render() {
    return `
        <h2 id='mainContent' tabindex="0">Favorite</h2>
        <div id="restaurant-list" class="restaurant-list">
      `;
  },

  async afterRender() {
    const restaurants = await favoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurant-list');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantList(restaurant);
    });
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });
  },
};

export default favorite;
