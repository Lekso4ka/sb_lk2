function getNumber(max = 10, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}

getNumber() // 0 - 9
getNumber(100) // 0 - 99
getNumber(100, 25) // 25 - 99