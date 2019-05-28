function solution(A) {
  const arr = A.sort((a, b) => a-b);
  const min = arr[0];
  for(let i = 1; i < arr.length; i++){
    let val = min+i;
    if(arr.findIndex((v)=> v === val) < 0){
      if(val > 0){
        return val;
      }else {
        return 1;
      }
    }
  }
  return arr[arr.length-1]+1;
}