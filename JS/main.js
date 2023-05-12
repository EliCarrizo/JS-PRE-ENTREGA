const shoppingCart= []

const trips = [{ id:1, image: '../Assets/img/Mocona Falls.JPG', name: 'Mocona Falls', price: 100000},
               { id:2, image: '../Assets/img/jaaukanigas.jpg', name: 'Jaaukanigas', price: 55000},
               { id:3, image: '../Assets/img/El soberbio .jpg', name: 'El soberbio-Misiones', price: 95000},
               { id:4, image: '../Assets/img/7 lakes.jpg', name: 'The 7 Lakes-Bariloche', price: 355000},
               { id:5, image: '../Assets/img/Esteros del ibera.jpg', name: 'Esteros del Iberá', price: 90000},
               { id:6, image: '../Assets/img/surf mdq.jpg', name: 'Mar del plata', price: 85000},
               { id:7, image: '../Assets/img/nazaret portugal.jpg', name: 'Nazaret-Portugal', price: 1250000},
               { id:8, image: '../Assets/img/mavericks.jpg', name: 'Mavericks-California', price: 2118000},
               { id:9, image: '../Assets/img/waimea hawaii.jpg', name: 'Waimea-Hawaii', price: 2500000},
               { id:10, image: '../Assets/img/gold coast australia.jpg', name: 'Gold coast-Australia', price: 2328000}]

const messInitial = "Select ur trip:"

function searchTrip(id){
    let result = trips.find((trip)=>trip.id === parseInt(id))
    return result
}

function endBuy() {
    if(shoppingCart.length === 0) {
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
    let id = prompt(messageInitial)
        if (!parseInt(id)) {
            alert("❌ You entered the code wrong")
            let answer = confirm("Do you want to try again? 👀")
                if (answer === true) {
                    shop()
                }
                return

        }
    let chosenTrip = searchTrip(id)
        if(chosenTrip === undefined) {
            alert("❌ You entered the code wrong")
            let answer = confirm("Do you want to try again? 👀")
                if (answer === true) {
                    shop()
                }
            return
        }
        alert(chosenTrip.image + ' ' + chosenTrip.name + '- Your trip has been added to the cart 🛒😉')
        shoppingCart.push(chosenTrip)

        let answer = confirm("Do you want to buy another trip? 🙊")
        if( answer === true) {
            shop()
        } else {
            endBuy()
        }
}

