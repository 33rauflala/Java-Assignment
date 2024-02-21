// utils.js

// Function 1: Print welcome message
function printWelcomeMessage(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to G@I College`);
}

// Function 2: Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return celsius * 9/5 + 32;
}

// Function 3: Calculate the factorial of a number
function factorial(number) {
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}

// Function 4: Calculate Fibonacci sequence up to n numbers
function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}

module.exports = { printWelcomeMessage, celsiusToFahrenheit, factorial, fibonacci };
