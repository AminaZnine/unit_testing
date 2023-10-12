const assert = require('chai').assert;
const mylib = require('../src/mylib');

describe('Mylib', function() {

    before(function() {
        console.log('Setting up the tests');

    });
    after(function() {
        console.log('Cleaning up after the tests');
    });

    describe('#add()', function() {
        it('should add two numbers', function() {
            assert.equal(mylib.add(1,2), 3);
        });
    });

    describe('#substract()', function() {
        it('should substract two numbers', function() {
            assert.equal(mylib.substract(1,2), -1);
        });
    });
    
    describe('#multiply()', function() {
        it('should multiply two numbers', function() {
            assert.equal(mylib.multiply(1, 2), 2);
        });
    });

    describe('#divide()', function() {
        it('should divide two numbers', function() {
            assert.equal(mylib.divide(1, 2), 0.5);
        });
        
        it('should throw error when dividing by zero', function() {
            assert.throw(() => mylib.divide(1, 0), Error, "Cannot divide by zero");
        });
    });
});