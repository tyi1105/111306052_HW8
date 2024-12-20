document.getElementById('calculateButton').addEventListener('click', function () {
    // 取得輸入的數值和操作符
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operator = document.getElementById('operator').value;

    // 檢查是否輸入有效數值
    if (isNaN(number1) || isNaN(number2)) {
        displayResult('Invalid input! Please enter valid numbers.');
        return;
    }

    // 運算處理
    let result;
    switch (operator) {
        case '+':
            result = add(number1, number2);
            break;
        case '-':
            result = subtract(number1, number2);
            break;
        case '*':
            result = multiply(number1, number2);
            break;
        case '/':
            if (number2 === 0) {
                displayResult('Error! Division by zero.');
                return;
            }
            result = divide(number1, number2);
            break;
        default:
            displayResult('Invalid operator!');
            return;
    }

    // 顯示結果，四捨五入到兩位小數
    displayResult(`Result = ${result.toFixed(2)}`);
});

// 運算函數
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// 顯示結果的函數
function displayResult(message) {
    document.getElementById('result').textContent = message;
}