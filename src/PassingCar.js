function solution(A) {
  let east_car = 0;
  let pair = 0;
  for(let i = 0 ; i < A.length ; i++){
    const current_car = A[i];
    if(current_car === 0){
      east_car +=1;
    }else{
      pair += east_car;
    }
    if(pair > 1000000000){
      return -1;
    }
  }
  return pair;
}