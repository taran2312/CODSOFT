function getDisplay() {
    return document.getElementById('display');
}

function appendCharacter(character) {
    const display = getDisplay();
    display.value += character;
}

function clearDisplay() {
    getDisplay().value = '';
}

function deleteLastCharacter() {
    const display = getDisplay();
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = getDisplay();
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}