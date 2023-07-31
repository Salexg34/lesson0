export const getMaxWidth = function ({width, gap, slidesCount, cardsToShow}) {
    return parseInt((width + gap) * (slidesCount - cardsToShow));
};

// export const getFullCardsWidth = function ({width, gap, scroll}) {
//     return parseInt((width + gap) * scroll);
// };