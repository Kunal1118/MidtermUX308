import { determineDamageLevel } from './functions.js';

describe("Tests earthquake damage levels based on Richter scale intensity", function() {

  it("test little or no damage", function() {
    const result = determineDamageLevel(4);  // Intensity less than 5
    expect(result).toBe('Little or no damage');
  });

  it("test some damage", function() {
    const result = determineDamageLevel(5);  // Intensity between 5 and 5.5
    expect(result).toBe('Some damage');
  });

  it("test serious damage", function() {
    const result = determineDamageLevel(6);  // Intensity between 5.5 and 6.5
    expect(result).toBe('Serious damage: walls may crack or fall');
  });

  it("test disaster", function() {
    const result = determineDamageLevel(7);  // Intensity between 6.5 and 7.5
    expect(result).toBe('Disaster: buildings may collapse');
  });

  it("test catastrophe", function() {
    const result = determineDamageLevel(8);  // Intensity greater than or equal to 7.5
    expect(result).toBe('Catastrophe: most buildings destroyed');
  });

});