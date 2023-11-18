import RestaurantSource from '../../data/restaurant-data';
import { createRestaurantList, createHero } from '../template/template-creators';

const showRestaurant = {
  async render() {
    return `
      <div id='hero'></div>
      <h2 class="title">Restaurant List</h2>
      <div id='restaurant-list'></div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantsContainer = document.querySelector('#restaurant-list');
    const heroContainer = document.querySelector('#hero');
    heroContainer.innerHTML += createHero();

    // Bersihkan konten sebelum menambahkan elemen baru
    restaurantsContainer.innerHTML = '';

    restaurants.forEach((restaurant) => {
      // Tambahkan hasil createRestaurantList(restaurant) ke dalam restaurantsContainer
      restaurantsContainer.innerHTML += createRestaurantList(restaurant);
    });
  },
};

export default showRestaurant;
