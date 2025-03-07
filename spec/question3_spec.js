import { calculateCubeVolume } from './functions.js';

describe("Tests cube volume calculation", function() {

  it("test small cube", function() {
    const volume = calculateCubeVolume(3);  
    expect(volume).toBe(27); 
  });

  it("test medium cube", function() {
    const volume = calculateCubeVolume(6);  
    expect(volume).toBe(216); 
  });

  it("test large cube", function() {
    const volume = calculateCubeVolume(12);  
    expect(volume).toBe(1728); 
  });

});