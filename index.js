'use stricts'
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
const DELAY = 1000;
const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    bodyBackgroundColor: document.querySelector('body')
};

refs.startBtn.addEventListener('click', onChangeColorBody);

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function onChangeColorBody() {
    const intervalID = setInterval(() => {
        getRandomColorBody()
    }, DELAY)
    if (intervalID) {
        refs.startBtn.setAttribute('disabled', true);
    }
    refs.stopBtn.addEventListener('click', () => {
        clearInterval(intervalID);
        refs.startBtn.removeAttribute('disabled')
    })
};


function getRandomColorBody() {
    const color = randomIntegerFromInterval(0, colors.length - 1);
    refs.bodyBackgroundColor.style.backgroundColor = colors[color];
};


