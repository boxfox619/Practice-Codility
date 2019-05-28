function solution(X, A) {
  let steps = X;
  const bitmap = {};
  for(let i = 0 ; i < X; i++){
    bitmap[i] = false;
  }
  for(let i = 0; i < A.length; i++){
    if(!bitmap[A[i]]){
      bitmap[A[i]] = true;
      steps--;
    }
    if(steps == 0) return i;
  }
  return -1;
}