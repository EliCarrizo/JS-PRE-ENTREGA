const imageShoppingCar= document.querySelector("image#ShoppingCar")
const container = document.querySelector("div#container")
const inputSearch = document.querySelector("input#inputSearch")


function filterTrips(worth) {
    let result = trips.filter(trip => trip.name.toLowerCase().includes(worth.toLowerCase()))
    /*Ternary operator instead of if-else*/
    result.length > 0 ? console.table(result) : console.warn("Oops no matches! ❌👀")
}

function returnCardHTML(travel) {


return `<div class="card">
            <div><img class="card-image-top" src="${travel.image}" alt="Mocona"></div>
            <div class="card-name">${travel.name}</div>
            <div class="card-price">${travel.price}<a href="#" class="btn btn-primary">Cost $</a></div>
            <div class="card-body"><p class="card-text"></p>
            </div>
            <div class="card-button">
                <button class="button button-outline button-add=" id="${travel.id}" title="Add to cart"><img src="../Assets/img/img-cart.jpg" alt="cart"></button>
            </div>
        </div>
        
        `
}

function loadTrips(array) {
    //{ id:1, image: '../Assets/img/Mocona Falls.JPG', name: 'Mocona Falls', price: 100000}//
    container.innerHTML = ""
    array.forEach(travel => {
        container.innerHTML += returnCardHTML(travel)
    })
}

inputSearch.addEventListener("search", (e)=> {
    console.log(e.target.value)
})


/*Llamamos a la fucnion*/
loadTrips(trips)




  











