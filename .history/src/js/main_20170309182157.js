$(document).ready(function () {
    var mainSlider = $('.js-main-slider');
    mainSlider.owlCarousel({
        items: 1,
        loop: false,
        nav: true,
        smartSpeed: 300
    });

    var productSlider = $('.js-product-slider');
    productSlider.owlCarousel({
        items: 4,
        slideBy: 2,
        loop: false,
        nav: true,
        dots: false,
        margin: 30,
        smartSpeed: 300,
        responsive:{
            0: {
                dots: false
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
        slideBy: 2,
        loop: false,
        nav: true,
        dots: false,
        margin: 30,
        smartSpeed: 300,
        responsive:{
            0: {
                dots: false
            }            
        }
    });

    var marksSlider = $('.js-marks-slider');
    marksSlider.owlCarousel({
        items: 4,
        slideBy: 2,
        loop: false,
        nav: true,
        dots: false,
        margin: 30,
        smartSpeed: 300,
        responsive:{
            0: {
                dots: false
            }
        }
    });
    var inputSearch = $('.header-search input'),
        resultSearch = $('.search-result-modal');

    $('body').on('click', function(e) {
        var target = $(e.target);
        console.log(target.closest('.search-result-modal'));
        if (target.closest('.search-result-modal')) {
            resultSearch.removeClass('active');
        }
    });

    // developer scripts
    inputSearch.on('keyup', function() {
        var searchLength = $(this).val().length;
        if(searchLength > 4) {
            resultSearch.addClass('active');
        } else {
            resultSearch.removeClass('active');
        }
    });
    // developer scripts
});