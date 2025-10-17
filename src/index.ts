function greatestCommonDenominator(a: number, b: number): number {
  // Use Euclid's algorithm to find the GCD
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return Math.abs(a); // Return the absolute value to handle negative inputs
}

function simplifyFraction(numerator: number, denominator: number): [number, number] {
  if (denominator === 0) {
    throw new Error("Denominator cannot be zero.");
  }
  const gcd = greatestCommonDenominator(numerator, denominator);
  return [numerator / gcd, denominator / gcd];
}

export function addFractions(num1: number, den1: number, num2: number, den2: number): string {
  // Formula: (num1 * den2 + num2 * den1) / (den1 * den2)
  const numerator = num1 * den2 + num2 * den1;
  const denominator = den1 * den2;
  const [simplifiedNum, simplifiedDen] = simplifyFraction(numerator, denominator);
  return `${simplifiedNum}/${simplifiedDen}`;
}

export function subtractFractions(num1: number, den1: number, num2: number, den2: number): string {
  // Formula: (num1 * den2 - num2 * den1) / (den1 * den2)
  const numerator = num1 * den2 - num2 * den1;
  const denominator = den1 * den2;
  const [simplifiedNum, simplifiedDen] = simplifyFraction(numerator, denominator);
  return `${simplifiedNum}/${simplifiedDen}`;
}

export function multiplyFractions(num1: number, den1: number, num2: number, den2: number): string {
  // Formula: (num1 * num2) / (den1 * den2)
  const numerator = num1 * num2;
  const denominator = den1 * den2;
  const [simplifiedNum, simplifiedDen] = simplifyFraction(numerator, denominator);
  return `${simplifiedNum}/${simplifiedDen}`;
}

export function divideFractions(num1: number, den1: number, num2: number, den2: number): string {
  // Check for division by zero (numerator of the second fraction)
  if (num2 === 0) {
    throw new Error("Cannot divide by a fraction with a numerator of zero.");
  }
  // Formula: (num1 * den2) / (den1 * num2)
  const numerator = num1 * den2;
  const denominator = den1 * num2;
  const [simplifiedNum, simplifiedDen] = simplifyFraction(numerator, denominator);
  return `${simplifiedNum}/${simplifiedDen}`;
}