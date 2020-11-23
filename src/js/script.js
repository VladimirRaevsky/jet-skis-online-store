$(function(){

    $('.banner-section__slider').slick({
        dots: true,
        prevArrow:'<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="icons/banner/arrow-left.svg" alt=""></button>',
        nextArrow:'<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="icons/banner/arrow-right.svg" alt=""></button>'
    });

});

document.addEventListener('DOMContentLoaded', ()=> {

    const parentTabs = document.querySelector('.tabs');
    const parentProduct = document.querySelector('.products__tabs');
    const tabItem = document.querySelectorAll('.tab');
    const productContent = document.querySelectorAll('.products__content');
    const tabContent = document.querySelectorAll('.tabs-content');
    const productTabs = document.querySelectorAll('.tab-item');
    const productItem = document.querySelectorAll('.product-item__favorite');


    productItem.forEach(item => {
        item.addEventListener('click', (event)=> {
            const target = event.target;
            if(target && target.classList.contains('product-item__favorite')) {
                item.classList.toggle('product-item__favorite--active');
            }
        });
    });
    

    function hideTabs() {
        tabContent.forEach(item => {
            item.classList.remove('tabs-content--active');
        });
        tabItem.forEach(item => {
            item.classList.remove('tab-item--active');
        });
    }
    function showTabs(i = 0) {
        tabContent[i].classList.add('tabs-content--active');
        tabItem[i].classList.add('tab-item--active');
    }

    function hideProductTabs() {
        productTabs.forEach(item => {
            item.classList.remove('tab-item--active');
        });
        productContent.forEach(item => {
            item.classList.remove('tabs-content--active');
        });
    }
    function showProductTabs(i = 0) {
        productTabs[i].classList.add('tab-item--active');
        productContent[i].classList.add('tabs-content--active');
    }
    hideProductTabs();
    hideTabs();
    showTabs();
    showProductTabs();


    parentTabs.addEventListener('click', (event)=> {
        event.preventDefault();
        const target = event.target;
        if(target && target.classList.contains('tab')) {
            tabItem.forEach((item, i)=> {
                if(target == item) {
                    hideTabs();
                    showTabs(i);                
                }
            });
        }
    });

    parentProduct.addEventListener('click', (event)=> {
        const target = event.target;
        if(target && target.classList.contains('tab-item')) {
            productTabs.forEach((item, i)=> {
                if(target == item) {
                    hideProductTabs();
                    showProductTabs(i);
                }
            });
        }
    });
});