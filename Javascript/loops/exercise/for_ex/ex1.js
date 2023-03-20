let i = 0 ;

for ( i = 0 ; i < 5 ; i++) {
    document.write('The number is  ' + i + '<br>')
}

let a = prompt('Nhập số lần lặp: ')
let b = 0 ;

for ( let i = 1 ; i <= a ; i++) {
    b += i
    document.write(b + '<br>')
}
