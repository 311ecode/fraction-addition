import { addFractions, subtractFractions, multiplyFractions, divideFractions } from '../src/index';

describe('Fraction Operations', () => {

  describe('Addition', () => {
    test('1/2 + 1/3 should equal 5/6', () => {
      expect(addFractions(1, 2, 1, 3)).toBe('5/6');
    });
    test('1/4 + 1/4 should equal 1/2', () => {
      expect(addFractions(1, 4, 1, 4)).toBe('1/2');
    });
  });

  describe('Subtraction', () => {
    test('1/2 - 1/3 should equal 1/6', () => {
      expect(subtractFractions(1, 2, 1, 3)).toBe('1/6');
    });
    test('3/4 - 1/4 should equal 1/2', () => {
      expect(subtractFractions(3, 4, 1, 4)).toBe('1/2');
    });
  });

  describe('Multiplication', () => {
    test('1/2 * 2/3 should equal 1/3', () => {
      expect(multiplyFractions(1, 2, 2, 3)).toBe('1/3');
    });
    test('3/5 * 5/6 should equal 1/2', () => {
      expect(multiplyFractions(3, 5, 5, 6)).toBe('1/2');
    });
  });

  describe('Division', () => {
    test('1/2 / 1/4 should equal 2/1', () => {
      expect(divideFractions(1, 2, 1, 4)).toBe('2/1');
    });
    test('3/4 / 3/8 should equal 2/1', () => {
      expect(divideFractions(3, 4, 3, 8)).toBe('2/1');
    });
    test('should throw error when dividing by zero', () => {
      expect(() => divideFractions(1, 2, 0, 1)).toThrow('Cannot divide by a fraction with a numerator of zero.');
    });
  });

});