// app.js

const utils = require('./utils');

// Using the utility functions
utils.printWelcomeMessage('Het', 'Patel');
console.log(`100 degrees Celsius is ${utils.celsiusToFahrenheit(100)} degrees Fahrenheit.`);
console.log(`The factorial of 5 is ${utils.factorial(5)}.`);
console.log(`The first 5 numbers in the Fibonacci sequence are ${utils.fibonacci(5)}.`);
