// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution() {
    return Array.from(document.getElementsByTagName('td'))
        .filter(elem => compareColor(elem))
        .map(elem => elem.textContent)
        .join('');
}

function compareColor(element) {
    const backgroundColor = getCorrectHex(element.style.backgroundColor);
    const textColor = getCorrectHex(element.style.color);
    return backgroundColor !== textColor;
}

function getCorrectHex(hex) {
    const shorthandRegex = /^#?([A-Fa-f\d])([A-Fa-f\d])([A-Fa-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });
    return hex.toUpperCase();
}