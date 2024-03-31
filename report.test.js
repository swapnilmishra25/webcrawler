const {sortPages} = require('./report.js');
const {test, expect} = require('@jest/globals');


test('sortPages', ()=>{
    const input = {
        'https://www.google.com': 3,
        'https://www.youtube.com': 2

    }
    const actual = sortPages(input);
    const expected = [
        ['https://www.google.com', 3],
        ['https://www.youtube.com', 2],
    ];
    expect(actual).toEqual(expected);
})