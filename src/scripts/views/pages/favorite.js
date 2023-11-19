import favoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantList } from '../template/template-creators';

const favorite = {
  async render() {
    return `
        <h2>Favorite</h2>
        <div id="restaurant-list" class="restaurant-list">
      `;
  },

  async afterRender() {
    const restaurants = await favoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurant-list');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantList(restaurant);
    });
  },
};

export default favorite;
