function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * (5 / 9);
    return celsius;
}

// Tests
console.log(fahrenheitToCelsius(32)); // Freezing: Output: 0
console.log(fahrenheitToCelsius(212)); // Boiling: Output: 100
console.log(fahrenheitToCelsius(70)); // Room temperature: Output: 21.111...