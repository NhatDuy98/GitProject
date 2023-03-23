let caros = new Array();
let disp = document.getElementById('result');
let index = '';

for (let i = 0; i < 5; i++) {
    caros[i] = new Array(0, 0, 0, 0, 0);
    index += '<br>';
    for (let j = 0; j < 5; j++) {
        index += caros[i][j] + '&nbsp;&nbsp;&nbsp;&nbsp';
    }
}
document.getElementById('result').innerHTML = index;

function changeValue() {
    let numb_1 = Number(prompt('Nhập vị trí cột ( 0 - 4): ', ''));
    let numb_2 = Number(prompt('Nhập vị trí hàng ( 0 - 4): ', ''));
    caros[numb_1][numb_2] = 'X';

    let index = '';

    for (let i = 0; i < 5; i++) {
        index += '<br>';
        for (let j = 0; j < 5; j++) {
            index += caros[i][j] + '&nbsp;&nbsp;&nbsp;&nbsp';
        }
    }
    index += '<input onclick="changeValue" value="Change Value" type="button">';
    document.getElementById('result').innerHTML = index;

}