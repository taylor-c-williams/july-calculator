import { add } from '../utils.js';
import { subtract } from '../utils.js';
import { multiply } from '../utils.js';
import { divide } from '../utils.js';

const test = QUnit.test;

test('add should take in 5 and 3 and return 8', (expect) => {
    const expected = 8;
    const actual = add(5, 3);
    expect.equal(actual, expected);
});


test('subtract should take inputs 7 and 5 and return 2', (expect) => {
    const expected = 2;
    const actual = subtract(7, 5);
    expect.equal(actual, expected);
});


test('multiply should take 2 and 4 and output 8', (expect) => {
    const expected = 8;
    const actual = multiply(2, 4);
    expect.equal(actual, expected);
});

test('divide should take 10 and 2 and output 5', (expect) => {
    const expected = 5;
    const actual = divide(10, 2);
    expect.equal(actual, expected);
});