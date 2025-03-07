import { determineDamageLevel } from './functions.js';

describe("Tests earthquake damage levels based on Richter scale intensity", function() {

  it("test little or no damage", function() {
    const result = determineDamageLevel(4);  
    expect(result).toBe('Little or no damage');
  });

  it("test some damage", function() {
    const result = determineDamageLevel(5);  
    expect(result).toBe('Some damage');
  });

  it("test serious damage", function() {
    const result = determineDamageLevel(6);  
    expect(result).toBe('Serious damage: walls may crack or fall');
  });

  it("test disaster", function() {
    const result = determineDamageLevel(7);  
    expect(result).toBe('Disaster: buildings may collapse');
  });

  it("test catastrophe", function() {
    const result = determineDamageLevel(8);
    expect(result).toBe('Catastrophe: most buildings destroyed');
  });

});