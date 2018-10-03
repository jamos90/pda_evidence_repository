var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add 1 to 4 to get 5', function(){
    calculator.previousTotal = 4
    const actual = calculator.add(1);
    assert.strictEqual(calculator.runningTotal,5);
  })

  it('should be able to remove 4 from 7 numbers and get 3', function(){
    calculator.previousTotal = 7;
    const actual = calculator.subtract(4);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('should be able to multiply 3 by 5 to get 15', function(){
    calculator.previousTotal = 3;
    const actual = calculator.multiply(5);
    assert.strictEqual(calculator.runningTotal, 15);
  })

  it('should be ablit to divide 21 by 7 to get 3', function(){
    calculator.previousTotal = 21;
    const actual = calculator.divide(7);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  describe('integration tests', function (){

  it('should concatenate multiple number button clicks', function (){
    calculator.runningTotal = 0;
    calculator.numberClick(4);
    calculator.numberClick(3);
    calculator.numberClick(2);
    assert.strictEqual(calculator.runningTotal,(432));
  })

  it('should chain multiple operators together', function () {
    calculator.runningTotal = 4;
    calculator.operatorClick("+");
    calculator.operatorClick("+");
    calculator.operatorClick("+");
    assert.strictEqual(calculator.runningTotal ,16);
  })

  it('should stop chaing multiple operators if = is selected', function (){
    calculator.runningTotal = 0;
    calculator.operatorClick("+");
    calculator.numberClick(3);
    calculator.operatorClick("=");
    calculator.operatorClick('+')
    calculator.numberClick(3);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('should be able to clear function without affecting the current total', function(){
    calculator.runningTotal = 4
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    calculator.clearClick();
    assert.strictEqual(calculator.previousTotal, 7);
  })
  })



});
