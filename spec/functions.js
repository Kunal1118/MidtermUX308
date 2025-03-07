export function calculateTotal(nickels, dimes, quarters, loonies, toonies) {
    // Coin values
    const nickelValue = 0.05;
    const dimeValue = 0.10;
    const quarterValue = 0.25;
    const loonieValue = 1.00;
    const toonieValue = 2.00;
  
    // Calculate total value
    let total = (nickels * nickelValue) + (dimes * dimeValue) + (quarters * quarterValue) + (loonies * loonieValue) + (toonies * toonieValue);
  
    return total;
  }
  
  // Function to convert Fahrenheit to Celsius
  export function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
  }
  
  // Function to calculate the volume of a cube given the height in meters
  export function calculateCubeVolume(height) {
    return height ** 3;
  }
  
  // Function to calculate the total cost of a gym membership with a discount based on the number of friends signed up
  export function calculateGymCost(cost, friends) {
    let discount = 0;
  
    if (friends === 1) {
        discount = 0.05;  // 5% discount for 1 friend
    } else if (friends === 2) {
        discount = 0.10;  // 10% discount for 2 friends
    } else if (friends >= 3) {
        discount = 0.15;  // 15% discount for 3 or more friends
    }
  
    const totalCost = cost - (cost * discount);
    return totalCost;
  }
  
  // Function to determine the damage level based on the Richter scale intensity
  export function determineDamageLevel(intensity) {
    let result = '';
  
    if (intensity < 5) {
        result = 'Little or no damage';
    } else if (intensity >= 5 && intensity < 5.5) {
        result = 'Some damage';
    } else if (intensity >= 5.5 && intensity < 6.5) {
        result = 'Serious damage: walls may crack or fall';
    } else if (intensity >= 6.5 && intensity < 7.5) {
        result = 'Disaster: buildings may collapse';
    } else {
        result = 'Catastrophe: most buildings destroyed';
    }
  
    return result;
  }