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