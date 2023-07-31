/**
 * Модуль getMaxWidth
 * @module utils/get_max_width
 * 
 * getMaxWidth - функция получения значения скрытой области слайдов
 * @param {number} width - ширина слайда
 * @param {number} gap - отступ между слайдами
 * @param {number} slidesCount - Общее количество слайдов 
 * @param {number} cardsToShow - Количество вывода слайдов к показу
 */
export const getMaxWidth = function ({width, gap, slidesCount, cardsToShow}) {
    return parseInt((width + gap) * (slidesCount - cardsToShow));
};

// export const getFullCardsWidth = function ({width, gap, scroll}) {
//     return parseInt((width + gap) * scroll);
// };