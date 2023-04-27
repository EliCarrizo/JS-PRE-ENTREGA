const imgShoppingCar= document.querySelector("img#ShoppingCar")
const container = document.querySelector("div#container")
const inputSearch = document.querySelector("input#inputSearch")
const shoppingCar= []

function filterTrips(worth) {
    const result = trips.filter(trip => trip.type.toLowerCase().includes(worth.toLowerCase()))
    /*Ternary operator instead of if-else*/
    result.length > 0 ? console.table(result) : console.warn("Oops no matches! ❌👀")
}

function returnCardHTML(trip) {
    //{ image: '🌄', code:1, type: 'Mocona Falls', price: 100000}//

return `<div class="card">
            <img class="card-image-top" src="${trip.image}" alt="Mocona">
            <div class="card-name">${trip.type}</div>
            <div class="card-price">${trip.price}</div>
            <div class="card-body">
                <h5 class="card-title">Mocona Falls</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Cost $100.000</a>
            </div>
            <div class="card-button">
                <button class="button button-outline button-add="${trip.id}" title="Add to cart"><img src="../Assets/img/img-cart.jpg" alt="cart"></button>
            </div>
        </div>`
}

function loadTrips(array){
    //{ image: '🌄', code:1, type: 'Mocona Falls', price: 100000}//
    array.forEach(trip => {
        container.innerHTML += returnCardHTML(trip)
    });
}
loadTrips(trips)


