export const changeSliderProperties = function ({width, gap, toShow})  {
    const slider = document.querySelector('.slider');
    
    slider.style.setProperty('--cards-width', width + 'px');
    slider.style.setProperty('--cards-gap', gap + 'px');
    slider.style.setProperty('--cards-to-show', toShow);
}
