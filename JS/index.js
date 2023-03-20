/*
Variables &  constants
funciones- estructurar la lógica
condicional (if -else-switch)
utilizar un ciclo (for-while-dowhile)

prompt- confirm- alert

console log - warm - error

Texto / STRING=listado de viajes/tours
Prompt () = el usuario elige destino
        (condicional)
de el prompt >buscamos lo que ingreso en una lista
alert() le respondemos con el precio/costo/importe
confirm? preguntamos ¿deseas conocer algún precio de más?
TRUE =>seguimos en el ciclo while
FALSE =>gracias por su interes, adios!!!!

*/

let continuar = true
let importe = 0
let IVA = 0.21;

/* Login*/
function login() {
    let user = prompt("Insert your  User:")
    if (user.trim().length >6) {
        Userloggedin = user.trim()
        alert("🏳 Welcome to Travel paradise")
    } else {
        alert("Password contains an error.")
    }
}


/*
let precio = importe;
let iva = precio * 0.21;
let precioConIVA = precio + iva;

console.log("El precio del producto es: " + precio);
console.log("El IVA es: " + iva);
console.log("El precio con IVA es: " + precioConIVA );
*/

/*price final*/

function calcularPrecioFinal() {
    let precioDelProducto =prompt("Ingresa el valor del producto")
}

/*Options*/

const mensajeInicial = "Insert the code from your choose: \n" +
                        "a) Mocona Falls \n" +
                        "b) Jaaukanigas \n" +
                        "c) El soberbio-Misiones \n" +
                        "d) The 7 lakes- Bariloche \n" +
                        "e) Esteros del iberá \n"

function iniciarConsulta() {
    let resultado = prompt(mensajeInicial)
        if (resultado !== "a" && resultado !== "b" && resultado !== "c" && resultado !== "d" && resultado !== "e") {
            alert("💥 Elegir una opción.")
    }    else {
        switch(resultado) {
            case "a":
                alert(" 💲 Mocona Falls tiene un valor de $12.000")
                importe = 12000
                break
            case "b":
                alert(" 💲 Jaaukanigas tiene un valor de $45.000")
                importe = 45000
                break
            case "c":
                alert(" 💲 El soberbio-Misiones tiene un valor de $80.000")
                importe = 80000
                break
            case "d":
                alert(" 💲 The 7 lakes-Bariloche tiene un valor de $155.000")
                importe = 155000
                break
            case "e":
                alert(" 💲 Esteros del Iberá tiene un valor de $90.000")
                importe = 90000
                break
            default:
                console.error("👩‍🚀 Houston tenemos un problema, no entendí tu elección")
        }

    }

}
/*Calculate IVA*/

function calcularIVA(importe) {
    if (parseFloat(importe)) {
        let resultado = importe * IVA
        console.log("El importe + IVA es de ", resultado)
    }
}
/*Ask about price*/
function  preguntarPrecios(){
    while(continuar) {
        iniciarConsulta()
        continuar = confirm("¿Deseas seguir consultando otro viaje?")
    }
    alert("Gracias, vuelvas prontos! ☺")
}




function pideDatos(){
    var importeSinImpuestos, tipoProducto, importeConImpuestos;
    var tipoProducto2 = new Array();
    alert('Empieza la primera parte del ejercicio CU01122E.')
    importeSinImpuestos = prompt('Introduzca el importe sin impuestos: ');
    tipoProducto = prompt('Introduzca el tipo de producto(1, 2 o 3): ');
    importeSinImpuestos = Number(importeSinImpuestos);
    tipoProducto = Number(tipoProducto);
    if (tipoProducto==1 || tipoProducto==2 || tipoProducto==3){
        importeConImpuestos = obtenerImporteConImpuestos(importeSinImpuestos, tipoProducto);
        alert('El importe con impuesto es: ' + importeConImpuestos);
    }else{
        alert('El tipo de producto es erroneo. \nNo se puede calcular el importe con impuesto.');
    }
    alert('Empieza la segunda parte del ejercicio CU01122E.')
    tipoProducto2 = obtenerImporteConImpuestos2(importeSinImpuestos)
    alert('Para el tipo de producto 0 el valor es ' + tipoProducto2[0]);
    alert('Para precio sin impuestos ' + importeSinImpuestos + ' de tipo de producto 1(21%), el importe es ' + tipoProducto2[1]);
    alert('Para precio sin impuestos ' + importeSinImpuestos + ' de tipo de producto 2(10%), el importe es ' + tipoProducto2[2]);
    alert('Para precio sin impuestos ' + importeSinImpuestos + ' de tipo de producto 3(5%), el importe es ' + tipoProducto2[3]);
}
function obtenerImporteConImpuestos(importeSinImpuestos, tipoProducto) {
    var importeConImpuestos;
    switch(tipoProducto){
        case 1:
            impuesto = 1.21;
            break;
        case 2:
            impuesto = 1.10;
            break;
        case 3:
            impuesto = 1.05;
            break;
    }
    return importeConImpuestos = (importeSinImpuestos*impuesto);
}
function obtenerImporteConImpuestos2(importeSinImpuestos){
    var resultado=[];
    resultado =[undefined, (importeSinImpuestos*1.21), (importeSinImpuestos*1.10), (importeSinImpuestos*1.05)]
    return resultado;
}
