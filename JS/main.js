const shoppingCart= []

const trips = [{ code:1, image: '../Assets/img/Mocona Falls.JPG', type: 'Mocona Falls', price: 100000},
               { code:2, image: '../Assets/img/jaaukanigas.jpg', type: 'Jaaukanigas', price: 55000},
               { code:3, image: '../Assets/img/El soberbio .jpg', type: 'El soberbio-Misiones', price: 95000},
               { code:4, image: '../Assets/img/7 lakes.jpg', type: 'The 7 Lakes-Bariloche', price: 355000},
               { code:5, image: '../Assets/img/Esteros del ibera.jpg', type: 'Esteros del Iberá', price: 90000},
               { code:6, image: '../Assets/img/surf mdq.jpg', type: 'Mar del plata', price: 85000},
               { code:7, image: '../Assets/img/nazaret portugal.jpg', type: 'Nazaret-Portugal', price: 1250000},
               { code:8, image: '../Assets/img/mavericks.jpg', type: 'Mavericks-California', price: 2118000},
               { code:9, image: '../Assets/img/waimea hawaii.jpg', type: 'Waimea-Hawaii', price: 2500000},
               { code:10, image: '../Assets/img/gold coast australia.jpg', type: 'Gold coast-Australia', price: 2328000}]


const messInitial = "Select ur trip:"

function searchTrip(code){
    let result = trips.find((trip)=>trip.code === parseInt(code))
    return result
}

function endBuy() {
    if(shoppingCar.length === 0) {
        console.warn("Empty 🛒")
        return
    }

   const shop = new buy(shoppingCart);
   alert("💰The cost of the shopping cart is: ARS " + shop.getSubtotal())
   let answer = confirm("You want to confirm your payment?")
        if (answer === true) {
            alert('🛸 We confirm your payment: $ '+ shop.getSubtotal() + "\n Thank you for your purchase🤗")
            shoppingCart.length=0
        }

}

function seeShoppingCart() {
    console.table(shoppingCart)
}

function shop () {
    let code = prompt(messageInitial)
        if (!parseInt(code)) {
            alert("❌ You entered the code wrong")
            let answer = confirm("Do you want to try again? 👀")
                if (answer === true) {
                    shop()
                }
                return

        }
    let chosenTrip = searchTrip(code)
        if(chosenTrip === undefined) {
            alert("❌ You entered the code wrong")
            let answer = confirm("Do you want to try again? 👀")
                if (answer === true) {
                    shop()
                }
            return
        }
        alert(chosenTrip.image + ' ' + chosenTrip.type + '- Your trip has been added to the cart 🛒😉')
        shoppingCart.push(chosenTrip)

        let answer = confirm("Do you want to buy another trip? 🙊")
        if( answer === true) {
            shop()
        } else {
            endBuy()
        }
}

