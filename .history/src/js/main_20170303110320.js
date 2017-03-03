$(document).ready(function () {
    var productSlider = $('.js-product-slider');
    productSlider.owlCarousel({
        items: 4,
        loop: false,
        nav: true,
        margin: 30,
        smartSpeed: 300,
        responsive:{
            0: {
                dots: false
            },
            520: {
                dots: true
            }
        }
    });

    var portfolioSlider = $('.js-portfolio-slider');
    portfolioSlider.owlCarousel({
        items: 1,
        loop: false,
        smartSpeed: 300
    });

    var clientsSlider = $('.js-clients-slider');
    clientsSlider.owlCarousel({
        items: 4,
        loop: false,
        nav: true,
        margin: 30,
        smartSpeed: 300,
        responsive:{
            0: {
                dots: false
            },
            520: {
                dots: true
            }
        }
    });
});