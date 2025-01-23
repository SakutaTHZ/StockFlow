import noUiSlider from 'nouislider';

declare global {
  interface HTMLDivElement {
    noUiSlider?: noUiSlider.API;
  }
}
