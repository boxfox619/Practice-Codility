// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution() {
    const results = [];
    const elements = document.getElementsByTagName('td');
    for(const td in elements) {
        const backgroundColor = getCorrectHex(td.style.backgroundColor);
        const textColor = getCorrectHex(td.style.color);
        if(backgroundColor !== textColor) {
            results.push(td.textContent);
        }
    }
    return results;
}

function getCorrectHex(hex) {
    const shorthandRegex = /^#?([A-Fa-f\d])([A-Fa-f\d])([A-Fa-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });
    return hex.toUpperCase();
}