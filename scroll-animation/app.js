const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerPoint = window.innerHeight * 0.8;

    for (let box of boxes) {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerPoint - 15) {
            box.classList.add('show');
        }
        else {
            box.classList.remove('show');
        }
    }
}