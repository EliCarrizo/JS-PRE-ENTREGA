const shoppingcar= [{ image: '🌄', code:1, type: 'Mocona Falls', price: 100000}]

const trips = [{ image: '🌄', code:1, type: 'Mocona Falls', price: 100000},
               { image: '⛺', code:2, type: 'Jaaukanigas', price: 55000},
               { image: '⛺', code:3, type: 'El soberbio-Misiones', price: 95000},
               { image: '⛺', code:4, type: 'The 7 Lakes-Bariloche', price: 355000},
               { image: '⛺', code:5, type: 'Esteros del Iberá', price: 90000},
               { image: '⛺', code:6, type: 'Mar del plata', price: 85000},
               { image: '⛺', code:7, type: 'Nazaret-Portugal', price: 1250000},
               { image: '⛺', code:8, type: 'Mavericks-California', price: 2118000},
               { image: '⛺', code:9, type: 'Waimea-Hawaii', price: 2500000},
               { image: '⛺', code:10, type: 'Gold coast-Australia', price: 2328000}]


const messageInitial = "Select ur trip:"

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