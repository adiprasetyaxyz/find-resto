import axios from 'axios'; // Import the Axios library

const getRestaurant = () => {
    const restaurantList = document.getElementById("restaurant-list");

    // Use Axios to make the HTTP request
    axios.get('./data/DATA.json')
        .then(response => {
            const data = response.data;

            // Iterate through the restaurants
            data.restaurants.forEach(restaurant => {
                const card = document.createElement('div');
                card.setAttribute('class', 'card');

                const restaurantImage = document.createElement('img');
                restaurantImage.setAttribute('src', restaurant.pictureId)

                const restaurantName = document.createElement('h3');
                restaurantName.innerHTML = `<a href="">${restaurant.name}</a>`;
                restaurantName.setAttribute('class', 'restaurant-name')

                const textWrap = document.createElement('div');
                textWrap.setAttribute('class','text-wrap');

                const restaurantRating = document.createElement("h4");
                restaurantRating.innerHTML = `<i class="fa-solid fa-star" style="color: #ffdd00;"></i> ${restaurant.rating}`;
                restaurantRating.setAttribute('class', 'restaurant-rating')

                const restaurantCity = document.createElement("h4");
                restaurantCity.innerHTML= `<i class="fa-solid fa-location-dot" style="color: #ffdd00;"></i> ${restaurant.city}`;
                restaurantRating.setAttribute('class', 'restaurant-city')

                const restaurantDescription = document.createElement('p');
                restaurantDescription.innerText = restaurant.description;
                restaurantDescription.setAttribute('class', 'restaurant-desc')

                card.appendChild(restaurantImage);
                card.appendChild(restaurantName);
                textWrap.appendChild(restaurantCity);
                textWrap.appendChild(restaurantRating);
                card.appendChild(textWrap);
                card.appendChild(restaurantDescription);
                restaurantList.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error loading data:', error);
        });
}

export default getRestaurant;
