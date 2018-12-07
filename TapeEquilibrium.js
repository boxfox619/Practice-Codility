function solution(A) {
  let dif = Number.MAX_VALUE;
  let idx = 0;
  let left = 0;
  let right = A.reduce((a,b)=>a+b, 0);
  while(left < right && idx < A.length-1){
    left += A[idx];
    right -= A[idx];
    dif = Math.min(dif, Math.abs(left-right));
    idx += 1;
  }
  return dif;
}

function solution(A) {
  let i, upto = 0, min = Number.MAX_VALUE;
  const total = A.reduce((a,b)=>a+b, 0);
  for (i=0; i<A.length-1; i++)
  {
    upto += A[i];
    let a1 = upto;
    let a2 = total - a1;
    min = Math.min(min, Math.abs(a1 - a2));
  }
  return min;
}