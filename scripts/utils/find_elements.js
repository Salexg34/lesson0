 /**
 * Модуль findElements
 * @module utils/find_elements
 *
 * функция для получения значений селекторов
 * @param {number} slidesCount - количество слайдов
 * @constant {} - Кнопка "Следующий" ????????
 * @param {} buttonPrev - Кнопка "Предыдущий" ??????
 * @param {number} sliderWrapper - Смещение по оси Х
 * @param {} pagination - Пагинация ?????
 * @returns {}
 */

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
