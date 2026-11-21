const textParagraphs = document.querySelectorAll('.text');
const readerBg = document.querySelector('.content');

const fontSelect = document.querySelector('#fontSelect');
const fontSizeInput = document.getElementById('fontSize');
const fontColorInput = document.getElementById('fontColor');
const lineHeightInput = document.getElementById('lineHeight');

const bgWhite = document.getElementById('bgWhite');
const bgBisque = document.getElementById('bgBisque');
const bgGrey = document.getElementById('bgGrey');
const bgBlack = document.getElementById('bgBlack');

const loginBtn = document.querySelector('.auth__btn');

function changeFont() {
    textParagraphs.forEach(function(p) {
        p.style.fontFamily = fontSelect.value;
    });
}

function changeFontSize() {
    textParagraphs.forEach(function(p) {
        p.style.fontSize = fontSizeInput.value + 'px';
    });
}

function changeFontColor() {
    textParagraphs.forEach(function(p) {
        p.style.color = fontColorInput.value;
    });
}

function changeLineHeight() {
    textParagraphs.forEach(function(p) {
        p.style.lineHeight = lineHeightInput.value + '%';
    });
}

function changeBgColor(color) {
    readerBg.style.backgroundColor = color;
}

function togglePopup() {
    alert('Вы успешно вошли в систему! Настройки сохранены.');
}

fontSelect.onchange = changeFont;
fontSizeInput.oninput = changeFontSize;
fontColorInput.oninput = changeFontColor;
lineHeightInput.oninput = changeLineHeight;

bgWhite.onclick = () => changeBgColor('white');
bgBisque.onclick = () => changeBgColor('bisque');
bgGrey.onclick = () => changeBgColor('grey');
bgBlack.onclick = () => changeBgColor('black');

loginBtn.onclick = togglePopup;