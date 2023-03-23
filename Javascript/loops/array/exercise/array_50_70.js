let matrix = new Array();
let min = 10 ;
let max = 50 ;


// matrix[i] = i ;

for ( let i = 0 ; i < 50 ; i++) {
    matrix[i] = new Array(); // --> mảng chạy từ 1-5 nên phải tạo mảng matrix i rỗng 
    for ( let j = 0 ; j < 70 ; j++) {
        matrix[i][j] = Math.ceil(Math.random() * ( max - min ) + min) ; //--> mảng [i][j] phải có chỗ hứng 
        // console.log(matrix[i][j]);
    }
}


console.log(matrix);