function calculate(operation) {
    const num1 = Number(document.getElementById('num1').value);
        const num2 = Number(document.getElementById('num2').value);
        let result;
  
if (operation === '+') {
result = num1 + num2;
} else if (operation === '-') {
result = num1 - num2;
} else if (operation === '*') {
result = num1 * num2;
} else if (operation === '/') {
result = num1 / num2;
}
document.getElementById('result').innerText = `Result: ${result}`;
}