const fizzbuzz = require('./fizzbuzz');

test('send 78, Fizz', ()=>{
    expect( fizzbuzz(78)).toBe("Fizz");
})

test('send 55, Buzz', ()=>{
    expect( fizzbuzz(55)).toBe("Buzz");
})

test('send 60, expect FizzBuzz', ()=>{
    expect( fizzbuzz(55)).toBe("Buzz");
})

test('send 7, expect 7', ()=>{
    expect( fizzbuzz(7)).toBe(7);
})
