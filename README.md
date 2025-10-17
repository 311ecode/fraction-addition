# fraction-arithmetic

A lightweight TypeScript library for all your fraction needs. It provides simple functions for quick calculations and a powerful `ComplexFraction` class for more advanced, object-oriented operations.

## Installation
```bash
npm install fraction-arithmetic
````

## Usage

You can use this library in two ways:

### 1\. Functional Approach (for quick calculations)

These are simple, direct functions for one-off arithmetic.

```typescript
import { addFractions, multiplyFractions } from 'fraction-arithmetic';

console.log(addFractions(1, 2, 1, 3));      // Output: "5/6"
console.log(multiplyFractions(3, 4, 2, 3)); // Output: "1/2"
```

### 2\. Object-Oriented Approach (for complex operations)

Use the `ComplexFraction` class when you want to work with fractions as objects, chain operations, or handle multi-storey fractions ("emeletes törtek").

The constructor takes an array `[a, b, c]` and interprets it as `a / (b * c)`.

```typescript
import { ComplexFraction } from 'fraction-arithmetic';

// Create fractions from multi-storey arrays
const f1 = new ComplexFraction([1, 2, 3]); // Represents (1/2)/3 => 1/6
const f2 = new ComplexFraction([5, 6]);   // Represents 5/6

// Chain operations
const result = f1.add(f2).multiplyBy(new ComplexFraction([3, 1])); // (1/6 + 5/6) * (3/1) => 1 * 3 => 3/1

console.log(result.toString()); // Output: "3/1"
console.log(result.toNumber()); // Output: 3
```

## API

### Functions

  - `addFractions(num1, den1, num2, den2)`
  - `subtractFractions(num1, den1, num2, den2)`
  - `multiplyFractions(num1, den1, num2, den2)`
  - `divideFractions(num1, den1, num2, den2)`

### Class: `ComplexFraction`

  - **`new ComplexFraction(parts: number[])`**: Constructor.
  - **`.add(other)`**: Returns a new `ComplexFraction` instance with the sum.
  - **`.subtract(other)`**: Returns a new `ComplexFraction` instance with the difference.
  - **`.multiplyBy(other)`**: Returns a new `ComplexFraction` instance with the product.
  - **`.divideBy(other)`**: Returns a new `ComplexFraction` instance with the quotient.
  - **`.toString()`**: Returns the fraction as a string (e.g., `"3/1"`).
  - **`.toNumber()`**: Returns the fraction as a number (e.g., `3`).

## License

MIT