import axios from 'axios'; // Import the Axios library
let url = "https://restaurant-api.dicoding.dev/"
let medPictureUrl = "https://restaurant-api.dicoding.dev/images/medium/"

const getRestaurant = () => {
    const restaurantList = document.getElementById("restaurant-list");

    // Use Axios to make the HTTP request
    axios.get(`${url}/list`)
        .then(response => {
            const data = response.data;

            // Iterate through the restaurants
            data.restaurants.forEach(restaurant => {
                const card = document.createElement('div');
                card.setAttribute('class', 'card');

                const restaurantImage = document.createElement('img');
                restaurantImage.setAttribute('src', `${medPictureUrl}${restaurant.pictureId}`)

                const restaurantName = document.createElement('h3');
                restaurantName.innerText = `${restaurant.name}`;
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

                const restaurantDetailButton = document.createElement('button');
                restaurantDetailButton.setAttribute = ('class', 'detail-button')
                restaurantDetailButton.innerText = ('Check this Restaurant')

                card.appendChild(restaurantImage);
                card.appendChild(restaurantName);
                textWrap.appendChild(restaurantCity);
                textWrap.appendChild(restaurantRating);
                card.appendChild(textWrap);
                card.appendChild(restaurantDescription);
                card.appendChild(restaurantDetailButton)
                restaurantList.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error loading data:', error);
        });
}

export default getRestaurant;
