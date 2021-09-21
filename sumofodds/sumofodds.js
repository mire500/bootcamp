function sumOfOdds(arr){
  let sumOf = 0

  for (let i = 0; i< arr.length; i++){
  if (arr[i]%2 != 0) {
      sumOf += arr[i] 

  }
  }
   console.log(sumOf)
}

sumOfOdds([2,5,3,4,7])


module.exports = sumofOdds;
// 1. make a variable 
// 1. loop through the Array
// 2. find the odd number /2 !0 
// 3.sum it all up