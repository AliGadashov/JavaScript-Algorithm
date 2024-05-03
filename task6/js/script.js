alert(`Taks 6

A program that calculates multiplication operations of positive numbers by addition`)

const num1 = parseInt(prompt("Enter the first positive number:"));
const num2 = parseInt(prompt("Enter the second positive number:"));

if (num1 < 0 || num2 < 0) {
    alert("This program works for positive numbers only.");
} else {
    let result = 0;
    for (let i = 0; i < num2; i++) {
        result += num1;
    }
    alert(`${num1} multiplied by ${num2} is ${result}.`);
}