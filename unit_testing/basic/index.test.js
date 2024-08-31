import { describe, test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

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
});