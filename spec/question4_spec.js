import { calculateGymCost } from './functions.js';

describe("Tests gym membership cost calculation with discounts based on friends signed up", function() {

  it("test 0 friends", function() {
    const totalCost = calculateGymCost(150, 0);  
    expect(totalCost).toBe(150);  
  });

  it("test 1 friend", function() {
    const totalCost = calculateGymCost(150, 1);  
    expect(totalCost).toBe(142.5); 
  });

  it("test 2 friends", function() {
    const totalCost = calculateGymCost(150, 2);  
    expect(totalCost).toBe(135); 
  });

  it("test 3 friends", function() {
    const totalCost = calculateGymCost(150, 3);  
    expect(totalCost).toBe(127.5); 
  });

  it("test 4 friends", function() {
    const totalCost = calculateGymCost(150, 4);  
    expect(totalCost).toBe(127.5); 
  });

});