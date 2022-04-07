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
    let hash = "#"
    let step = "-"
    for (let i = 0; i <= n - 1; i++) {
        str = makeStr(step, n-i-1)
        strHashes += hash
        console.log(str + strHashes);
    }
}

staircase(6)
