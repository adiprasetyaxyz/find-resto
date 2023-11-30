/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking & Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one restaurant then unlike', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  // pause();

  I.seeElement('.cta-button');
  const firstRestaurant = locate('.cta-button').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  const likedRestaurantName = await I.grabTextFrom('.cta-button');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.seeElement('.cta-button');
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item__not__found');
});

Feature('Adding Restaurant Review');

Before(({ I }) => {
  I.amOnPage('/'); // Buka halaman utama
});

Scenario('Adding review to a restaurant', async ({ I }) => {
  // Memastikan ada elemen restoran yang dapat direview (cth: tombol cta-button)
  I.seeElement('.cta-button');

  // Memilih restoran pertama untuk direview
  const firstRestaurant = locate('.cta-button').first();
  I.click(firstRestaurant);

  // Menunggu halaman detail restoran dimuat
  I.waitForElement('.review-container');

  // Memastikan ada form untuk menambah review
  I.seeElement('#add-review');

  // Memasukkan detail review
  const review = {
    name: 'John Doe',
    review: 'Great food and excellent service!',
  };

  // Memasukkan review ke dalam form
  I.fillField('#userName', review.name);
  I.fillField('#userReview', review.review);

  // Mengirim review
  I.click('#submit');

  // Verifikasi bahwa review telah ditambahkan
  I.see(review.name);
  I.see(review.review);
});
