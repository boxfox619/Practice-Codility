// you can write to stderr for debugging purposes, e.g.
// process.stderr.write('this is a debug message');

function solution(A, K) {
    const maxLength = A.map(val => val.toString()).reduce((max, val) => (max > val.length) ? max : val.length, 0);
    const maxPerLine = (A.length > K) ? K : A.length;
    printLine(maxPerLine, maxLength);
    do {
        const values = A.splice(0, maxPerLine);
        printData(values, maxLength);
        printLine(values.length, maxLength);
    } while(A.length > 0);
}

function printData(values, maxLength) {
    values.forEach(val => {
        const spaceCount = maxLength - val.toString().length;
        const line = `|${' '.repeat(spaceCount)}${val}`;
        process.stdout.write(line);
    })
    process.stdout.write('|\n');
}

function printLine(count, maxLength) {
    let line = `+${'-'.repeat(maxLength)}`;
    line = `${line.repeat(count)}+\n`;
    process.stdout.write(line);
}