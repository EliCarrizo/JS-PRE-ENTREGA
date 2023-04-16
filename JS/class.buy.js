class buy {
    constructor(shoppingCart) {
        this.shoppingcar= shoppingCart
    }
    getSubtotal(){
        if (this.shoppingcar.length > 0) {/*Funcion de orden superior*/
            return this.shoppingcar.reduce((acc, trip)=> acc + trip.price, 0)
        }
    }

}
/*const shop = new buy(shoppingcar);*/
/*alert("The cost of the shopping car is: ARS " + shop.getSubtotal())*/
/*let acc= trip.price
acc= +=otherTrip.price*/
