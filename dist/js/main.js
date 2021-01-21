$(document).ready(function(){
    const sliderCard = $('.slider__card');

    sliderCard.on('mouseenter', function() {

        $(this).find('.slider__icon').addClass('active-icon');
        $(this).find('.slider__button').addClass('active-button')
    })

    sliderCard.on('mouseleave', ()=> {
        $(this).find('.slider__icon').removeClass('active-icon');
        $(this).find('.slider__button').removeClass('active-button')
    })
})



new Swiper('#slider', {
    // Optional parameters
    // direction: 'horizontal',

    // If we need pagination
    slidesPerView: 4,
    spaceBetween: 70,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    autoHeight: true

})