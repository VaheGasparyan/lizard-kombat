const $hero = document.getElementById('hero');
const click__element__wrapper = document.querySelector('.click__element__wrapper');
const $score = document.getElementById('score');
let scoreCount = 0;
const lizzardImgPath = './assets/lizzard.png';

$hero.addEventListener('click', (event) => {
    const DEG = 40;

    const {
        height,
        width,
        top,
        left,
    } = $hero.getBoundingClientRect();

    const offsetX = event.clientX - left - width / 2;
    const offsetY = event.clientY - top - height / 2;

    const tiltX = (offsetY / height) * DEG;
    const tiltY = (offsetX / width) * -DEG;

    $hero.style.setProperty('--tiltX', `${tiltX}deg`);
    $hero.style.setProperty('--tiltY', `${tiltY}deg`);

    setTimeout(() => {
        $hero.style.setProperty('--tiltX', '0deg');
        $hero.style.setProperty('--tiltY', '0deg');
    }, 300);

    const $plus_one = document.createElement('span');
    $plus_one.innerText = '+1';
    $plus_one.id = 'plus_one';
    $plus_one.style.left = `${event.clientX - left}px`;
    $plus_one.style.top = `${event.clientY - top}px`;

    click__element__wrapper.appendChild($plus_one);

    scoreCount += 1;

    $score.innerText = scoreCount;

    if(scoreCount > 5) {
        $hero.src = lizzardImgPath
    }

    setTimeout(() => {
        $plus_one.remove()
    }, 2000)
})