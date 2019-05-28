// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    const result = A.reduce((map, value, index, array) => {
      if (map.hasOwnProperty(value)) {
        delete map[value];
      } else {
        map[value] = 1;
      }
      return map;
    }, {});
    const keys = Object.keys(result);
    if(!keys){
      throw new Error('not found unpaired value');
    }
    return parseInt(keys[0]);
}
