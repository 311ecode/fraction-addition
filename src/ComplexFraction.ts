/**
 * Represents and manipulates multi-storey (complex) fractions.
 * An array like [a, b, c] is interpreted as ((a / b) / c).
 */
export class ComplexFraction {
  public readonly numerator: number;
  public readonly denominator: number;

  /**
   * Creates an instance of a ComplexFraction.
   * @param parts An array of numbers representing the fraction's layers, e.g., [1, 2, 3] for 1/6.
   */
  constructor(parts: number[]) {
    if (parts.length === 0) {
      throw new Error("Cannot create a fraction from an empty array.");
    }

    // The first part is the initial numerator.
    const finalNumerator = parts[0];

    // The rest of the parts are multiplied together to form the denominator.
    const finalDenominator = parts.slice(1).reduce((product, current) => product * current, 1);

    if (finalDenominator === 0) {
      throw new Error("The resulting denominator cannot be zero.");
    }

    // Simplify the flattened fraction.
    const [simplifiedNum, simplifiedDen] = this._simplify(finalNumerator, finalDenominator);
    this.numerator = simplifiedNum;
    this.denominator = simplifiedDen;
  }

  private _greatestCommonDenominator(a: number, b: number): number {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
      [a, b] = [b, a % b];
    }
    return a;
  }

  private _simplify(num: number, den: number): [number, number] {
    const gcd = this._greatestCommonDenominator(num, den);
    let numerator = num / gcd;
    let denominator = den / gcd;
    
    // Ensure denominator is always positive for consistency (e.g., -1/2 not 1/-2)
    if (denominator < 0) {
        numerator = -numerator;
        denominator = -denominator;
    }

    return [numerator, denominator];
  }

  add(other: ComplexFraction): ComplexFraction {
    const newNum = this.numerator * other.denominator + other.numerator * this.denominator;
    const newDen = this.denominator * other.denominator;
    return new ComplexFraction([newNum, newDen]);
  }

  subtract(other: ComplexFraction): ComplexFraction {
    const newNum = this.numerator * other.denominator - other.numerator * this.denominator;
    const newDen = this.denominator * other.denominator;
    return new ComplexFraction([newNum, newDen]);
  }

  multiplyBy(other: ComplexFraction): ComplexFraction {
      const newNum = this.numerator * other.numerator;
      const newDen = this.denominator * other.denominator;
      return new ComplexFraction([newNum, newDen]);
  }

  divideBy(other: ComplexFraction): ComplexFraction {
      if (other.numerator === 0) {
          throw new Error("Cannot divide by a zero fraction.");
      }
      const newNum = this.numerator * other.denominator;
      const newDen = this.denominator * other.numerator;
      return new ComplexFraction([newNum, newDen]);
  }

  toString(): string {
    return `${this.numerator}/${this.denominator}`;
  }

  toNumber(): number {
    return this.numerator / this.denominator;
  }
}