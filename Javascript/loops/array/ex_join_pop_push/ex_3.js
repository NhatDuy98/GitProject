let word = prompt('Nhập chuỗi chữ thường + hoa: ','');
word_1 = new Array(word);
let result = new Array();

let Upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let Lower = 'abcdefghijklmnopqrstuvwxyz';

for (let i = 0 ; i < word.length ; i++) {
    if ( Upper.indexOf(word[i]) !== -1) {
        result.push(word[i].toLowerCase());
    }
    else if ( Lower.indexOf(word[i]) !== -1) {
        result.push(word[i].toUpperCase());
    }
    else {
        result.push(word[i]);
    }
}
document.write(result.join(''));