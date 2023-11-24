var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var header = document.querySelector(".header__inner");
document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.header__nav').classList.toggle('open');
    if (header.clientHeight === 65) {
        header.style.height = '220px';
    } else {
        header.style.height = '65px';
    }
})