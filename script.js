let counter = document.getElementById("counter");
let number = document.getElementById("number");
const minus = document.getElementById("subtraction");
const plus = document.getElementById("addition");

plus.addEventListener("click", () => {
    number.value = +number.value + +counter.value;
});

minus.addEventListener("click", () => {
    number.value = +number.value - +counter.value;
});