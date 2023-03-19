function checked() {
    const equaltion = ' a * x * x + b * x + c = 0'
    let a = Number(document.getElementById('numb_1').value);
    let b = Number(document.getElementById('numb_1').value);
    let c = Number(document.getElementById('numb_1').value);

    let d = b*b-4*a*c



    if (a === 0) {
        result='Đây không phải phương trình bậc 2.';
    }
    else if(d==0){
        let x = -(b/[2*a]);
        result='Phương trình có nghiệm kép x1 = x2 = ' + x + ' Và Delta = ' + d;
    }
    else if(d>0){
        let x1 = (-b + Math.sqrt(d)) / ( 2 * a);
        let x2 = (-b - Math.sqrt(d)) / ( 2 * a);
        result = 'Phương trình có 2 nghiệm x1 =' + x1 + 'x2 = ' + x2 + ' Và Delta = ' + d ;
    }
    else {
        result = 'Phương trình vô nghiệm.' ;
    }
    document.getElementById('result').innerHTML = result ;

    
}

