function camelcase(s) {
    let count = 1
    const arr = s.split('')
    arr.forEach((i) => {
        if (i.match(/[A-Z]/gms)) {
            count += 1
        }
    })
    console.log(count)
}

camelcase('saveChangesInTheEditor')