const test = require('../lib/testing.js');
const shapes = require('../src/shapes/square.js');

const testSquare = function() {
  test.assertEquality("****\n****\n****\n****\n", shapes.square(4), 'should give square of given length');
}

testSquare();
