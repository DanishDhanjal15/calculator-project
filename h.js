const display = document.getElementById('display');

function appendToDisplay(input) { 
    display.value += input; 
}
function clearDisplay() {
    display.value = ''; 
}
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
function backslash() {
    display.value = display.value.slice(0, -1);
}
function toggleSign() {
    if (display.value.startsWith('-')) {
        display.value = display.value.slice(1);
    } else {
        display.value = '-' + display.value;
    }
}
