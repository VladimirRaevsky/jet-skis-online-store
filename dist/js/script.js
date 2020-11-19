$(function(){

    $('.banner-section__slider').slick({
        dots: true,
        prevArrow:'<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="icons/banner/arrow-left.svg" alt=""></button>',
        nextArrow:'<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="icons/banner/arrow-right.svg" alt=""></button>'
    });

});

document.addEventListener('DOMContentLoaded', ()=> {

    const parentTabs = document.querySelector('.search__tabs');
    const searchTabs = document.querySelectorAll('.search__tabs-item');
    const searchForm = document.querySelectorAll('.search__content-item');

    function hideTabs() {
        searchForm.forEach(item => {
            item.classList.remove('search__content-item--active');
        });
        searchTabs.forEach(item => {
            item.classList.remove('search__tabs-item--active');
        });
    }

    function showTabs(i = 0) {
        searchForm[i].classList.add('search__content-item--active');
        searchTabs[i].classList.add('search__tabs-item--active');
    }

    hideTabs();
    showTabs();
    
    parentTabs.addEventListener('click', (event)=> {
        const target = event.target;
        if(target && target.classList.contains('search__tabs-item')) {
            searchTabs.forEach((item, i)=> {
                if(target == item) {
                    hideTabs();
                    showTabs(i);                
                }
            });
        }
    });
});