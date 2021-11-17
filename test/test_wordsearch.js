const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically and has less characters than the length of the column or row", function() {
    const result = wordSearch([
      ['E', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['L', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['L', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['I', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['E', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ELLIE')

    assert.isTrue(result);
  });

  it("should return true if the word is present horizontally and has less characters than the length of the column or row", function() {
    const result = wordSearch([
      ['E', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['L', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Z', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['I', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['E', 'L', 'L', 'I', 'E', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ELLIE')

    assert.isTrue(result);
  });

  it("should return true if the word is present horizontally AND vertically and has less characters than the length of the column or row", function() {
    const result = wordSearch([
      ['E', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['L', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['L', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['I', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['E', 'L', 'L', 'I', 'E', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ELLIE')

    assert.isTrue(result);
  });

  it("should return true if the word is lower case", function() {
    const result = wordSearch([
      ['E', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['L', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['L', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['I', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['E', 'Z', 'L', 'I', 'E', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ellie')

    assert.isTrue(result);
  });

  it("should return true if the word contains upper and lower case characters", function() {
    const result = wordSearch([
      ['E', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['L', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['L', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['I', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['E', 'Z', 'L', 'I', 'E', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ElLie')

    assert.isTrue(result);
  });

  it("should return false if an empty string is passed in", function() {
    const result = wordSearch([
      ['E', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['L', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['L', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['I', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['E', 'Z', 'L', 'I', 'E', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], '')

    assert.isFalse(result);
  });

  it("should return false if undefined is passed in", function() {
    const result = wordSearch([
      ['E', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['L', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['L', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['I', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['E', 'Z', 'L', 'I', 'E', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], undefined)

    assert.isFalse(result);
  });

  it("should return false if a number is passed in", function() {
    const result = wordSearch([
      ['E', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['L', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['L', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['I', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['E', 'Z', 'L', 'I', 'E', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 94847)

    assert.isFalse(result);
  });

  it("should return true if a word in present in a non-square matrix", function() {
    const result = wordSearch([
      ['E', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['L', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Z', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['Z', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['E', 'Z', 'L', 'I', 'E', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'E', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'L', 'A', 'L'],
      ['O', 'D', 'C', 'A', 'K', 'L', 'A', 'S'],
      ['O', 'D', 'C', 'A', 'K', 'I', 'A', 'S'],
      ['O', 'D', 'C', 'A', 'K', 'E', 'A', 'S'],
    ], 'ELLIE')

    assert.isTrue(result);
  });
});
