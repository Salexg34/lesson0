export const initSlider = function(scroll, width, gap, toShow) {
    const slidesCount = document.querySelectorAll('div.slider__cards').length;
    const buttonNext = document.querySelector('.slider__button_next');
    const buttonPrev = document.querySelector('.slider__button_prev');
    const sliderWrapper = document.querySelector('.slider__wrapper');
    const slider = document.querySelector('.slider');

    const sliderObject = {
        slidesCount,
        cardsToScroll: scroll,
        cardsWidth: slider.style.setProperty('--cards-width', width + 'px'),
        cardsGap: slider.style.setProperty('--cards-gap', gap + 'px'),
        cardsToShow: slider.style.setProperty('--cards-to-show', toShow),
        maxWidth() {
            return parseInt((width + gap) * (this.slidesCount - scroll));
        },
        fullCardsWidth(slidesToScroll = scroll) {
            return parseInt((width + gap) * scroll);
        }
    };

    let offset = 0;

    checkOffset();

    buttonNext.addEventListener('click', function () {
        turnSlides('rigth');
    });

    buttonPrev.addEventListener('click', function () {
        turnSlides('left');
    });

    function turnSlides (side) {
        if (side == 'left') {
            offset += sliderObject.fullCardsWidth();
        } else if ( side == 'rigth') {
            offset -= sliderObject.fullCardsWidth();
        }
    
        sliderWrapper.style.transform = `translateX(${offset}px)`;
        checkOffset();
    };

    if (toShow <= scroll) {
        return scroll = toShow;
        checkOffset();
    };
    
    function checkOffset () {
        console.log(offset, -sliderObject.maxWidth());        

        if (offset >= 0) {
            buttonPrev.setAttribute('disabled', true);
            sliderWrapper.style.transform = `translateX(${0}px)`;
            offset = 0;
        } else {
            buttonPrev.removeAttribute('disabled');
        }
        if (offset <= -sliderObject.maxWidth()) {    
            buttonNext.setAttribute('disabled', true);
            sliderWrapper.style.transform = `translateX(${-sliderObject.maxWidth()}px)`;
            offset = -sliderObject.maxWidth();
        } else {
            buttonNext.removeAttribute('disabled');
        }
    };
};


