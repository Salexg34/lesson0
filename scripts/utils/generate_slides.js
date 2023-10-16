// const ELEMENTS_COUNT = 10;
// export const generateSlides = () => {
//     let defaultCard = document.querySelector('.slider__cards');

//     for (let i = 1; i <= ELEMENTS_COUNT; i++) {

//         let clonedCard = defaultCard.cloneNode(true);
//         const defaultIndexEl = document.createElement('div');

//         defaultIndexEl.textContent = i;
//         defaultIndexEl.classList.add('default_index');
//         clonedCard.appendChild(defaultIndexEl);

//         defaultCard.parentElement.appendChild(clonedCard);
//     }

//     for (let i = 1; i <= ELEMENTS_COUNT; i++) {
//         const clonedCard = defaultCard.cloneNode(true);

//         const defaultIndexEl = document.createElement('div');
//         defaultIndexEl.classList.add('default_index');

//         defaultIndexEl.textContent = i;

//         if (i === 1) { 
//             const firstCard = defaultCard         
//             firstCard.appendChild(defaultIndexEl)
//         } else {
//             clonedCard.appendChild(defaultIndexEl);
//             defaultCard.parentElement.appendChild(clonedCard);

//         }
//     }

//     function createSlide(index) {
//         const clonedCard = defaultCard.cloneNode(true);
//         const defaultIndexEl = document.createElement('div');
//         defaultIndexEl.textContent = index;
//         defaultIndexEl.classList.add('default_index');
//         clonedCard.appendChild(defaultIndexEl);
//         defaultCard.parentElement.appendChild(clonedCard);
//     }

//     for (let i = 2; i <= ELEMENTS_COUNT; i++) {
//         createSlide(i)
//     }
//
//     const firstCardIndex = document.createElement('div');
//     firstCardIndex.textContent = 1;
//     firstCardIndex.classList.add('default_index');
//     defaultCard.appendChild(firstCardIndex);
// };

 const createSlider = () => {
    const ELEMENTS_COUNT = 10;
    let defaultCard = document.querySelector('.slider__cards');

    const generateSlides = () => {

        function createSlide(index) {
            const clonedCard = defaultCard.cloneNode(true);
            const defaultIndexEl = document.createElement('div');
            defaultIndexEl.textContent = index;
            defaultIndexEl.classList.add('default_index');
            clonedCard.appendChild(defaultIndexEl);
            defaultCard.parentElement.appendChild(clonedCard);
        }

        for (let i = 2; i <= ELEMENTS_COUNT; i++) {
            createSlide(i)

        }
        const firstCardIndex = document.createElement('div');
        firstCardIndex.textContent = 1;
        firstCardIndex.classList.add('default_index');
        defaultCard.appendChild(firstCardIndex);

    };
    return generateSlides;
}

export const generatorSlider = createSlider()


