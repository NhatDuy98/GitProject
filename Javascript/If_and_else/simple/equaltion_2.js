const equaltion = ' a * x * x + b * x + c = 0'
let a = 0
let b = 4
let c = 2

let d = b*b-4*a*c

document.write('d = ' + d)
document.write('<br>')

if (a === 0) {
    document.write('Đây không phải phương trình bậc 2.')
}

if(d==0){
    let x = -(b/[2*a])
    document.write('Phương trình có nghiệm kép x1 = x2 = ' + x)
}
else {
    if(d>0){
        let x1 = (-b + Math.sqrt(d)) / ( 2 * a)
        let x2 = (-b - Math.sqrt(d)) / ( 2 * a)
        document.write('Phương trình có 2 nghiệm x1 =' + x1 + 'x2 = ' + x2)
    }
    else {
        document.write('Phương trình vô nghiệm.')
    }
}

