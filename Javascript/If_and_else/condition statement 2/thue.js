// function checked() {
//     let a = +document.getElementById('money').value;
//     let result = '' ;

//     if ( a < 0 ) {
//         result = 'Mời nhập lại số tiền của bạn';
//     }
//     else if ( a <= 5000000) {
//         result = a * 5/100 + ' VND';
//     }
//     else if ( a <= 10000000 ) {
//         result = a * 10/100 - 250000 + ' VND';
//     }
//     else if ( a <= 18000000) {
//         result = a * 15/100 - 750000 + ' VND';
//     }
//     else if ( a <= 32000000) {
//         result = a * 20/100 - 1650000 + ' VND';
//     }
//     else if ( a <= 52000000) {
//         result = a * 25/100 - 3250000 + ' VND';
//     }
//     else if ( a <= 80000000) {
//         result = a * 30/100 - 5850000 + ' VND';
//     }
//     else {
//         result = a * 35/100 - 9850000 + ' VND';
//     }

//     sum = result.toLocaleString('en-US', { style: 'currency', currency: ' VND'});
//     document.getElementById('amount').value = (sum);
// }

// function checked() {
//     let a = +document.getElementById('money').value;
//     let result = '';

//     switch (true) {
//         case a < 0:
//             result = 'Nhập lại số tiền của bạn.';
//             break;
//         case a <= 5000000:
//             result = a * 5/100 + ' VND';
//             break;
//         case a <= 10000000:
//             result = a * 10/100 - 250000 + ' VND';
//             break;
//         case a <= 18000000:
//             result = a * 15/100 - 750000 + ' VND';
//             break;
//         case a <= 32000000:
//             result = a * 20/100 - 1650000 + ' VND';
//             break;
//         case a < 52000000:
//             result = a * 25/100 - 3250000 + ' VND';
//             break;
//         case a < 80000000:
//             result = a * 30/100 - 5850000 + ' VND';
//             break;
    
//         default:
//             result = a * 35/100 - 9850000 + ' VND';
//             break;
//     }
//     document.getElementById('amount').value = result;
// }

function checked() {
    let a = +document.getElementById('money').value;
    result = (`${ a < 0 ? "Vui lòng nhập lại số tiền." : 
                    a <= 5000000 ? a * 5/100 + ' VND' :
                    a <= 10000000 ? a * 10/100 + ' VND' :
                    a <= 18000000 ? a * 15/100 + ' VND' :
                    a <= 32000000 ? a * 20/100 + ' VND' :
                    a <= 52000000 ? a * 25/100 + ' VND' :
                    a <= 80000000 ? a * 30/100 + ' VND' :
                    a * 35/100 + ' VND'}`)
    document.getElementById('amount').value = result;                
}