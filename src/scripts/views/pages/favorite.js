import favoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter';
import FavoriteRestaurantView from './liked-restaurants/favorite-restaurant-view';

const view = new FavoriteRestaurantView();

const favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    // eslint-disable-next-line no-new
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: favoriteRestaurantIdb });
  },
};

export default favorite;
