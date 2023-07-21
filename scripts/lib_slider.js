export const initSlider = function (scroll, width, gap, toShow) {
    const slidesCount = document.querySelectorAll('div.slider__cards').length;
    const buttonNext = document.querySelector('.slider__button_next');
    const buttonPrev = document.querySelector('.slider__button_prev');
    const sliderWrapper = document.querySelector('.slider__wrapper');
    const slider = document.querySelector('.slider');

    const pagination = document.querySelector('.pagination');

    slider.style.setProperty('--cards-width', width + 'px');
    slider.style.setProperty('--cards-gap', gap + 'px');
    slider.style.setProperty('--cards-to-show', toShow);

    const sliderObject = {
        slidesCount,
        cardsToScroll: scroll,
        cardsWidth: width,
        cardsGap: gap,
        cardsToShow: toShow,
        maxWidth() {
            return parseInt((width + gap) * (this.slidesCount - this.cardsToShow));
        },
        fullCardsWidth(slidesToScroll = scroll) {
            return parseInt((width + gap) * scroll);
        }
    };

    let offset = 0;
    let currentDot = 0;

    if (toShow <= scroll) {
        scroll = toShow;
    };

    checkOffset();

    buttonNext.addEventListener('click', function () {
        turnSlides('rigth');
    });

    buttonPrev.addEventListener('click', function () {
        turnSlides('left');
    });

    function turnSlides(side) {
        if (side == 'left') {
            offset += sliderObject.fullCardsWidth();
        } else if (side == 'rigth') {
            offset -= sliderObject.fullCardsWidth();
        }

        sliderWrapper.style.transform = `translateX(${offset}px)`;
        checkOffset();
    };

    function checkOffset() {
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
            console.log('stop', offset, -sliderObject.maxWidth())
        } else {
            buttonNext.removeAttribute('disabled');
        }
    };

    paginationSlider();

    function paginationSlider() {
        for (let i = 0; i < slidesCount; i++) {
            const paginationDot = document.createElement('div');
            paginationDot.classList.add('dot');
            paginationDot.innerHTML = i + 1;
            pagination.appendChild(paginationDot);
            if (i == 0) {
                paginationDot.classList.add('active');
            }

            paginationDot.addEventListener('click', function () {
                pagination.querySelector('.active').classList.remove('active');
                paginationDot.classList.add('active');
                choiceSlider(i);
            });
        }
    };

    function choiceSlider(slideIndex) {
        currentDot = slideIndex
        offset = -((width + gap) * currentDot) + (width + gap);
        sliderWrapper.style.transform = `translateX(${offset}px)`;
        checkOffset();
    }
};

