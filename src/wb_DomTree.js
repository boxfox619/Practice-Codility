// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution() {
    return checkDepth(document.querySelectorAll('ul,ol'));
}

function checkDepth(elements) {
    if (elements.length === 0) {
        return 0;
    }
    const maxDepth = Array.from(elements)
        .filter(element => element.querySelectorAll('ul,ol').length > 0)
        .reduce((max, element) => {
            const depth = checkDepth(element.querySelectorAll('ul,ol'));
            return Math.max(max, depth);
        }, 0);
    return maxDepth + 1;
}