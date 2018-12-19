function solution(A) {
  const map = {};
  A.forEach(a => {
    if(a > 0){
    map[a] = true;
  }
})

  let count = 0;
  do{
    count += 1;
  }while(!!map[count])
  return count;
}