import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import favoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Like and Dislike Restaurant', () => {
  let likeButtonContainer;
  let restaurant;

  beforeEach(() => {
    likeButtonContainer = document.createElement('div');
    restaurant = { id: 'restaurantId' /* tambahkan properti lain jika diperlukan */ };
  });

  afterEach(() => {
    likeButtonContainer.innerHTML = '';
  });

  it('should render like button when restaurant is not liked', async () => {
    await LikeButtonInitiator.init({ likeButtonContainer, restaurant });

    const likeButton = likeButtonContainer.querySelector('#likeButton');
    expect(likeButton).toBeTruthy();
  });

  it('should render liked button when restaurant is already liked', async () => {
    // Menyimulasikan restoran sudah disukai
    jest.spyOn(favoriteRestaurantIdb, 'getRestaurant').mockImplementation(async () => ({ id: 'restaurantId' }));

    await LikeButtonInitiator.init({ likeButtonContainer, restaurant });

    const likedButton = likeButtonContainer.querySelector('#likeButton');
    expect(likedButton).toBeTruthy();
  });

  it('should be able to like and then dislike a restaurant', async () => {
    await LikeButtonInitiator.init({ likeButtonContainer, restaurant });

    const likeButton = likeButtonContainer.querySelector('#likeButton');
    likeButton.click();

    let likedButton = likeButtonContainer.querySelector('#likeButton');
    expect(likedButton).toBeTruthy();

    likeButton.click();

    likedButton = likeButtonContainer.querySelector('#likeButton');
    expect(likedButton).toBeFalsy();
  });

  // Menambahkan pengujian untuk favoriteRestaurantIdb
  it('should be able to add and delete a restaurant from favoriteRestaurantIdb', async () => {
    await favoriteRestaurantIdb.putRestauran(restaurant);

    const storedRestaurant = await favoriteRestaurantIdb.getRestaurant(restaurant.id);
    expect(storedRestaurant).toEqual(restaurant);

    await favoriteRestaurantIdb.deleteRestaurant(restaurant.id);

    const deletedRestaurant = await favoriteRestaurantIdb.getRestaurant(restaurant.id);
    expect(deletedRestaurant).toBeFalsy();
  });
});
