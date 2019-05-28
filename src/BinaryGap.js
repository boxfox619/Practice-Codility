// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  let gapLength = 0;
  const binary = N.toString(2)
  const gaps = binary.split('1').filter(str => str.length>0)
  if(!binary.endsWith('1')){
    gaps.splice(gaps.length-1, 1)
  }
  gaps.forEach(gap => (gap.length > gapLength) && (gapLength = gap.length))
  return gapLength;
}