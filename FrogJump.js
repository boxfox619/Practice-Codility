function solution(X, Y, D) {
  const range = Y - X;
  let jump = (range / D) | 0;
  if(range % D > 0){
    jump +=1;
  }
  return jump;
}