function simpleArraySum(ar) {
    // Write your code here
    let n = 0
    ar.forEach((i) => {
        n = i + n
    })
    return console.log(n)
}


simpleArraySum([1,2,3,4,10,11])