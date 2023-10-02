//Contenedor del slider
const sliderContainer = document.querySelector(".slider-images");

//Contenedor de los contadores
const counterContainer = document.querySelector(".slider-images-counter");

//Todas las imagenes del contenedor
const images = document.querySelectorAll(".slider-images img");

for (let i = 0; i < images.length; i++) {
    counterContainer.innerHTML += "<li class='slider-images-count'></li>";
}

const counters = document.querySelectorAll(".slider-images-count");

let indexImage = 0
let positionDefault = 0;

counters[indexImage].classList.add("slider-images-count-active");

for (let [i, image] of images.entries()) {
    image.style.transform = `translateX(${positionDefault}px)`
    positionDefault = (i + 1) *  830;
}

const buttonBack = document.querySelector(".back-image");
const buttonNext = document.querySelector(".next-image");

const getTranslateXValue = (element) => {
    const transformValue = element.style.transform;
    const match = transformValue.match(/translateX\(([-\d.]+)px\)/);

    if (match) {
        const translateXValue = parseFloat(match[1]);
        return translateXValue;
    }

    return 0;
}

buttonNext.addEventListener("click", () => {
    //Todas las imagenes del contenedor 
    const imagesX = document.querySelectorAll(".slider-images img");
    console.log(imagesX.length)
   
    if (getTranslateXValue(images[images.length - 1]) !== 0) {

        for (let image of images) {
            image.style.transform = `translateX(${getTranslateXValue(image) -  830}px)`
            image.style.index = `24`

        }


        counters[indexImage].classList.remove("slider-images-count-active");
        indexImage += 1
        counters[indexImage].classList.add("slider-images-count-active");

    }
})

buttonBack.addEventListener("click", () => {

    if (getTranslateXValue(images[0]) < 0) {

        for (let image of images) {
            image.style.transform = `translateX(${getTranslateXValue(image) +  830}px)`;
        }

        counters[indexImage].classList.remove("slider-images-count-active");
        indexImage -= 1
        counters[indexImage].classList.add("slider-images-count-active");
    }
})

function agregarImagen() {
    const sliderContainer = document.querySelector(".slider-images");
    sliderContainer.innerHTML += "<img src='/images/products/product_default.png'>"

}