const formularioCarrito = document.getElementById('form-addCarrito');

formularioCarrito.addEventListener("change", () => {
    // Crea un objeto FormData basado en el formulario
    const formData = new FormData(formularioCarrito);
    const buttonFormCar = document.querySelector("#form-addCarrito button")


    // Puedes acceder a los valores de los campos del formulario directamente desde el objeto formData
    const sizes = formData.getAll('sizes');
    const colors = formData.getAll('colors');

    console.log(sizes, colors)

    if (sizes.length > 0 && colors.length > 0) {
        buttonFormCar.disabled = false
        buttonFormCar.style.background = "green"
    }
    else {
        buttonFormCar.disabled = true
        buttonFormCar.style.background = "gray"
    }
})

// Obtiene todos los elementos de entrada de tamaño
const sizesOption = Object.values(document.querySelectorAll(".form-field .label-size"));
const sizesOptionInput = Object.values(document.querySelectorAll(".form-field .size-input"));


for (let [index, sizeOption] of sizesOption.entries()) {
    sizeOption.addEventListener("click", () => {

        if (sizesOptionInput[index].disabled) {
            sizesOptionInput[index].value = sizeOption.getAttribute("for");
            sizeOption.classList.add("label-color-selected")
            console.log("size :", sizesOptionInput[index].value)
            sizesOptionInput[index].disabled = false;

        }
        else {
            sizeOption.classList.remove("label-color-selected")
            sizesOptionInput[index].value = "";
            sizesOptionInput[index].disabled = true;

        }


    })
}

// Obtiene todos los elementos de entrada de tamaño
const colorsOption = Object.values(document.querySelectorAll(".form-field-color label"));
const colorsOptionInput = Object.values(document.querySelectorAll(".form-field-color input"));

for (let [index, colorOption] of colorsOption.entries()) {
    colorOption.addEventListener("click", () => {
        if (colorsOptionInput[index].disabled) {
            colorsOptionInput[index].value = colorOption.getAttribute("for");
            colorsOptionInput[index].disabled = false;
            colorOption.style.border = "2px solid black"
            console.log("COLOR :", colorsOptionInput[index].value)
        }
        else {
            colorsOptionInput[index].value = "";
            colorsOptionInput[index].disabled = true;
            colorOption.style.border = "0px solid black"

        }

    })
}