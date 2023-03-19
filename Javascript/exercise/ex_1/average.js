


// function rank(){
//     let a = +document.getElementById('ave').value;
//     let result = "";
    

//     if(a < 0 || a > 10){
//         result = "Mời nhập lại.";
//     }
//     else if(a >= 9){
//         result = " Xuất sắc ";
//     }
//     else if( a >= 8) {
//         result = "Giỏi";
//     }
//     else if( a >= 6.5) {
//         result = 'Khá';
//     }
//     else {
//         result = 'Dốt';
//     }
//     document.getElementById('kq').value = result;
// }

// function rank() {
//     let a = +document.getElementById('ave').value;
//     let result = "";
    
//     switch (true) {
//         case a >= 9 && a <= 10:
//             result = "Xuất sắc";
//             break;
//         case a >= 8:
//             result = "Giỏi";
//             break;
//         case a >= 6.5:
//             result = "Khá"
//             break;
//         case a >= 0:
//             result = "Dốt"
//             break;
    
//         default:
//             break;
//     }
//     document.getElementById('kq').value = result;
// }

function rank() {
    let a = +document.getElementById('ave').value;
    let result = `${ a <0 || a > 10 ? "Mời nhập lại" : 
    a >= 9 ? "Xuất sắc" : 
    a >= 8 ? "Giỏi" : 
    a >= 6.5 ? "Khá" : 
    "Dốt"}`;
    document.getElementById('kq').value = result
}