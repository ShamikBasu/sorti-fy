/*
    Unit test cases for getType function
    list of checks
        1. number
        2. string
        3. boolean
        4. null (object)
        5. undefined
        6. object
        7. function
*/
const getType = require('../getType').getType;

describe('getType', () => {
    it('should return "number" for numbers', () => {
      expect(getType(42)).toBe('number');
    });
  
    it('should return "string" for strings', () => {
      expect(getType('hello')).toBe('string');
    });
  
    it('should return "boolean" for booleans', () => {
      expect(getType(true)).toBe('boolean');
    });
  
    it('should return "object" for null', () => {
      expect(getType(null)).toBe('object'); // Note: typeof null is "object"
    });
  
    it('should return "undefined" for undefined', () => {
      expect(getType(undefined)).toBe('undefined');
    });
  
    it('should return "object" for objects', () => {
      expect(getType({})).toBe('object');
    });
  
    it('should return "function" for functions', () => {
      expect(getType(getType)).toBe('function');
    });
  });