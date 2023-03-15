let username = prompt('Ai đấy??????');

 if ( username == 'Admin') {
    let password = prompt('Password là gì khai ra: ');
    if (password == 'TheMaster') {
        document.write('Welcome')
    }
    else {
        if (password == null){
            document.write('Canceled')
        }
        else {
            document.write('Wrong Password')
        }
    }
}
else {
    if (username == null) {
        document.write('Canceled')
    }
    else {
        document.write("I don't know you")
    }
}




















// else {
//     if ( password == TheMaster) {
//         document.write('Welcome');
//     }
//     else {
//         if ( password == null) {
//             document.write('Canceled');
//         }
//         else {
//             document.write('Wrong Password');
//         }
//     }
// }  
// else{
//     if (usernam == null){
//         document.write('Canceled')
//     }
//     else {
//         document.write('I do not know you')
//     }
// }    
     

    
 
