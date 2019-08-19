const leapyear = require('./leapyear');


test('send 2016, true', ()=>{
    expect( leapyear(2016)).toBe(true);
})


test('send 1700, true', ()=>{
    expect( leapyear(1700)).toBe(false);
})

test('send 2000, true', ()=>{
    expect( leapyear(2000)).toBe(true);
})