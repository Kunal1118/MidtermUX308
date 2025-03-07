function earthquakeDamage(intensity) {
    if (intensity < 5) {
        return "Little or no damage";
    } else if (intensity >= 5 && intensity < 5.5) {
        return "Some damage";
    } else if (intensity >= 5.5 && intensity < 6.5) {
        return "Serious damage: walls may crack or fall";
    } else if (intensity >= 6.5 && intensity < 7.5) {
        return "Disaster: buildings may collapse";
    } else {
        return "Catastrophe: most buildings destroyed";
    }
}

// Tests
console.log(earthquakeDamage(4.5)); 
console.log(earthquakeDamage(5.2)); 
console.log(earthquakeDamage(6.0)); 
console.log(earthquakeDamage(7.0)); 
console.log(earthquakeDamage(8.0)); 