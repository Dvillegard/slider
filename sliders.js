(function() {
    const sliders = [...document.querySelectorAll(".slider__body")]; /* los corchetes [...d] con los tres puntos es para convertirlo en un array */
    // console.log(sliders);
    const arrowNext = document.querySelector("#after");
    const arrowBefore = document.querySelector("#before");
    let value;

    arrowNext.addEventListener("click", () => changePosition(1));
    arrowBefore.addEventListener("click", () => changePosition(-1));

    function changePosition(change) {
        // console.log(change);
        const currentElement = Number(document.querySelector(".slider__body--show").dataset.id);

        // console.log(currentElement)

        value = currentElement;
        value += change;
        // console.log(value);

        // console.log(sliders.length)
        if (value === 0 || value == sliders.length + 1) {
            value = value === 0 ? sliders.length : 1;

        }

        sliders[currentElement - 1].classList.toggle("slider__body--show");
        sliders[value - 1].classList.toggle("slider__body--show");

    }

})()