/**
 * Модуль initSlider
 * @module scripts/lib_slider
 */
import {initSlider} from './scripts/lib_slider.js';
import {generatorSlider} from './scripts/utils/generate_slides.js';


generatorSlider();
initSlider(1, 300, 90, 3);
