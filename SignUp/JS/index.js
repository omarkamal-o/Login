var signUpName = document.getElementById('signName');
var signUpEmail=document.getElementById('signEmail');
var signUpPassword=document.getElementById('signPassword');
var user = [];

// localStorage.clear(user);


if (localStorage.getItem('user') !=null) {
    user = JSON.parse(localStorage.getItem('user'));
}else{
    user = [];
}
function add() {
    // isExist();
    if (signUpName.value==''||signUpEmail.value==''||signUpPassword.value=='') {
    document.getElementById('message').innerHTML=`<p class = "text-center text-danger"> All inputs is required</p>`
    }else{
        var obj ={
            name :signUpName.value,
            email:signUpEmail.value,
            password:signUpPassword.value,
        }
        document.getElementById('message').innerHTML=`<p class = "text-center text-success">Success</p>`
        user.push(obj);
        location.href ='../index.html';
        localStorage.setItem('user',JSON.stringify(user));
    }
}
// function isExist() {
//     for (let i = 0; i < user.length; i++) {
//         if (user[i].email.toLowerCase()==signUpEmail.value.toLowerCase()) {
//  document.getElementById('message').innerHTML=`<p class = "text-center text-danger">email already exists</p>`
// return true ;        
// }else{
//     return false ;
// }
//     }
// }