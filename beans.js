var totalBeans = 0;
var countBs = function (string) {
    stringLength = string.length;
    for (stringPosition = 0; stringPosition <= stringLength; stringPosition++) {
        var letter = string.charAt(stringPosition);
        if (letter == "B") {
            totalBeans = totalBeans + 1;
        }
    }
    console.log(totalBeans);
}
countBs('BatBatmanBBBBB');
