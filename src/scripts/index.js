import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';
// eslint-disable-next-line import/no-named-as-default
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const START = 3;
const NUMBER_OF_IMAGES = 20;

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#main-content'),
});

// getRestaurant();
window.addEventListener('hashchange', () => {
  app.renderPage();
});
window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
