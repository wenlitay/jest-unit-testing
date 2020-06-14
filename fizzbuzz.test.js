const say = require('./fizzbuzz');

test('say(4) returns "4"', () => {
  expect(say(4)).toBe(4);
});

test('say(33) returns "Fizz"', () => {
    expect(say(33)).toBe('Fizz');
  });

test('say(95) returns "Buzz"', () => {
    expect(say(95)).toBe('Buzz');
});

test('say(60) returns "Fizz Buzz"', () => {
    expect(say(60)).toBe('Fizz Buzz');
});