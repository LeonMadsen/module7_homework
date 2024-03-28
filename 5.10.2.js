const promocode = prompt("Пожалуйста, введите промокод для получения скидки");
if (promocode === "скидка" || promocode === "Скидка" || promocode === "скиДка" || promocode === "СкиДка") {
alert(`Промокод применён`);
} else {
alert(`Промокод не работает`);
}