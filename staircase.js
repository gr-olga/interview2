function makeStr(char, length) {
    let result = '';
    for (let i = 0; i <= length - 1; i++) {
        result += char
    }
    return result
}

function staircase(n) {
    let str = ''
    let strHashes = ''
    let step = "_"
    let hash = "#"

    const sampleStr = '____'

    for (let i = 0; i <= n - 1; i++) {
        str = makeStr(step, n - i)
        strHashes += hash
        console.log(str + strHashes);
    }

    // for ( let i = n-1; i >= 0; i--) {
    //     str += step
    //     console.log( str);
    // }

    // for (let i = 0; i <= n - 1; i++) {
    //     strHashes += hash
    //     console.log( strHashes);
    // }

}

staircase(4)