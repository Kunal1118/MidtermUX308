import { calculateTotal } from './functions.js';

describe("Tests total value calculation of coins", function() {

  it("test 0 coins", function() {
    const total = calculateTotal(0, 0, 0, 0, 0);
    expect(total).toBe(0);
  });

  it("test 1 of each coin", function() {
    const total = calculateTotal(2, 2, 2, 2, 2);
    expect(total).toBe(3.40);
  });

  it("test multiple coins", function() {
    const total = calculateTotal(5, 10, 5, 2, 3);
    expect(total).toBe(10.50); 
  });

});