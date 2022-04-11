function TimeConversion(str){
    let hour = str.substring(0, 2) * 1;
    let timeFormat = str.substring(2,8);
    const isPM = str.match(/pm/gi) != null;
    const isNoon = isPM && hour === 12;
    const isMidnight = !isPM && hour === 12;
    if (isNoon) {
        console.log( hour + timeFormat)
    } else if (isMidnight) {
        console.log('00' + timeFormat)
    } else if (isPM) {
        console.log(hour + 12 + timeFormat)
    }
   else if (hour < 10) {
        console.log('0' + hour + timeFormat)
    }
}
TimeConversion('12:45:54PM')