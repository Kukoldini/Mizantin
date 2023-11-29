let swiperContainer = document.querySelector('.swiper__content');
let swiperWrapper = document.querySelector('.swiper__wrapper');
let swiperItems = document.querySelectorAll('.swiper__item');

if(window.innerWidth <= 541) {
    const adaptive = () => {
        for (let i = 0; i < swiperItems.length; i++) {
            swiperWrapper.style.width = swiperContainer.offsetWidth * swiperItems.length + 'px';
            swiperItems[i].style.width = 100 / swiperItems.length + '%';
        }
    }
    adaptive();
    window.addEventListener('resize', adaptive);

}

let currentWrapperPosition = 0;

const swiperStatusBlock = () => {
    let paginationLine = document.querySelector('.pagination__line');
    let paginationCounter = document.querySelector('.swiper-counter__current-value');

    paginationLine.style.left = 100 / swiperItems.length * currentWrapperPosition + '%';
    swiperWrapper.style.left = currentWrapperPosition * (-swiperWrapper.offsetWidth / swiperItems.length) + 'px';
    paginationCounter.textContent = currentWrapperPosition + 1;
}

let rightSwipeButton = document.querySelector('.swipe-button__right');

rightSwipeButton.addEventListener('click', () => {
    currentWrapperPosition += 1;
    if(currentWrapperPosition > swiperItems.length - 1) {
        currentWrapperPosition = 0;
    }
    swiperStatusBlock();
})

let leftSwipeButton = document.querySelector('.swipe-button__left');

leftSwipeButton.addEventListener('click', () => {
    currentWrapperPosition -= 1;
    if(currentWrapperPosition < 0) {
        currentWrapperPosition = swiperItems.length - 1;
    }
    swiperStatusBlock();

})