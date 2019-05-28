function solution(A) {
  const counts = {};
  A.forEach(num => counts[num]? counts[num]++ : counts[num] = 1);
  return parseInt(Object.keys(counts).find(key => counts[key] % 2 === 1));
}