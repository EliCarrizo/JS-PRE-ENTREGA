class buy {
    constructor(shoppingCart) {
        this.shoppingcar= shoppingCart
    }
    getSubtotal(){
        if (this.shoppingcar.length > 0) {
            return this.shoppingcar.reduce((acc, trip)=> acc + trip.price, 0)
        }
    }

}
/*const shop = new buy(shoppingcar);*/

/*let acc= trip.price
acc= +=otherTrip.price*/
