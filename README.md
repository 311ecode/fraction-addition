# fraction-arithmetic

A lightweight TypeScript library for adding, subtracting, multiplying, and dividing fractions with precise, simplified results.

## Installation

```bash
npm install fraction-arithmetic
````

## Usage

```typescript
import { addFractions, subtractFractions, multiplyFractions, divideFractions } from 'fraction-arithmetic';

// Add
console.log(addFractions(1, 2, 1, 3)); // Output: "5/6"

// Subtract
console.log(subtractFractions(1, 2, 1, 3)); // Output: "1/6"

// Multiply
console.log(multiplyFractions(1, 2, 2, 3)); // Output: "1/3"

// Divide
console.log(divideFractions(1, 2, 1, 4)); // Output: "2/1"
```

## API

### `addFractions(num1, den1, num2, den2)`

Adds two fractions. Returns a simplified string `numerator/denominator`.

### `subtractFractions(num1, den1, num2, den2)`

Subtracts the second fraction from the first. Returns a simplified string.

### `multiplyFractions(num1, den1, num2, den2)`

Multiplies two fractions. Returns a simplified string.

### `divideFractions(num1, den1, num2, den2)`

Divides the first fraction by the second. Returns a simplified string. Throws an error if dividing by zero.

## Features

  - ✨ Simple and intuitive API for all basic fraction operations
  - 🔢 Automatic fraction simplification using GCD (Greatest Common Denominator)
  - 📦 Zero dependencies
  - 💪 Written in TypeScript with full type safety
  - ✅ Thoroughly tested
  - 🚀 Lightweight and fast

## Algorithm

The library uses standard fraction arithmetic formulas. The result is simplified by dividing the numerator and denominator by their Greatest Common Denominator (GCD), calculated using Euclid's algorithm.

## Testing

The library includes comprehensive unit tests. Run the suite with:

```bash
npm test
```

## License

MIT