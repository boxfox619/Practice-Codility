// you can write to stderr for debugging purposes, e.g.
// process.stderr.write('this is a debug message');

function solution(A, K) {
    const values = A.map(val => val.toString());
    const maxLength = values.reduce((max, val) => (max > val.length) ? max : val.length, 0);
    const maxPerLine = (A.length > K) ? K : A.length;
    printLine(maxPerLine, maxLength);
    do {
        const spliced = values.splice(0, maxPerLine);
        printData(spliced, maxLength);
        printLine(spliced.length, maxLength);
    } while(values.length > 0);
}

function printData(values, maxLength) {
    values.forEach(val => {
        const spaceCount = maxLength - val.length;
        process.stdout.write(`|${' '.repeat(spaceCount)}${val}`);
    })
    process.stdout.write('|\n');
}

function printLine(count, maxLength) {
    let cell = `+${'-'.repeat(maxLength)}`;
    process.stdout.write(`${cell.repeat(count)}+\n`);
}