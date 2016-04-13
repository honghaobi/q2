const code = require('../main');
const expect = require('chai').expect;

describe("Hello World", () => {
  it("should say 'Hello, World!' when ran", () => {
    expect(code.helloWorld()).to.equal('Hello, World!');
  });
});

describe("Leap Year", () => {
  it("year 1600 is a leap year", () => {
    expect(code.leapYear(1600)).to.equal(true);
  });
  it("year 2000 is a leap year", () => {
    expect(code.leapYear(2000)).to.equal(true);
  });
  it("year 1700 is not a leap year", () => {
    expect(code.leapYear(1700)).to.equal(false);
  });
  it("year 1800 is not a leap year", () => {
    expect(code.leapYear(1800)).to.equal(false);
  });
  it("year 1900 is not a leap year", () => {
    expect(code.leapYear(1900)).to.equal(false);
  });
});

describe('Tax Calculator', () => {
  it('should tax 10% on the first $10', () => {
    expect(code.calculate(1)).to.equal(0.1);
    expect(code.calculate(10)).to.equal(1);
  });

  it('should tax 7% on the second $10', () => {
    expect(code.calculate(15)).to.equal(1.35);
  });
  it('should tax 5% on the third $10', () => {
    expect(code.calculate(25)).to.equal(1.95);
  });
  it('should tax 3% after $30', () => {
    expect(code.calculate(37)).to.equal(2.41);
  });
});
