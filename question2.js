function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * (5 / 9);
    return celsius;
}

// Tests
console.log(fahrenheitToCelsius(32)); 
console.log(fahrenheitToCelsius(212)); 
console.log(fahrenheitToCelsius(70)); 