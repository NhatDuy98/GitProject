// let number = Number(prompt('Nhập số phần tử của mảng: ',''));
// let numbs = new Array(number);
// numbs.toString();
// let result = '';
// for ( i = 0 ; i < numbs.length ; i++) {
//     if ( numbs[i] % 2 == 0 && numbs[ i - 1 ] % 2 == 0) {
//         numbs[i].push(' - ');
//         break;
//     }
// }
// console.log(numbs);


let number = Number(prompt('Nhập số: ', ''));
let numbs = number.toString();
let result = new Array(numbs[0]);
// let result = [numbs[0]];

for  ( let i = 0 ; i < numbs.length ; i++) {
    if ( numbs[i] % 2 === 0 && numbs [i + 1] % 2 === 0) {
        result.push('-', numbs[i + 1]);
    }
    else {
        result.push(numbs[i + 1]);
    }
}
document.write(result.join(''));
