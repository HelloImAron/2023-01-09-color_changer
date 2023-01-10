const changeTextTarget = document.querySelector('.color-code');
const changeButton = document.querySelector('.change-button');
const body = document.querySelector('body');

const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function getRandomHexColor() {
    var hexCode = '#';

    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hexValues.length);
        hexCode += hexValues[index];
    }

    return hexCode;
}

changeButton.addEventListener('click', () => {
    changeTextTarget.innerHTML = getRandomHexColor();
    body.style.backgroundColor = getRandomHexColor();
});
