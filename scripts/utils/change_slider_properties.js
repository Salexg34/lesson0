/**
 * Модуль changeSliderProperties
 * @module utils/change_slider_properties
 * 
 * changeSliderProperties - получение параметров слайдера
 * @constant ????????
 * @param {number} width - ширина слайда
 * @param {number} gap - отступ между слайдами
 * @param {number} toShow - количество вывода слайдов к показу
 */
export const changeSliderProperties = function ({width, gap, toShow})  {
    const slider = document.querySelector('.slider');

    slider.style.setProperty('--cards-width', width + 'px');
    slider.style.setProperty('--cards-gap', gap + 'px');
    slider.style.setProperty('--cards-to-show', toShow);
}
