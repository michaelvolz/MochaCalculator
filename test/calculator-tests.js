/// <reference path="../js/vendor/mocha.js" />
/// <reference path="../js/vendor/expect.js" />
/// <reference path="../js/calculator.js" />

describe("Calculator", function () {
    var calculator;

    beforeEach(function () {
        calculator = new Calculator();
    });

    describe("Add", function () {
        it("should return the sum of both operands", function () {
            expect(calculator.add(1, 1)).to.be(2);
        });
    });

    describe("Subtract", function () {
        it("should return the difference of both operands", function () {
            expect(calculator.subtract(5, 3)).to.be(2);
        });
    });
});
