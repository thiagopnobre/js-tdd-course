var expect = require('chai').expect;
var calc = require('../src/main.js');

describe('Calc', function() {
  describe('Smoke tests', function() {
    it('should exist the calc lib', function() {
      expect(calc).to.exist;
    });

    it('should exist the method `sum`', function() {
      expect(calc.sum).to.exist;
    });

    it('should exist the method `sub`', function() {
      expect(calc.sub).to.exist;
    });

    it('should exist the method `mult`', function() {
      expect(calc.mult).to.exist;
    });

    it('should exist the method `div`', function() {
      expect(calc.div).to.exist;
    });
  });
});
