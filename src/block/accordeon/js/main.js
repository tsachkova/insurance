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