function greatestCommonDenominator(a: number, b: number): number {
  // Loop continues as long as b is not zero
  while (b !== 0) {
    // Store the current value of b in a temporary variable
    let temp = b;
    
    // The new b becomes the remainder of a divided by the old b
    b = a % b; 
    
    // The new a becomes the old b (which we saved in temp)
    a = temp;
  }
  
  // When the loop finishes, b is 0, and a holds the GCD
  return a;
}

export function addFractions(num1: number, den1: number, num2: number, den2: number): string {
  // Add fractions: num1/den1 + num2/den2
  // Formula: (num1 * den2 + num2 * den1) / (den1 * den2)
  
  const numerator = num1 * den2 + num2 * den1;
  const denominator = den1 * den2;
  
  // Simplify the fraction by dividing both by their GCD
  const gcd = greatestCommonDenominator(numerator, denominator);
  const simplifiedNum = numerator / gcd;
  const simplifiedDen = denominator / gcd;
  
  return `${simplifiedNum}/${simplifiedDen}`;
}

// Example usage:
if (require.main === module) {
  console.log(addFractions(1, 500, 1, 500)); // Output: 1/250
  console.log(addFractions(2, 1000, 1, 500)); // Output: 1/250
}