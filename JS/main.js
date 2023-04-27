const shoppingcar= []

const trips = [{ image: '../Assets/img/Mocona Falls.JPG', code:1, type: 'Mocona Falls', price: 100000},
               { image: '../Assets/img/jaaukanigas.jpg', code:2, type: 'Jaaukanigas', price: 55000},
               { image: '../Assets/img/El soberbio .jpg', code:3, type: 'El soberbio-Misiones', price: 95000},
               { image: '../Assets/img/7 lakes.jpg', code:4, type: 'The 7 Lakes-Bariloche', price: 355000},
               { image: '../Assets/img/Esteros del ibera.jpg', code:5, type: 'Esteros del Iberá', price: 90000},
               { image: '../Assets/img/surf mdq.jpg', code:6, type: 'Mar del plata', price: 85000},
               { image: '../Assets/img/nazaret portugal.jpg', code:7, type: 'Nazaret-Portugal', price: 1250000},
               { image: '../Assets/img/mavericks.jpg', code:8, type: 'Mavericks-California', price: 2118000},
               { image: '../Assets/img/waimea hawaii.jpg', code:9, type: 'Waimea-Hawaii', price: 2500000},
               { image: '../Assets/img/gold coast australia.jpg', code:10, type: 'Gold coast-Australia', price: 2328000}]


const mensajeInicial = "Select ur trip:"

function searchTrip(code){
    let resultado = trips.find((trip)=>trip.code === parseInt(code))
    return resultado
}

function endBuy() {
    if(shoppingcar.length === 0) {
        console.warn("Empty 🛒")
        return
    }

   const shop = new buy(shoppingcar);
   alert("💰The cost of the shopping car is: ARS " + shop.getSubtotal())
   let answer = confirm("You want to confirm your payment?")
        if (answer === true) {
            alert('🛸 We confirm your payment: $ '+ shop.getSubtotal() + "\n Thank you for your purchase🤗")
            shoppingcar.length=0
        }

}

function seeShoppingcar() {
    console.table(shoppingcar)
}

function shop () {
    let code = prompt(mensajeInicial)
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
        shoppingcar.push(chosenTrip)

        let answer = confirm("Do you want to buy another trip? 🙊")
        if( answer === true) {
            shop()
        } else {
            endBuy()
        }
}

