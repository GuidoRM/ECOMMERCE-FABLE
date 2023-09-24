const colorContainer = document.getElementById('color-container');
const addColorButton = document.getElementById('add-color');

let idColorInput = "color-selected";
let countColorInput = 0;

addColorButton.addEventListener('click', () => {
  // Crea un nuevo campo de entrada de color
  addColorButton.setAttribute("for", `${idColorInput + countColorInput}`);
  const colorInput = document.createElement('input');
  colorInput.type = 'color';
  colorInput.name = 'colors'; // Asigna un nombre para agrupar los colores como un array en el formulario
  colorInput.required = true; // Opcional: Puedes requerir que al menos un color sea seleccionado
  colorInput.classList.add("input-color")
  colorInput.id = idColorInput + countColorInput;
  // Agrega el campo de entrada de color al contenedor
  colorContainer.appendChild(colorInput);
  countColorInput+=1;
});


// Obtiene todos los elementos de entrada de tamaño
const sizeInputs = document.querySelectorAll(".size-input");

// Agrega un evento de clic a cada elemento de entrada de tamaño
sizeInputs.forEach((input) => {
  input.addEventListener("change", function () {
    // Obtiene el valor del atributo 'for' del label asociado al input
    const labelFor = input.getAttribute("id");

    // Obtiene el label asociado al input utilizando el valor 'for'
    const label = document.querySelector(`label[for="${labelFor}"]`);


    if (this.checked) {
      // Si se marca el elemento de entrada, agrega la clase "selected" a la etiqueta
      label.classList.add("label-color-selected");
    } else {
      // Si se desmarca el elemento de entrada, elimina la clase "selected" de la etiqueta
      label.classList.remove("label-color-selected");
    }
  });
});