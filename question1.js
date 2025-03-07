function calculateTotalValue(nickels, dimes, quarters, loonies, toonies) {
    const total = nickels * 0.05 + dimes * 0.10 + quarters * 0.25 + loonies * 1.00 + toonies * 2.00;
    return total;
}

// Tests
console.log(calculateTotalValue(0, 0, 0, 0, 0));
console.log(calculateTotalValue(1, 1, 1, 1, 1)); 
console.log(calculateTotalValue(10, 5, 2, 3, 4));