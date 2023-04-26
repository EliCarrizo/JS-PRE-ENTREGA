const imgShoppingCar= document.getElementById("imgShoppingCar")
const container = document.getElementById("container")
const inputSearch = document.querySelector("input#inputSearch")
const shoppingCar= []

function filterTrips(worth) {
    const result = trips.filter(trip => trip.type.toLowerCase().includes(worth.toLowerCase()))
    /*Ternary operator instead of if-else*/
    result.length > 0 ? console.table(result) : console.warn("Oops no matches! ❌👀")
}