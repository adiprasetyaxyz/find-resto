import CONFIG from '../../globals/config';

const createRestaurantReviewTemplate = (restaurant) => `
  <h2>Customer Reviews</h2>
  <br>
  <div class="restaurant-reviews">
    ${restaurant.customerReviews.map((review) => `
      <div class="customer-review">
        <b>${review.name}</b>
        <p>${review.date}</p>
        <p>${review.review}</p>
      </div>
    `).join('')}
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <img src="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}" />
      <h3 class="restaurant-name">${restaurant.name}</h3>
      <p>Kota : ${restaurant.city}</p>
      <p>Alamat : ${restaurant.address}</p>
      <p>Kategori : ${restaurant.categories.map((category) => category.name).join(', ')}</p>
      <p>Deskripsi : ${restaurant.description}</p>
      <div class='card'>
      <p>Menu Makanan : ${restaurant.menus.foods.map((foods) => foods.name).join('<br> ')}</p>
      </div>
      <div class='card'>
      <p>Menu Minuman : ${restaurant.menus.drinks.map((drinks) => drinks.name).join('<br> ')}</p>
      </div>
      <p>Rating : ${restaurant.rating}</p>

`;
const createHero = () => `<div id="hero">
        <img src="./images/heros/hero-image_2.jpg"  alt="hero-image" />
        <div id="hero-text">
          <h1>Find Resto</h1>
          <button>Top Restaurants</button>
          
        </div>
      </div>`;

const createRestaurantList = (restaurant) => `
  <div class="card">
    <img src="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}" />
    <h3 class="restaurant-name">${restaurant.name}</h3>
    <div class="text-wrap">
      <h4>
        <i class="fa-solid fa-location-dot" style="color: #ffdd00;"></i> ${restaurant.city}
      </h4>
      <h4 class="restaurant-rating">
        <i class="fa-solid fa-star" style="color: #ffdd00;"></i> ${restaurant.rating}
      </h4>
    </div>
    <p class="restaurant-desc">
      ${restaurant.description}
    </p>
    <button href><a href="/#/detail/${restaurant.id}">Check this Restaurant</a></button>
  </div>
`;

export {
  createRestaurantList,
  createHero,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createRestaurantReviewTemplate,
};
