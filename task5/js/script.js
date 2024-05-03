let fact = 1;
let num;
let result;

alert(`Taks 5
A program that finds the factorial of an input number`)

num = parseInt(prompt("Enter a number to calculate its factorial:"));

if (num < 0) {
    console.log("Factorial is not defined for negative numbers.");
} else {
    if (num === 0 || num === 1) {
        result = 1;
        alert(`The factorial of ${num} is ${result}.`);

    } else {
        for (let i = 1; i <= num; i++) {
            fact = fact * i;
        }
        result = fact;
        alert(`The factorial of ${num} is ${result}.`);
    }
}