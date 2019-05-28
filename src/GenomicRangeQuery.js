// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const DNA_MAP = {
  A: 1,
  C: 2,
  G: 3,
  T: 4
}

function solution(S, P, Q) {
  const typeCount = { A: 0, C: 0, G: 0, T: 0 };
  const typeCountList = [{ ...typeCount }];
  S.split('').forEach(type => {
      typeCount[type] += 1;
      typeCountList.push({ ...typeCount });
  })
  const result = [];
  for (let i = 0; i < P.length; i++) {
      const start = P[i];
      const end = Q[i];
      for (const type in DNA_MAP) {
          if (typeCountList[end + 1][type] - typeCountList[start][type] > 0) {
              result.push(DNA_MAP[type]);
              break;
          }
      }
  }
  return result;
}