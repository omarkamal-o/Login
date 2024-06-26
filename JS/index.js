var signInEmail = document.getElementById('signEmail');
var signInPassword = document.getElementById('signPassword');
var user =[];
user = JSON.parse(localStorage.getItem('user'));

document.getElementById('Login').addEventListener('click',function () {
    if (signInEmail.value==''||signInPassword.value=='') {
         document.getElementById('message').innerHTML=`<p class = "text-center  text-danger "> All inputs is required</p>`;
    }else{
        check();
    }
});

function check() {
    for (let i = 0; i < user.length; i++) {
        if (signInEmail.value==user[i].email && signInPassword.value==user[i].password) {
            var x = user[i].name ;
            localStorage.setItem('userName',x);
            location.href="Home/home.html";
            break ;
        }    
    }
}