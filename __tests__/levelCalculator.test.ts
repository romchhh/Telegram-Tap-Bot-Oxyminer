import { calculateLevel } from '../utils/levelCalculator';

describe('Level Calculator', () => {
  test('should return level 1 for points less than 100', () => {
    expect(calculateLevel(50)).toBe(1);
  });

  test('should return level 2 for points between 100 and 499', () => {
    expect(calculateLevel(150)).toBe(2);
  });

  test('should return level 3 for points between 500 and 999', () => {
    expect(calculateLevel(750)).toBe(3);
  });

  test('should return level 4 for points greater than or equal to 1000', () => {
    expect(calculateLevel(1200)).toBe(4);
  });
});
