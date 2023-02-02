let form = document.querySelector('.form__travel');

if (form) {
    form.addEventListener('focusout', (e) => {
        if (e.target.classList.contains('date')) {
            let dateFrom = document.querySelector('.from').querySelector('input').value;
            let dateTo = document.querySelector('.to').querySelector('input').value;
            let amountDays = document.querySelector('.day');

            if (dateFrom === dateTo) {
                amountDays.innerHTML = '0';
                return;
            }

            if (new Date(dateFrom) > new Date(dateTo)) {
                alert('Неверно ввведена дата начала или окончания поездки');
                return;
            }

            amountDays.innerHTML = (new Date(dateTo) - new Date(dateFrom)) / 86400000;
        }
    })

    let addTouristButton = document.querySelector('.form__add-img');

    addTouristButton.addEventListener('click', (e) => {
        let formTourist = document.querySelector('.form__tourist').lastElementChild;
        let touristNumber = formTourist.querySelector('.form__tourist-item').innerHTML.match(/\d+/)[0];

        let clone = formTourist.cloneNode(true);
        clone.querySelector('.birfday-date-input').value = '';
        clone.querySelector('.form__tourist-item').innerHTML = `турист ${+touristNumber + 1}`;

        document.querySelector('.form__tourist').appendChild(clone);
    })
}
let accordeon = document.querySelector('.accordeon');

if (accordeon) {
    accordeon.addEventListener('click', (e) => {
        let circle = e.target.closest('.circle');

        if (circle) {
            let accordeonItem = circle.closest('.accordeon__item');
            if (accordeonItem.classList.contains("visible")) {
                circle.innerHTML = '<img src="./../img/arrDown.svg" alt="">';
                accordeonItem.querySelector('.accordeon__body').style.display = "none";
                accordeonItem.classList.remove("visible");

            } else {
                circle.innerHTML = '<img src="./../img/arrUp.svg" alt="">';
                accordeonItem.querySelector('.accordeon__body').style.display = "block";
                accordeonItem.classList.add("visible");
            }
        }
    })
}
let menuButton = document.querySelector('.menu__button');
let menu = document.querySelector('.menu__list');

menuButton.addEventListener('click', e => {

    if (e.target == menuButton) {
        menu.classList.toggle('open');
    }
})
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
let tubSlider = document.querySelector('.tubslider');

if (tubSlider) {
    let allButon = tubSlider.querySelectorAll('.tubslider__manage-button-container');
    let allText = tubSlider.querySelectorAll('.tubslider__info-text-item');

    tubSlider.addEventListener('click', (e) => {
        let container = e.target.closest('.tubslider__manage-button-container');
        if (container) {

            if (container.classList.contains("active")) {
                return;
            }

            for (let i = 0; i < allButon.length; i++) {
                allButon[i].classList.remove("active");
            }

            container.classList.add("active");

            for (let i = 0; i < allText.length; i++) {
                allText[i].style.display = "none";
            }

            let item = container.querySelector(".tubslider__manage-button-number").textContent;
            tubSlider.querySelector(`.text${item}`).style.display = "block";
        }
    })
}