const romanToInt = function (s) {
    const dArr = s.split('')
    let res = 0
    res += dArr.forEach(c => {

    })
    // res += dArr.filter(c => c === 'V').length * 5
    // res += dArr.filter(c => c === 'X').length * 10
    // res += dArr.filter(c => c === 'I').length

    return res;
};

const result = romanToInt('III'); // 3
// const result =  romanToInt('IV'); // 4
// const result =  romanToInt('V'); // 5
// const result =  romanToInt('X'); // 10

console.log(result);