let number = Number(prompt('Nhập số lượng số nguyên: '));
let numbs = new Array(number);

for ( let i = 0 ; i < numbs.length ; i++) {
    numbs[i] = Math.floor(Math.random() * 50 );
    console.log(numbs);
}
let max = numbs[0];
let total;

for ( let j = 0 ; j< numbs.length ; j++) {
    if ( numbs[j] > max ) {
        max = numbs[j];
        total = j;
    }
}
document.write('Số lớn nhất là: ' + max + '<br>' + 'Và ở vị trí: ' + total);