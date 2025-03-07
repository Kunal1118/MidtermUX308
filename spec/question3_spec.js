import { calculateCubeVolume } from './functions.js';

describe("Tests cube volume calculation", function() {

  it("test small cube", function() {
    const volume = calculateCubeVolume(2);  // Cube with height of 2 meters
    expect(volume).toBe(8);  // 2^3 = 8 cubic meters
  });

  it("test medium cube", function() {
    const volume = calculateCubeVolume(5);  // Cube with height of 5 meters
    expect(volume).toBe(125);  // 5^3 = 125 cubic meters
  });

  it("test large cube", function() {
    const volume = calculateCubeVolume(10);  // Cube with height of 10 meters
    expect(volume).toBe(1000);  // 10^3 = 1000 cubic meters
  });

});