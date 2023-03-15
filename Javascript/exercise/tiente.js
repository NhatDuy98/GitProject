function handleClick() {
    console.log("aaaaaaaaa");
    let a = document.getElementById('amount').value;
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let result;
    
    if(from == 'VND' && to == 'USD') {
        result = 'Result: ' + (a*23000) + 'VND';
    }
    else {
        result = 'Result: ' + (a/23000) + 'USD';
    } 
    document.getElementById('kq').innerHTML = result;
}
    


    


    /*if (from = 'VND' && to = 'USD') {
        result = 'Result: ' + (a*23000) + 'VND'
        document.getElementById('a').innerHTML = result
    }
    else {
        result = 'Result: ' + (a/23000) + 'USD'
        document.getElementById('a').innerHTML = result
    }*/