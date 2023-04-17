class buy {
    constructor(shoppingCart) {
        this.shoppingcar= shoppingCart
    }
    getSubtotal(){
        if (this.shoppingcar.length > 0) {/*Function de order superior*/
            return this.shoppingcar.reduce((acc, trip)=> acc + trip.price, 0)
        }
    }

}