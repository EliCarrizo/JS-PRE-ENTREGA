
let continuar = true
let importe = 0
const IVA = 1.21 //Value added tax/ TAX

/* Logins*/
function login() {
    let user = prompt("Insert your  User:")
    if (user.trim().length >6) {
        Userloggedin = user.trim()
        alert("🏳 Welcome to Travel paradise")
    } else {
        alert("🚨Password contains an error🚨")
    }
}

function go() {
    if (document.form.password.value=='PASSWORD' && document.form.login.value=='USER'){
            document.form.submit();
        }
        else{
             alert(" ❌Please login, correct username and password❌");
        }
}

/*Options*/

const mensajeInicial = "Insert the code from your choose: \n" +
                        "1) Mocona Falls \n" +
                        "2) Jaaukanigas \n" +
                        "c) El soberbio-Misiones \n" +
                        "4) The 7 lakes- Bariloche \n" +
                        "5) Esteros del iberá \n"

function iniciarConsulta() {
    let resultado = prompt(mensajeInicial)
        if (resultado !== "1" && resultado !== "2" && resultado !== "3" && resultado !== "4" && resultado !== "5") {
            alert("💥 Choose one option!.")
    }    else {
        switch(resultado) {
            case "1":
                alert(" 💲 Mocona Falls cost $12.000")
                importe = 12000
                break
            case "2":
                alert(" 💲 Jaaukanigas cost $45.000")
                importe = 45000
                break
            case "c":
                alert(" 💲 El soberbio-Misiones cost $80.000")
                importe = 80000
                break
            case "4":
                alert(" 💲 The 7 lakes-Bariloche cost $155.000")
                importe = 155000
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
function  preguntarPrecios() {
    while(continuar) {
        iniciarConsulta()
        continuar = confirm("¿Deseas seguir consultando otro viaje?")
    }
    alert("Gracias, vuelvas prontos! ☺")
}

/*price final*/

function calcularPrecioFinal() {
    let precioDelProducto =prompt("Ingresa el valor del producto")
    console.log("The amount is 💸",precioDelProducto )
}


/*TAX*/

function calcularIva(importe) {
    if (parseFloat (importe)) {
        let resultado = importe * IVA
        console.log("eL importe + IVA it is 💸 ", resultado)
    }
}
