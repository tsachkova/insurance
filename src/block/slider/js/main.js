let slider = document.querySelector('.slider-rev__body');

if (slider) {
    $('.slider-rev__body').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: "<div class = 'prev'><img src = './../img/arrLeft.svg'></div>",
        nextArrow: "<div class = 'next'><img src = './../img/arrRight.svg'></div>",
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}