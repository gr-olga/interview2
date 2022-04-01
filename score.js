function compareTriplets(a, b) {
    // Write your code here
    let alice = 0;
    let bob = 0

    a.forEach((v, i) => {
        if (a[i] > b[i]) {
            alice += 1
        }

        if (a[i] < b[i]) {
            bob += 1
        }
    })
    console.log(alice, bob)
}

compareTriplets([3, 2, 1], [1, 2, 3]) // [1,1]
