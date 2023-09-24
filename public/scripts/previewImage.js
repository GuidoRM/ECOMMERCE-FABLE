// Obtén una referencia al elemento de entrada de imagen y a la vista previa de la imagen
const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');

// Agrega un evento de cambio al input de imagen
imageInput.addEventListener('change', (event) => {
  // Verifica si se seleccionó un archivo
  console.log("event.target.files: ", event.target.files)
  console.log("event.target.files[0]: ", event.target.files[0])
  if (event.target.files && event.target.files[0]) {
    const reader = new FileReader();
    console.log("reader: ", reader)

    // Cuando se carga el archivo, muestra la vista previa de la imagen
    reader.onload = (e) => {
      imagePreview.style.display = 'block';
      imagePreview.src = e.target.result;
    };

    // Lee el archivo como una URL de datos (data URL)
    reader.readAsDataURL(event.target.files[0]);
  }
});
