/*
- setItem() - permite crear una clave y asignarle un valor
- getItem()
- removeItem()
- clear()
    sessionStorage
*/

/*const inputName = document.querySelector("#inputName")
const inputAge  = document.querySelector("#inputAge")
const inputEmail  = document.querySelector("#inputEmail")
const inputProfession  = document.querySelector("#inputProfession")
const buttonSend= document.querySelector("button")

function createKeyInLS() {
    localStorage.setItem("myKey", "Travel Paradise")
}

function saveFormInLS() {
    const dataForm = {
                        name: inputName.value,
                        age: inputAge.value,
                        email: inputEmail.value,
                        profession: inputProfession.value
                      }

    localStorage.setItem("saveFormInLS", JSON.stringify(saveFormInLS))
}

/*
Objeto global JSON = JavaScript Object Notation
       datosDeFormulario.nombre //me devuelve el valor almacenado
        .parse()
        .stringify()
*/
/*
function retrieveFormData() {
    const dataForm = JSON.parse(localStorage.getItem("dataForm"))
            inputName.value = dataForm.name
            inputAge.value = dataForm.age
            inputEmail.value = dataForm.email
            inputProfession.value = dataForm.profession

}

retrieveFormData()

function removeDataFromLS() {
    localStorage.removeItem("age")
}

buttonSend.addEventListener("click", saveFormInLS)
*/