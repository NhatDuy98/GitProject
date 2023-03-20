let a = Number(prompt('Nhập số: '));
let b = 0 ;

while ( a != -1) {
    alert(a);
    b += a ;
    alert(b) ;
    a = Number(prompt('Nhập số: ')) ;   
    }


    let i = 0 ;

    while ( i < 100 ) {
        document.write('<hr width= ' + i + '%>');
        i++;
    }