# fraction-addition

A lightweight TypeScript library for adding and simplifying fractions with precise results.

## Installation

```bash
npm install fraction-addition
```

Or with yarn:

```bash
yarn add fraction-addition
```

## Usage

```typescript
import { addFractions } from 'fraction-addition';

// Add two fractions and get simplified result
const result = addFractions(1, 500, 1, 500);
console.log(result); // Output: "1/250"

// More examples
console.log(addFractions(1, 2, 1, 3));    // Output: "5/6"
console.log(addFractions(2, 1000, 1, 500)); // Output: "1/250"
console.log(addFractions(1, 4, 1, 4));    // Output: "1/2"
```

## API

### `addFractions(num1, den1, num2, den2)`

Adds two fractions and returns the simplified result as a string.

**Parameters:**
- `num1` (number): Numerator of the first fraction
- `den1` (number): Denominator of the first fraction
- `num2` (number): Numerator of the second fraction
- `den2` (number): Denominator of the second fraction

**Returns:**
- `string`: The simplified fraction in the format "numerator/denominator"

**Example:**
```typescript
addFractions(1, 500, 1, 500); // Returns "1/250"
```

## Features

- ✨ Simple and intuitive API
- 🔢 Automatic fraction simplification using GCD (Greatest Common Denominator)
- 📦 Zero dependencies
- 💪 Written in TypeScript with full type safety
- ✅ Thoroughly tested
- 🚀 Lightweight and fast

## Development

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/fraction-addition.git
cd fraction-addition

# Install dependencies
npm install
```

### Scripts

```bash
# Run the example
npm run dev

# Build the project
npm run build

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run compiled JavaScript
npm start
```

### Project Structure

```
fraction-addition/
├── src/
│   └── fractionAddition.ts      # Main implementation
├── test/
│   └── fractionAddition.test.ts # Test suite
├── dist/                        # Compiled JavaScript (generated)
├── jest.config.js               # Jest configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Package metadata
└── README.md                    # This file
```

## Algorithm

The library uses the standard fraction addition formula:

```
a/b + c/d = (a×d + c×b) / (b×d)
```

The result is then simplified by dividing both numerator and denominator by their Greatest Common Denominator (GCD), calculated using Euclid's algorithm.

## Testing

The library includes comprehensive unit tests covering:
- Basic fraction addition
- Simplification edge cases
- Zero handling
- Results that equal whole numbers

Run the test suite:

```bash
npm test
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT © [Your Name]

## Author

Your Name - [@yourhandle](https://twitter.com/yourhandle)

## Links

- [GitHub Repository](https://github.com/yourusername/fraction-addition)
- [npm Package](https://www.npmjs.com/package/fraction-addition)
- [Issue Tracker](https://github.com/yourusername/fraction-addition/issues)