const progress = document.querySelector('#progress');
const circles = document.querySelectorAll('.circle');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
})

prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
})

function update(params) {
    for (let i = 0; i < circles.length; i++) {
        if (i < currentActive) {
            circles[i].classList.add('active');
        }
        else {
            circles[i].classList.remove('active');
        }
    }
    if (currentActive === 1) {
        prev.disabled = true;
    }
    else if (currentActive === circles.length) {
        next.disabled = true;
    }
    else {
        next.disabled = false;
        prev.disabled = false;
    }
    const actives = document.querySelectorAll('.active')
    progress.style.width = `${((actives.length - 1) / (circles.length - 1) * 100)}%`;
}