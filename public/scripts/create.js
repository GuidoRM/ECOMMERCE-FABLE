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
