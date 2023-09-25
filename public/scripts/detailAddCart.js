const formularioCarrito = document.getElementById('form-addCarrito');

formularioCarrito.addEventListener("change", () => {
    // Crea un objeto FormData basado en el formulario
    const formData = new FormData(formularioCarrito);
    const buttonFormCar = document.querySelector("#form-addCarrito button")

    // Puedes acceder a los valores de los campos del formulario directamente desde el objeto formData
    const sizes = formData.getAll('sizes');
    const colors = formData.getAll('colors');


    if (sizes.length > 0 && colors.length > 0) {
        buttonFormCar.disabled = false
        buttonFormCar.style.background = "green"
    }
    else {
        buttonFormCar.disabled = true
        buttonFormCar.style.background = "gray"
    }

})

// TODOS LOS BOTONES DE CUADROS DE TAMAÑOS: XS S M L XL
const sizesOption = Object.values(document.querySelectorAll(".form-field .size-label"));

for (let sizeOption of sizesOption) {
    sizeOption.addEventListener("click", () => {

        if (sizeOption.classList.contains("label-color-selected")) {
            sizeOption.classList.remove("label-color-selected")
        }
        else {
            sizeOption.classList.add("label-color-selected")
        }

    })
}

// Obtiene todos los elementos de entrada de tamaño
const colorsOption = Object.values(document.querySelectorAll(".form-field-color label"));
const colorsOptionInputs =  Object.values(document.querySelectorAll(".form-field-color input"));
for (let [index, colorOption] of colorsOption.entries()) {
    
    colorOption.addEventListener("click", () => {
        if (colorOption.classList.contains("form-field-color-selected")) {
            colorOption.classList.remove("form-field-color-selected")
            colorsOptionInputs[index].value = "";

        }
        else {
            colorOption.classList.add("form-field-color-selected")
            colorsOptionInputs[index].value = colorsOptionInputs[index].id;
        }

    })
}