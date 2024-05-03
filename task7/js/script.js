let dividend;
let divisor;

alert(`Taks 7

A program that calculates division operations of positive numbers through subtraction`)

dividend = parseInt(prompt("Enter the dividend (positive number):"));
divisor = parseInt(prompt("Enter the divisor (positive number):"));

if (dividend < 0 || divisor < 0) {
    alert("This program works for positive numbers only.");
} else if (divisor === 0) {
    alert(`${dividend} divided by ${divisor} is "Tnfinite".`);
} else if (dividend === 0) {
    alert("Division by zero is not allowed.");
} else {
    let quotient = 0;
    let remainder = dividend;

    while (remainder >= divisor) {
        remainder -= divisor;
        quotient++;
    }

    alert(`${dividend} divided by ${divisor} is ${quotient} with a remainder of ${remainder}.`);
}