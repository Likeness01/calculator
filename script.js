const screen = document.getElementById('screen');

function appendNumber(number) {
    screen.value = screen.value + number;
}

function appendOperator(operator) {
    screen.value = screen.value + operator;
}

function clearScreen() {
    screen.value = '';
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (e) {
        alert('Invalid expression');
        clearScreen();
    }
}
