function miniMaxSum(arr) {
   let res1=0
    let res2=0
   const arr2= arr.sort(function (a, b) {
        return a - b;
    });
   for (let i = 0; i<= arr.length-2; i++){
       res1 += arr2[i]
   }
    for (let i = 1; i<= arr.length-1; i++){
        res2 += arr2[i]
    }
    console.log(res1, res2)
}

miniMaxSum([5, 2, 3, 4, 1])

//TODO
//     Given five positive integers,
//     find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
//     Then print the respective minimum and maximum values as a single line of two space-separated long integers.