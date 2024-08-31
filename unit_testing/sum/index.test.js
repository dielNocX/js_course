import { describe, test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

describe('Sum Function', () => {
  test('should return correct sum', () => {
    // Arrange
    const a = 2;
    const b = 8;

    // Action
    const actualValue = sum(a, b);

    // Assert
    const expectedValue = 10;
    assert.equal(actualValue, expectedValue);
  });

  test('should return 0 if a is negative', () => {
    // Arrange
    const a = -2;
    const b = 8;

    // Action
    const actualValue = sum(a, b);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });

  test('should return 0 if b is negative', () => {
    // Arrange
    const a = 2;
    const b = -8;

    // Action
    const actualValue = sum(a, b);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });

  test('should return 0 if a parameter is a string', () => {
    // Arrange
    const a = '3';
    const b = 9;

    // Action
    const actualValue = sum(a, b);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });

  test('should return 0 if b parameter is a string', () => {
    // Arrange
    const a = 6;
    const b = '3';

    // Action
    const actualValue = sum(a, b);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });
});