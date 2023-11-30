import RestaurantSource from '../../data/restaurant-data';
import { createRestaurantList, createHero } from '../template/template-creators';

const showRestaurant = {
  async render() {
    return `
      <div id='hero'></div>
      <div id="started">
      <h2>Lest Discover Top Restaurant</h2>
      <p>This website is an online resource specifically designed to provide information about various restaurants. The primary purpose of this site is to assist users in discovering the best restaurants in various locations while also offering essential information such as menus, locations, reviews, and more.</p>
    </div>
    <div id="promo">
    <div class="promo-card">
      <div class="promo-wrapper">
      <h2>All Restaurant</h2>
      <h3>Discount 20% Off</h3>
      <button class="promo-button">Reedem Promo</button>
      </div>
      <img src="./images/logo/food.png" alt="food-ilustration">
    </div>
    <div class="promo-card">
      <div class="promo-wrapper">
        <h2>Bali Location</h2>
        <h3>Discount 30% Off</h3>
        <button class="promo-button">Reedem Promo</button>
      </div>
      <img src="./images/logo/food.png" alt="food-ilustration">
    </div>
  </div>
      <h2 class="title" id='mainContent' tabindex="0">Restaurant List</h2>
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
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });
  },
};

export default showRestaurant;
