import { expect } from 'chai';
import { sum, sub, mult, div, fizzBuzz } from '../src/main';

describe('Calc', () => {
  describe('Smoke tests', () => {
    it('should exist the method `sum`', () => {
      expect(sum).to.exist;
    });

    it('should exist the method `sub`', () => {
      expect(sub).to.exist;
    });

    it('should exist the method `mult`', () => {
      expect(mult).to.exist;
    });

    it('should exist the method `div`', () => {
      expect(div).to.exist;
    });
  });

  describe('Sum', () => {
    it('should return 4 when `sum(2, 2)`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 4 when `sub(6, 2)`', () => {
      expect(sub(6, 2)).to.be.equal(4);
    });

    it('should return -4 when `sub(6, 10)`', () => {
      expect(sub(6, 10)).to.be.equal(-4);
    });
  });

  describe('Mult', () => {
    it('should return 4 when `mult(2, 2)`', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });

    it('should return 0 when `mult(0, 2)`', () => {
      expect(mult(0, 2)).to.be.equal(0);
    });
  });

  describe('Div', () => {
    it('should return 2 when `div(4, 2)`', () => {
      expect(div(4, 2)).to.be.equal(2);
    });

    it('should return `Não é possível divisão por zero!` when divide by 0', () => {
      expect(div(4, 0)).to.be.equal('Não é possível divisão por zero!');
    });
  });
});

describe('FizzBuzz', () => {
  it('should return `Fizz` when multiple of 3', () => {
    expect(fizzBuzz(3)).to.be.equal('Fizz');
    expect(fizzBuzz(6)).to.be.equal('Fizz');
  });

  it('should return `Buzz` when multiple of 5', () => {
    expect(fizzBuzz(5)).to.be.equal('Buzz');
    expect(fizzBuzz(10)).to.be.equal('Buzz');
  });

  it('should return `FizzBuzz` when multiple of 3 and 5', () => {
    expect(fizzBuzz(15)).to.be.equal('FizzBuzz');
    expect(fizzBuzz(30)).to.be.equal('FizzBuzz');
  });

  it('should return the when non-multiple of 3 and/or 5', () => {
    expect(fizzBuzz(7)).to.be.equal(7);
    expect(fizzBuzz(13)).to.be.equal(13);
  });
});
