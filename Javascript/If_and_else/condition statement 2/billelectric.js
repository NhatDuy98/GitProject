

// function check() {
//     let a = +document.getElementById('numb').value;
//     let q = 50 * 1678 ;
//     let w = 50 * 1734 ;
//     let e = 100 * 2014 ;
//     let r = 100 * 2536 ;
//     let t = 100 * 2834 ;
    
     
//     result = '';

//     if (a < 0) {
//         result = "Mời nhập lại số điện."
//     }
//     else {
//         if ( a <= 50) {
//             result = a * 1678 + ' Đồng';
//         }
//         else if ( a <= 100) {
//             result = q + (a - 50) * 1734 + ' Đồng';
//         }
//         else if ( a <= 200) {
//             result = q + w + (a - 100) * 2014 + ' Đồng';
//         }
//         else if ( a <= 300) {
//             result = q + w + e + ( a - 200 ) * 2536 + ' Đồng';
//         }
//         else if ( a <= 400 ) {
//             result = q + w + e + ( a - 300 ) * 2834 + ' Đồng';
//         }
//         else {
//             result = q + w + e + r + t + ( a - 400 ) * 2927 + ' Đồng';
//         }

//     }
//     document.getElementById('kq').innerHTML = result;
// }

function check() {
    let a = +document.getElementById('numb').value;
    let q = 50 * 1678 ;
    let w = 50 * 1734 ;
    let e = 100 * 2014 ;
    let r = 100 * 2536 ;
    let t = 100 * 2834 ;
    
     
    result = '';

    switch (true) {
        case a < 0:
            result = 'Vui lòng nhập lại số điện.';
            break;
        case a <= 50:
            result = a * 1678 + ' Đồng';
            break;
        case a <= 100:
            result = q + (a - 50) * 1734 + ' Đồng';
            break;
        case a <= 200:
            result = q + w + (a - 100) * 2014 + ' Đồng';
            break;
        case a <= 300:
            result = q + w + e + ( a - 200 ) * 2536 + ' Đồng';
            break;
        case a <= 400:
            result = q + w + e + ( a - 300 ) * 2834 + ' Đồng';
            break;
    
        default:
            result = q + w + e + r + t + ( a - 400 ) * 2927 + ' Đồng';
            break;
    }
    document.getElementById('kq').innerHTML = result;
}
    

