// let students = new Array('Đạt' , 'Trường' , 'Anh' , 'Duy');


// // students.sort();
// // console.log(students);

let ages = new Array( 21 , 2 , 11 , 8 , 1 , 12);
// ages.sort();
ages.sort(function( a , b) {
    return b - a ;
});
console.log(ages);