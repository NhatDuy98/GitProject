let caro = new Array();
let result = '';

for (let i = 0 ; i < 7 ; i++ ) {
    caro[i] = new Array('(.)' , '(.)' , '(.)' , '(.)' , '(.)' , '(.)' , '(.)');
}

for ( let i = 0 ; i < 7 ; i++) {
    result += '<br>';
    for ( let j = 0 ; j < 7 ; j++) {
        result += caro[i][j] + '&ensp;';
    }
}
document.getElementById('playCaro').innerHTML = result;

function playGame() {
    let result = '';
    let x_1 = Number(prompt('X nhập số cột từ 0-6: ',''));
    let x_2 = Number(prompt('X nhập số hàng từ 0-6: ',''));
    caro[x_1][x_2] = 'X';

    for ( let i = 0 ; i < 7 ; i++) {
        result += '<br>';
        for ( let j = 0 ; j < 7 ; j++) {
            result += caro[i][j] + '&ensp';
        }
    }
    document.getElementById('playCaro').innerHTML = result ;
}