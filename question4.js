function gymMembershipCost(cost, friends) {
    let discount = 0;
    if (friends === 1) {
        discount = 0.05;
    } else if (friends === 2) {
        discount = 0.10;
    } else if (friends >= 3) {
        discount = 0.15;
    }
    const totalCost = cost * (1 - discount);
    return totalCost;
}

// Tests
console.log(gymMembershipCost(100, 0)); // Output: 100
console.log(gymMembershipCost(100, 1)); // Output: 95
console.log(gymMembershipCost(100, 2)); // Output: 90
console.log(gymMembershipCost(100, 3)); // Output: 85
console.log(gymMembershipCost(100, 4)); // Output: 85