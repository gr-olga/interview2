function minimumNumber(n, password) {
    const isTooShort = (password.length < 6)
    const isUpperCase = /[A-Z]/.test(password);
    const isLowerCase = /[a-z]/.test(password);
    const isDigits = /[0-9]/.test(password);
    const isChars = /[!@#$%^&*()\-+]/.test(password);

    let result = 0;
    if (isTooShort) console.log(`you password too short add min ${6 - password.length} symbols`)
    if (!isUpperCase) console.log('add Capital letter'), result += 1
    if (!isLowerCase) console.log('add small letter'), result += 1
    if (!isDigits) console.log('add digits'), result += 1
    if (!isChars) console.log('add special chars'), result += 1

    // if ((result + password.length) < 6) {
    //     result = result + 6 - (result + password.length);
    // }

    return console.log(`add ${result} symbols`)
}


minimumNumber(3, "Ab1")
// console.log(minimumNumber(5, "2bbbb")) //2
// console.log(minimumNumber(5, "2bb#A")) //1