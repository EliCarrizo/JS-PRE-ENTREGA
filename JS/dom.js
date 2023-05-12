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
        </div>`
}

function loadTrips(array) {
    //{ id:1, image: '../Assets/img/Mocona Falls.JPG', name: 'Mocona Falls', price: 100000}//
    container.innerHTML = ""
    array.forEach(travel => {
        container.innerHTML += returnCardHTML(travel)
    })
    activateClickButtons()
}

inputSearch.addEventListener("search", (e)=> {
    filterTrips(e.target.value)
})

function activateClickButtons () {
    const buttons =document.querySelectorAll("button.button-outline.button-add")
    for (const button of buttons) {
        
        button.addEventListener("click", ()=> {
            let result = trips.find(trip => trip.id === parseInt(button.id))
                shoppingCar.push(result)
                saveShoppinCar()
        })
        }
}

function saveShoppinCar() {
    localStorage.setItem("shoppingCarTrips", JSON.stringify(shoppingCar))
}

function recoverShoppingCar() {
    const shoppingCarTemporal = JSON.parse(localStorage.getItem("shoppingCarTrips")) || []
    shoppingCar.push(...shoppingCarTemporal)
}

loadTrips(trips)




  











