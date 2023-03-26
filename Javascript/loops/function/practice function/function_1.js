function generateArray(size, min , max) {
    let numbs = new Array(size);
    // let min ;
    // let max ;
    for ( let i = 0 ; i < numbs.length ; i++ ) {
        numbs[i] = Math.ceil(Math.random() * ( max - min ) + min);
    }
    // console.log(numbs);
    return numbs;
}
// generateArray(15) ;
// generateArray(10) ;

// let arr_1 = generateArray(10 , 100 , 500) ;
// let arr_2 = generateArray(15 , 1 , 30) ;
// console.log(arr_1);
// console.log(arr_2.toString());

// console.log(generateArray( 10 , 100 , 500));
// console.log(generateArray( 10 , 100 , 500).toString());
// document.write(generateArray( 20 , 10 , 100));

function find(numb , arr) {
    for ( let i = 0 ; i < arr.length ; i++) {
        if ( numb == arr[i]) {
            return true ;
        }
    }
    return false ;
}
// console.log(find(5 , [ 1 , 2 , 3 , 4 , 5]));
let arr_3 = generateArray( 10 , 5 , 50);
console.log(arr_3) ;
console.log(find( 7 , arr_3));


