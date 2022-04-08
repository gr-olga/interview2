function birthdayCakeCandles(candles) {
    const max = candles.reduce(function(a, b) {
        return Math.max(a, b);
    }, -Infinity);

    let filteredElements = 0
    for (let i = 0; i <= candles.length - 1; i++) {
            if (candles[i] === max) {
                filteredElements += 1
        }
    }
    console.log(filteredElements)
}

birthdayCakeCandles([3, 2, 1, 3])