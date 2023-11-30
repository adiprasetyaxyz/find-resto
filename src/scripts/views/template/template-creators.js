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
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createRestaurantDetailTemplate = (restaurant) => `

<img src="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}" alt='gambar restaurant ${restaurant.name}' />
<h3 class="restaurant-name" id='mainContent' tabindex="0">${restaurant.name}</h3>
<p>Kota : ${restaurant.city}</p>
<p>Rating : ${restaurant.rating}</p>
      <p>Alamat : ${restaurant.address}</p>
      <p>Kategori : ${restaurant.categories.map((category) => category.name).join(', ')}</p>
      <p>Deskripsi : ${restaurant.description}</p>
      <div class='menu-wrapper'>
      <div class='card-menu'>
      <p class='menu-list'><strong>Menu Makanan</strong><br> ${restaurant.menus.foods.map((foods) => foods.name).join('<br> ')}</p>
      </div>
      <div class='card-menu'>
      <p class='menu-list'><strong>Menu Minuman</strong><br> ${restaurant.menus.drinks.map((drinks) => drinks.name).join('<br> ')}</p>
      </div>
      </div>

`;
const createHero = () => `
<picture>
<source media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg">
        <img src="./images/hero-image_2-large.jpg"  alt="hero-image" />
        </picture>
        <div id="hero-text">
          <h1>Find Resto</h1>
          <button>Top Restaurants</button>
          
        </div>
      `;

const createRestaurantList = (restaurant) => `
  <div class="card restaurant-item">
    <img src="${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}" class="lazyload" alt='gambar restaurant ${restaurant.name}' />
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
    <button class='cta-button' onclick="window.location.href='/#/detail/${restaurant.id}'">Check this Restaurant</button>
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
