$(function(){

    $('.banner-section__slider').slick({
        dots: true,
        prevArrow:'<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="icons/banner/arrow-left.svg" alt=""></button>',
        nextArrow:'<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="icons/banner/arrow-right.svg" alt=""></button>',
    });

    $('.tab').on('click', function(e){
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    });
     // 
    // const tabsContainer = $(this).closest('.tab');
    //     tabsContainer.find('.tab-item--active').removeClass('tab-item--active');
    //     tabsContainer.find('.tabs-content--active').removeClass('tabs-content--active');

    $('.product-item__favorite').on('click', function(){
        $(this).toggleClass('product-item__favorite--active');
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:'<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="icons/banner/arrow-black-left.svg" alt=""></button>',
        nextArrow:'<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="icons/banner/arrow-black-right.svg" alt=""></button>',
    });
    
    $('.filter-style').styler();

    $('.filter__item-drop').on('click', function(){
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
});

