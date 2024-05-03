let currentYear;
let birthYear;
let age;

alert(`Taks 4
A program that calculates how old a person is by entering their birth year`)

currentYear = new Date().getFullYear();
birthYear = prompt("Enter your birth year:");
age = currentYear - parseInt(birthYear);

alert(`You are ${age} years old.`);