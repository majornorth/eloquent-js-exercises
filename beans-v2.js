var totalBeans = 0;
var countChar = function (string, ch) {
    stringLength = string.length;
    for (stringPosition = 0; stringPosition <= stringLength; stringPosition++) {
        var letter = string.charAt(stringPosition);
        if (letter == ch) {
            totalBeans = totalBeans + 1;
        }
    }
    console.log(totalBeans);
}

countChar('BatmanBatBBB', 'B');
