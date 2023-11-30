import aboutUs from '../views/pages/about-us';
import favorite from '../views/pages/favorite';
import detail from '../views/pages/detail';
import showRestaurant from '../views/pages/restaurant';

const routes = {
  '/': showRestaurant, // default page
  '/restaurant': showRestaurant,
  '/favorite': favorite,
  '/detail/:id': detail,
  '/about-us': aboutUs,
};

export default routes;
