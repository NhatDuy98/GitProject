let numbers = new Array(1324,1235,12645,251234,65765);
numbers.splice( 1 , 3 , 12 , 13 , 14 );
console.log(numbers);


// numbers[1] = 12 ;
// numbers[2] = 13 ;
// numbers[3] = 14 ;

// numbers.splice( 0 , 0 , 11 , 11 , 11);
// console.log(numbers);
// numbers.splice( 4 , 0 , 10 , 10 , 10);

// numbers.splice( numbers.length - 2 , 2 );
// console.log(numbers);
// let len =  numbers.push(6); //-> trả về chiều dài mới của mảng
// console.log(len);
// numbers.push(7,8,9);
// numbers.unshift(0);
// numbers.unshift(-2 , -1 );
// numbers.pop(); //-> xóa 1 lần 1 phần tử
// numbers.shift();
// console.log(numbers);

// numbers.splice( 2 , 0 , 0 , 0 , 0 );
// numbers.splice( 5 , 2 );
// console.log(numbers);