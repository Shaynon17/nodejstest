const { fizzbuzzConverter, helloWorld, sumOfSquares, flipFlop, capitalize } = require("./fizzbuzz")



/*
test("fizzbuzzConverter(1) will return 1", () => {
    expect(fizzbuzzConverter(1)).toBe(1);
})

test("fizzbuzzConverter(3) will return 'fizz'", () => {
    expect(fizzbuzzConverter(3)).toBe('fizz');
})

test('fizzbuzzconverter(5) will return "buzz"', () => {
    expect(fizzbuzzConverter(5)).toBe('buzz');
})

test('fizzbuzzconverter(15) will return "buzz"', () => {
    expect(fizzbuzzConverter(15)).toBe('fizzbuzz');
})

test('fizzbuzzconverter(10) will return "buzz"', () => {
    expect(fizzbuzzConverter(10)).toBe('buzz');
})

test('fizzbuzzconverter(9) will return "buzz"', () => {
    expect(fizzbuzzConverter(9)).toBe('fizz');
})

test('fizzbuzzconverter(150) will return "buzz"', () => {
    expect(fizzbuzzConverter(150)).toBe('fizzbuzz');
})
*/
test('Hello world steve returns steve', () => {
    expect(helloWorld('Steve')).toBe('Hello Steve')
})

test('The square of 5 added to the square of 5 is 50', () => {
    expect(sumOfSquares(5)).toBe(50)
})

test('ST returns as TS', () => {
    expect(flipFlop('st')).toBe('ts')
})

test('capitalize will uppercase the first letter', () => {
    expect(capitalize('shannon')).toBe('Shannon')
})