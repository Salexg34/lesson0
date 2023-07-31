export const check = function checkOffset({offset, maxWidth, buttonPrev, sliderWrapper, buttonNext}) {
    if (offset >= 0) {
        buttonPrev.setAttribute('disabled', true);
        sliderWrapper.style.transform = `translateX(${0}px)`;
        offset = 0;

    } else {
        buttonPrev.removeAttribute('disabled');
    }
    if (offset <= -maxWidth) {
        buttonNext.setAttribute('disabled', true);
        sliderWrapper.style.transform = `translateX(${-maxWidth}px)`;
        offset = -maxWidth;
        console.log('stop', offset, -maxWidth)
    } else {
        buttonNext.removeAttribute('disabled');
    }
};