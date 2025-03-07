import { calculateGymCost } from './functions.js';

describe("Tests gym membership cost calculation with discounts based on friends signed up", function() {

  it("test 0 friends", function() {
    const totalCost = calculateGymCost(100, 0);  // No friends, full price
    expect(totalCost).toBe(100);  // No discount, so cost should remain 100
  });

  it("test 1 friend", function() {
    const totalCost = calculateGymCost(100, 1);  // 1 friend, 5% discount
    expect(totalCost).toBe(95); 
  });

  it("test 2 friends", function() {
    const totalCost = calculateGymCost(100, 2);  // 2 friends, 10% discount
    expect(totalCost).toBe(90); 
  });

  it("test 3 friends", function() {
    const totalCost = calculateGymCost(100, 3);  // 3 friends, 15% discount
    expect(totalCost).toBe(85); 
  });

  it("test 4 friends", function() {
    const totalCost = calculateGymCost(100, 4);  // 4 friends, 15% discount
    expect(totalCost).toBe(85); 
  });

});