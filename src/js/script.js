$(function(){

    $('.banner-section__slider').slick({
        dots: true,
        prevArrow:'<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="icons/banner/arrow-left.svg" alt=""></button>',
        nextArrow:'<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="icons/banner/arrow-right.svg" alt=""></button>',
        responsive: [
            {
              breakpoint: 969,
              settings: {
                arrows: false
              }
            }
        ]
    });

    $('.tab').on('click', function(e){
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    });


    $('.product-item__favorite').on('click', function(){
        $(this).toggleClass('product-item__favorite--active');
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:'<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="icons/banner/arrow-black-left.svg" alt=""></button>',
        nextArrow:'<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="icons/banner/arrow-black-right.svg" alt=""></button>',
        responsive: [
            {
              breakpoint: 1301,
              settings: {
                arrows: false,
                dots: true
              }
            },
            {
              breakpoint: 1201,
              settings: {
                arrows: false,
                dots: true,
                slidesToShow: 3
              }
            },
            {
              breakpoint: 968,
              settings: {
                arrows: false,
                dots: true,
                slidesToShow: 2
             }
            },
            {
                breakpoint: 641,
                settings: {
                  arrows: false,
                  dots: true,
                  slidesToShow: 1
               }
              }
        ]
        
    });
    
    $('.filter-style').styler();

    $('.filter__item-drop, .aside-filter__show').on('click', function(){
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle();
    });
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 100000,
        max: 500000,
        from: 180000,
        to: 350000
    });

    $('.catalog__filter-btngrid').on('click', function() {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').removeClass('product-item__wrapper--list');
    });

    $('.catalog__filter-btnline').on('click', function() {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').addClass('product-item__wrapper--list');
    });

    $(".rate-yo").rateYo({
        normalFill: "#C4C4C4",
        starWidth: "23px",
        ratedFill: "#1C62CD",
        spacing: "7px"
    });

    $('.menu__btn').on('click', function() {
        $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
    });
    $('.footer__topdrop').on('click', function(){
        $(this).next().slideToggle();
        $(this).toggleClass('footer__top--active');
    });
    $('.filter-btn').on('click', function(){
      $(this).next().slideToggle();
    });

});
