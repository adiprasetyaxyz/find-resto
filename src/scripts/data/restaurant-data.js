import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async restaurantList() {
    const response = await axios.get(API_ENDPOINT.RESTAURANT_LIST);
    const { restaurants } = response.data; // Ubah sesuai dengan struktur respons API

    return restaurants || []; // Mengembalikan restaurants atau array kosong jika tidak ada data
  }

  static async favoriteRestaurant() {
    try {
      const response = await axios.get(API_ENDPOINT.FAVORITE);
      const { results } = response.data; // Ubah sesuai dengan struktur respons API

      return results || []; // Mengembalikan results atau array kosong jika tidak ada data
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      return [];
    }
  }

  static async detailRestaurant(id) {
    const response = await axios.get(API_ENDPOINT.DETAIL(id));
    const { restaurant } = response.data;
    return restaurant;
  }
}

export default RestaurantSource;
