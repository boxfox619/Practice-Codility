// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
    const distance = Y - X;
    let jump = Math.ceil(distance / D);
    return jump ;
}
