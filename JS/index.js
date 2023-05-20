
let continuar = true
let importe = 0
const IVA = 1.21 //Value added tax/ TAX


/*Options*/

const messageInitial = "Insert the code from your choose: \n" +
                        "1) Mocona Falls \n" +
                        "2) Jaaukanigas \n" +
                        "c) El soberbio-Misiones \n" +
                        "4) The 7 lakes- Bariloche \n" +
                        "5) Esteros del iberá \n"

function initialConsult() {
    let result = prompt(messageInitial)
        if (result !== "1" && result !== "2" && result !== "3" && result !== "4" && result !== "5") {
            alert("💥 Choose one option!.")
    }    else {
        switch(result) {
            case "1":
                alert(" 💲 Mocona Falls cost $12.000")
                importe = 100000
                break
            case "2":
                alert(" 💲 Jaaukanigas cost $45.000")
                importe = 55000
                break
            case "c":
                alert(" 💲 El soberbio-Misiones cost $80.000")
                importe = 95000
                break
            case "4":
                alert(" 💲 The 7 lakes-Bariloche cost $155.000")
                importe = 355000
                break
            case "5":
                alert(" 💲 Esteros del Iberá cost $90.000")
                importe = 90000
                break
            default:
                console.error("👩‍🚀 Houston we have a problem, I did not understand your choice")
        }

    }

}

/*Ask about price*/
function  askPrice() {
    while(continuar) {
        initialConsult()
        continuar = confirm("Do you want to continue consulting another trip?")
    }
    alert("Thanks, come back soon! ☺")
}

/*price final*/

function calculateFinalPrice() {
    let  PriceOfTheProduct =prompt("Enter the value of the product")
    console.log("The amount is 💸",riceOfTheProduct )
}


/*TAX*/

function calcularIva(importe) {
    let resultado = prompt("Insert your price")
    if (parseFloat(importe)) {
        let resultado = importe * IVA
        console.log("eL importe + IVA it is 💸 ", resultado)
    }
}

function Person (literal) {
    this.name = literal.name;
    this.age = literal.age;
    this.street = literal.street;
}

const personal = new Person ({ name: "Carl", age: 32, street: "choose it"});