var size = 8;
var totalWidth = [];
for (currentWidth = 1; currentWidth <= size + 1; currentWidth++) {
    totalWidth = Array(currentWidth).join('# ');
}
for (height = 1; height <= size; height++) {
    console.log(totalWidth);
}
