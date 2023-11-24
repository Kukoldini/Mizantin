let leftButton = document.querySelectorAll('.swipe-button__left');
let rightButton = document.querySelectorAll('.swipe-button__right');
let paginationLine = document.querySelectorAll('.pagination__line');

let galleryWrapper = document.querySelector('.team-gallery__wrapper');
let chooseWrapper = document.querySelector('.swiper__wrapper');

let offset = 0;
let paginationOffset = 0;

const rightButtonShift = () => {

    offset = offset + 343;
    paginationOffset = paginationOffset - 25;

    if(offset > 1029) {
        offset = 0;
        paginationOffset = 0;
    }

    galleryWrapper.style.left = -offset + 'px';
    chooseWrapper.style.left = -offset + 'px';
    paginationLine.style.left = -paginationOffset + '%';

}
const leftButtonShift = () => {
    
    offset = offset - 343;
    paginationOffset = paginationOffset + 25;

    if(offset < 0) {
        offset = 1029;
        paginationOffset = -75;
    }

    galleryWrapper.style.left = -offset + 'px';
    chooseWrapper.style.left = -offset + 'px';
    paginationLine.style.left = -paginationOffset + '%';

}

for (let i = 0; i < leftButton.length; i++) {
    
    rightButton[i].addEventListener('click', rightButtonShift);

    leftButton[i].addEventListener('click', leftButtonShift);
    
}
