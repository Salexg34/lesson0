export const paginationSlider = function paginationSlider({slidesCount, pagination, choiceSlider}) {
    for (let i = 1; i < slidesCount - 1; i++) {
        const paginationDot = document.createElement('div');
        paginationDot.classList.add('dot');
        paginationDot.setAttribute('data-slide-index', i);
        paginationDot.innerHTML = '<img src="/img/slider/paginationDotActive.svg">';
        pagination.appendChild(paginationDot);

        if (i == 1) {
            paginationDot.classList.add('active');
            document.querySelector(`[data-slide-index = '${i}']`).classList.add('active');

        }

        paginationDot.addEventListener('click', function () {
            choiceSlider(i);
        });
    };
};