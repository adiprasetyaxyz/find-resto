import RestaurantSource from '../../data/restaurant-data';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../template/template-creators';

const detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantsContainer = document.querySelector('#restaurant');
    restaurantsContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
  },
};

export default detail;
