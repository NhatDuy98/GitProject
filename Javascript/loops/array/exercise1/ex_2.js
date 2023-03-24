let number = Number(prompt('Nhập số lượng số nguyên: '));
let numbs = new Array(number);
let total;
let max ;

for ( let i = 0 ; i < numbs.length ; i++) {
    numbs[i] = Math.floor(Math.random() * 50 );
    console.log(numbs);
    max = numbs[0];
    if ( numbs[i] > max ) {
        //total = i;
        max = numbs[i] ;
        // console.log(total);
        // total = '<br>' + 'Số nguyên lớn hơn 10 là: ' + numbs[i] + '<br>' + 'Và đứng ở vị trí thứ: ' + i + '<br>';
        // document.write('Số nguyên lớn hơn 10 là: ' + numbs[i] + '<br>' + 'Và đứng ở vị trí thứ: ' + i);
        // document.write(total);
    }
}
document.write('Biến max là: ' + max);
//document.write('Vị trí của phần tử đó là: ' + total);