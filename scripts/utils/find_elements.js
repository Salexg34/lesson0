export const findElements = function () {
    const slidesCount = document.querySelectorAll('div.slider__cards').length;
    const buttonNext = document.querySelector('.slider__button_next');
    const buttonPrev = document.querySelector('.slider__button_prev');
    const sliderWrapper = document.querySelector('.slider__wrapper');
    const pagination = document.querySelector('.pagination');

    return {
        slidesCount,
        buttonNext,
        buttonPrev, 
        sliderWrapper,
        // slider,
        pagination
    }
}
