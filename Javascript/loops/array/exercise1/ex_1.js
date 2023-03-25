let number = Number(prompt('Nhập số lượng số nguyên: '));
// let numbs = [10,11,12,3,5,7,8];
let numbs = new Array(number);
let total;

for ( let i = 0 ; i < numbs.length ; i++) {
    numbs[i] = Math.floor(Math.random() * 50 );
    if ( numbs[i] >= 10 ) {
        total = numbs[i];
        total = '<br>' + 'Số nguyên lớn hơn 10 là: ' + numbs[i] + '<br>' + 'Và đứng ở vị trí thứ: ' + i + '<br>';
        document.write(total);
    }
}