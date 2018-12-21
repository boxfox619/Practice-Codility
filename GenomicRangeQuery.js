const TYPES = {
  'A': 1,
  'C': 2,
  'G': 3,
  'T': 4
}

function solution(S, P, Q) {
  const N = S.length;
  const words = S.split('');
  const typeCount = {A: 0, C: 0, G: 0, T:0};
  const valueMap = [];
  valueMap.push({...typeCount});
  words.forEach((w) => {
    typeCount[w] += 1;
  valueMap.push({...typeCount});
});

  const M = P.length;
  const results = [];
  for(let i = 0; i < M; i++){
    const start = P[i];
    const end = Q[i];
    for(let type in TYPES){
      if(valueMap[end+1][type] - valueMap[start][type] > 0){
        results.push(TYPES[type]);
        break;
      }
    }
  }
  return results;
}