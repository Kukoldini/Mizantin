const swiper = (swiperContainer) => {

    let swiperWrapper = swiperContainer.querySelector('.swiper__wrapper');
    let swiperItems = swiperContainer.querySelectorAll('.swiper__item');

    //Swiper adaptivity function
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

    //Swiper pagination and counter
    const swiperStatusBlock = () => {
        let paginationLine = swiperContainer.querySelector('.pagination__line');
        let paginationCurrentValue = swiperContainer.querySelector('.swiper-counter__current-value');

        if(window.innerWidth <= 541) {

            paginationLine.style.width = 100 / swiperItems.length + '%';
            paginationLine.style.left = 100 / swiperItems.length * currentWrapperPosition + '%';
            swiperWrapper.style.left = currentWrapperPosition * (-swiperWrapper.offsetWidth / swiperItems.length) + 'px';
            paginationCurrentValue.textContent = currentWrapperPosition + 1;
        
        } else {

            paginationLine.style.width = 100 / (swiperItems.length - 1) + '%';
            paginationLine.style.left = 100 / (swiperItems.length - 1) * currentWrapperPosition + '%';
            swiperWrapper.style.left = currentWrapperPosition * (-swiperWrapper.offsetWidth / swiperItems.length) + 'px';
            paginationCurrentValue.textContent = currentWrapperPosition + 1;

        }
    
    }
    swiperStatusBlock();

    //Right button swipe event listener
    let rightSwipeButton = swiperContainer.querySelector('.swipe-button__right');

    rightSwipeButton.addEventListener('click', () => {

        currentWrapperPosition += 1;
        if(window.innerWidth <= 541) {

            if(currentWrapperPosition > swiperItems.length - 1) {
                currentWrapperPosition = 0;
            }

        } else {

            if(currentWrapperPosition > swiperItems.length - 2) {
                currentWrapperPosition = 0;
            }

        }
        swiperStatusBlock();

    })

    //Left button event listener
    let leftSwipeButton = swiperContainer.querySelector('.swipe-button__left');

    leftSwipeButton.addEventListener('click', () => {

        currentWrapperPosition -= 1;
        if(window.innerWidth <= 541) {
            if(currentWrapperPosition < 0) {
                currentWrapperPosition = swiperItems.length - 1;
            }
        } else {
            if(currentWrapperPosition < 0) {
                currentWrapperPosition = swiperItems.length - 2;
            }
        }
        swiperStatusBlock();

    })
}

//Reviews pagination counter adaptation
if(window.innerWidth <= 541) {
    document.querySelector('.swiper-counter__general-value').textContent = '3';
}

let introductionContainer = document.querySelector('.introduction__container');
let galleryContainer = document.querySelector('.team');
let reviewsContainer = document.querySelector('.reviews');

swiper(introductionContainer);
swiper(galleryContainer);
swiper(reviewsContainer);