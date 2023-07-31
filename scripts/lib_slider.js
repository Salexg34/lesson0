import { getMaxWidth } from "./utils/get_max_width.js";
import { changeSliderProperties } from "./utils/change_slider_properties.js";
import { findElements } from "./utils/find_elements.js";
import { check } from "./utils/check_offset.js";
import { paginationSlider } from "./utils/pagination_slider.js";
import { choiceSlider } from "./utils/choice_slider.js";

/**
 * Init slider
 * @param {number} scroll - Количество прокручиваемых слайдов 
 * @param {number} width - Ширина слайда
 * @param {number} gap - Расстояние между слайдами
 * @param {number} toShow - Количество вывода слайдов к показу
 */

/**
 * Get max width
 * @param {number} slidesCount - Общее количество слайдов 
 * @param {number} cardsToShow - Количество вывода слайдов к показу
 */

/**
 * find еlements
 * @param {EventTarget} buttonNext - Кнопка "Следующий" ????????
 * @param {EventTarget} buttonPrev - Кнопка "Предыдущий"
 * @param {number} sliderWrapper - Смещение по оси Х
 * @param {} pagination - Пагинация ?????
 */

/**
 * Check offset
 * @param {number} offset - Позиция слайда ???? 
 * @param {number} maxWidth - Общая ширина слоя слайдов
 */

/**
 * Pagination slider
 * @param {number} offset - Позиция слайда ???? 
 * @param {number} maxWidth - Общая ширина слоя слайдов
 */

export const initSlider = function (scroll, width, gap, toShow) {  
    const {
        slidesCount,
        buttonNext,
        buttonPrev, 
        sliderWrapper,
        pagination
    } = findElements();

    if (toShow <= scroll) {
        scroll = toShow;
    };

    changeSliderProperties({width, gap, toShow});

    const maxWidth = getMaxWidth({width, gap, slidesCount, toShow});
    // const fullCardsWidth = getFullCardsWidth({width, gap, scroll})

    let offset = 0;
    let currentDot = 1;

    check({offset, maxWidth, buttonPrev, sliderWrapper, buttonNext});

    buttonNext.addEventListener('click', function () {
        turnSlides('rigth');
    });

    buttonPrev.addEventListener('click', function () {
        turnSlides('left');

    });

    document.querySelectorAll('.slider__cards').forEach((item, idx) => {
        item.setAttribute('data-slide-index', idx);
    })

    function turnSlides(side) {
        if (side == 'left') {
            currentDot -= 1
        } else if (side == 'rigth') {
            currentDot += 1
        }

        choiceSlider(currentDot);
    };
   

    paginationSlider({slidesCount, pagination, choiceSlider});
    // choiceSlider({check, currentDot, offset, width, gap, sliderWrapper, maxWidth, buttonPrev, buttonNext});
   

    function choiceSlider(slideIndex) {

        currentDot = slideIndex;

        const activeElements = document.querySelectorAll('div.active');
        activeElements.forEach(function (item) {
            item.classList.remove('active');
        });

        const currentElements = document.querySelectorAll(`[data-slide-index = '${currentDot}']`);
        currentElements.forEach(function (item) {
            item.classList.add('active')
        })

        offset = -((width + gap) * currentDot) + (width + gap);
        sliderWrapper.style.transform = `translateX(${offset}px)`;
        check({offset, maxWidth, buttonPrev, sliderWrapper, buttonNext});
    }
};

