import { addFractions } from '../src/fractionAddition';

describe('Fraction Addition Tests', () => {
  test('1/500 + 1/500 should equal 1/250', () => {
    expect(addFractions(1, 500, 1, 500)).toBe('1/250');
  });

  test('2/1000 + 1/500 should equal 1/250', () => {
    expect(addFractions(2, 1000, 1, 500)).toBe('1/250');
  });

  test('1/2 + 1/3 should equal 5/6', () => {
    expect(addFractions(1, 2, 1, 3)).toBe('5/6');
  });

  test('1/4 + 1/4 should equal 1/2', () => {
    expect(addFractions(1, 4, 1, 4)).toBe('1/2');
  });

  test('3/8 + 1/4 should equal 5/8', () => {
    expect(addFractions(3, 8, 1, 4)).toBe('5/8');
  });

  test('0/1 + 1/2 should equal 1/2', () => {
    expect(addFractions(0, 1, 1, 2)).toBe('1/2');
  });

  test('7/10 + 3/10 should equal 1/1', () => {
    expect(addFractions(7, 10, 3, 10)).toBe('1/1');
  });
});