function calculate(a, b, operator) {
switch (operator) {
case "+":
return a + b;
case "-":
return a - b;
case "*":
return a * b;
case "/":
return a / b;
}
}
console.log(calculate.apply(null, [2, 3, "+"]));