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
console.log(gymMembershipCost(100, 0)); 
console.log(gymMembershipCost(100, 1)); 
console.log(gymMembershipCost(100, 2)); 
console.log(gymMembershipCost(100, 3)); 
console.log(gymMembershipCost(100, 4)); 