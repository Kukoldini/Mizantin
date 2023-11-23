let leftButton = document.querySelector('.swipe-button__left');
let rightButton = document.querySelector('.swipe-button__right');
let sliderWrapper = document.querySelector('.team-gallery__wrapper');
let paginationLine = document.querySelector('.pagination__line');
let offset = 0;
let paginationOffset = 0;

rightButton.addEventListener('click', () => {

    offset = offset + 343;
    paginationOffset = paginationOffset - 25;

    if(offset > 1029) {
        offset = 0;
        paginationOffset = 0;
    }

    sliderWrapper.style.left = -offset + 'px';
    paginationLine.style.left = -paginationOffset + '%';

})

leftButton.addEventListener('click', () => {
    offset = offset - 343;
    paginationOffset = paginationOffset + 25;

    if(offset < 0) {
        offset = 1029;
        paginationOffset = -75;
    }

    sliderWrapper.style.left = -offset + 'px';
    paginationLine.style.left = -paginationOffset + '%';
})
