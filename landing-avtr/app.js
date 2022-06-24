$(function(){
    $('.design-slider').slick({
        dots: true,
        slidesToShow: 4,
        variableWidth: true,
        prevArrow:'<img class="arrow arrow-left" src="img/arrow-left.svg">',
        nextArrow:'<img class="arrow arrow-right" src="img/arrow-right.svg">',
        responsive:[{
            breakpoint: 361,
            settings:{
                variableWith: false,
                slideToShow: 1,
            }
        }]
    });
});

/*https://kenwheeler.github.io/slick/*/