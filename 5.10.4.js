let name = prompt("Введите Ваше имя");
let age = prompt("Введите возраст");
let lastDigit = age % 10;
if (lastDigit == 1) {
let ageText = age + " год";
} else if (lastDigit >= 2 && lastDigit <= 4) {
var ageText = age + " года";
} else {
var ageText = age + " лет";
}
alert(`${name}: ${ageText}`);
