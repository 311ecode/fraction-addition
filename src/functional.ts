function greatestCommonDenominator(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}

function simplifyFraction(numerator: number, denominator: number): [number, number] {
  if (denominator === 0) {
    throw new Error("Denominator cannot be zero.");
  }
  const gcd = greatestCommonDenominator(numerator, denominator);
  return [numerator / gcd, denominator / gcd];
}

export function addFractions(num1: number, den1: number, num2: number, den2: number): string {
  const numerator = num1 * den2 + num2 * den1;
  const denominator = den1 * den2;
  const [simplifiedNum, simplifiedDen] = simplifyFraction(numerator, denominator);
  return `${simplifiedNum}/${simplifiedDen}`;
}

export function subtractFractions(num1: number, den1: number, num2: number, den2: number): string {
  const numerator = num1 * den2 - num2 * den1;
  const denominator = den1 * den2;
  const [simplifiedNum, simplifiedDen] = simplifyFraction(numerator, denominator);
  return `${simplifiedNum}/${simplifiedDen}`;
}

export function multiplyFractions(num1: number, den1: number, num2: number, den2: number): string {
  const numerator = num1 * num2;
  const denominator = den1 * den2;
  const [simplifiedNum, simplifiedDen] = simplifyFraction(numerator, denominator);
  return `${simplifiedNum}/${simplifiedDen}`;
}

export function divideFractions(num1: number, den1: number, num2: number, den2: number): string {
  if (num2 === 0) {
    throw new Error("Cannot divide by a fraction with a numerator of zero.");
  }
  const numerator = num1 * den2;
  const denominator = den1 * num2;
  const [simplifiedNum, simplifiedDen] = simplifyFraction(numerator, denominator);
  return `${simplifiedNum}/${simplifiedDen}`;
}