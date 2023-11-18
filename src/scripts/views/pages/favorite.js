import RestaurantSource from "../../data/restaurant-data";

const favorite = {
  async render() {
    return `
        <h2>Favorite</h2>
      `;
  },

  async afterRender() {
    const favoriteRestaurants = await RestaurantSource.favoriteRestaurant();
    console.log(favoriteRestaurants);
  },
};

export default favorite;
