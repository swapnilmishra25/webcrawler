const {normalizeURL, getURLsFromHTML} = require('./crawl.js');
const {test, expect} = require('@jest/globals');


test('normalizeURL strip protocol', ()=>{
    const input = ''
    const actual = normalizeURL(input);
    const expected = '';
    expect(actual).toEqual(expected);
})


test('normalizeURL strip trailing slash', ()=>{
    const input = ''
    const actual = normalizeURL(input);
    const expected = '';
    expect(actual).toEqual(expected);
})

test('normalizeURL strip http', ()=>{
    const input = ''
    const actual = normalizeURL(input);
    const expected = '';
    expect(actual).toEqual(expected);
})

test('getURLsfromHTML absolute', ()=>{
    const inputHTMLBody = `
    <html>
        <body>
            <a href = "https://www.google.com"> Google </a>
        </body>
    </html>`

    const inputBaseURL = "https://www.google.com"

    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
    const expected = "https://www.google.com";
    expect(actual).toEqual(expected);
})


test('getURLsfromHTML relative', ()=>{
    const inputHTMLBody = `
    <html>
        <body>
            <a href = "/path/"> Google </a>
        </body>
    </html>`

    const inputBaseURL = "https://www.google.com"

    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
    const expected = "https://www.google.com";
    expect(actual).toEqual(expected);
})


test('getURLsfromHTML both', ()=>{
    const inputHTMLBody = `
    <html>
        <body>
            <a href = "/path/"> Google </a>
            <a href = "https://www.google.com/path1/"> Google </a>
        </body>
    </html>`

    const inputBaseURL = "https://www.google.com"

    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
    const expected = ["https://www.google.com/path1/", "https://www.google.com/path/"];
    expect(actual).toEqual(expected);
})

test('getURLsfromHTML invalid', ()=>{
    const inputHTMLBody = `
    <html>
        <body>
            <a href = "/path/"> Google </a>
            <a href = "https://www.google.com/path1/"> Google </a>
        </body>
    </html>`

    const inputBaseURL = "invalid"

    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
    const expected = [];
    expect(actual).toEqual(expected);
})



