function solution(N, A) {
  let defaultValue = 0;
  let max = 0;
  let valueMap = {};
  A.forEach(v => {
    if(v > N){
    defaultValue = max;
    valueMap = {};
  }else {
    let val = valueMap[v] || defaultValue;
    val = val + 1;
    valueMap[v] = val;
    if(val > max){
      max = val;
    }
  }
});
  let result = [];
  for(let i = 0; i < N; i++){
    result.push(valueMap[i+1] || defaultValue);
  }
  return result;
}