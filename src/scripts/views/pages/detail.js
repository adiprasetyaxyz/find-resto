/* eslint-disable no-console */
import LikeButtonInitiator from '../../utils/like-button-initiator';
import RestaurantSource from '../../data/restaurant-data';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate, createRestaurantReviewTemplate } from '../template/template-creators';

const detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div class="review-container" >
      <div class="user-review">
        <form id='add-review'>
          <label for="name-review" class="caption-review">Name</label><br>
          <input type="text" id="userName" placeholder="Your name"><br><br>
          <label for="input-review" class="caption-review">Review</label><br>
          <input type="text" id="userReview" placeholder="Your review"><br><br>
          <button id="submit">Submit</button>
        </form>
      </div>
    </div>
      <div id="reviewResto"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantsContainer = document.querySelector('#restaurant');
    const submitButton = document.querySelector('#submit');
    const restaurantReviewContainer = document.querySelector('#reviewResto');
    restaurantReviewContainer.innerHTML = createRestaurantReviewTemplate(restaurant);
    restaurantsContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });

    submitButton.addEventListener('click', (event) => {
      event.preventDefault();

      const userName = document.querySelector('#userName').value;
      const userReview = document.querySelector('#userReview').value;
      const customerReview = document.createElement('div');
      const containerReview = document.querySelector('.restaurant-reviews');

      fetch('https://restaurant-api.dicoding.dev/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: restaurant.id,
          name: userName,
          review: userReview,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          customerReview.classList.add('customer-review');
          customerReview.innerHTML += `
          <b>${userName}</b>
          <p>${new Date().toDateString()}</p>
          <p>${userReview}</p>
        `;
          containerReview.appendChild(customerReview);
        })
        .catch((error) => {
          console.error(error);
        });
    });
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });
  },
};

export default detail;
