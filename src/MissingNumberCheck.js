function solution(A) {
  const N = A.length+1;
  return (N * (N+1) / 2) - A.reduce((a,b)=>a+b,0)
}