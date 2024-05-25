// let form = document.querySelector("form");
// form.addEventListener("submit", function(e) {
//     e.preventDefault() 
// function validateRegisterForm(){
//     let username = document.getElementById("username").value;
//     let password = document.getElementById("password").value;
//     let repassword = document.getElementById("repassword").value;
//     let email = document.getElementById("email").value;
    
//     if (username.trim() === "" || password.trim() === "" || email.trim() === "" || repassword.trim() === "") {
//        alert("Xin hãy điền đầy đủ thông tin");
//        return false;
//     }

//     alert("Đăng ký thành công");
//     return true;
// }

// if (validateRegisterForm()) {
//     window.location = "./login.html"
// }
// })
var usernameinput = document.getElementById("username");
var passwordinput = document.getElementById("password");
var emailinput = document.getElementById("email");
var repasswordinput = document.getElementById("repassword");
var signupbutton = document.getElementById("button");

let form = document.getElementById("registerForm")
form.addEventListener("submit", function SignUp(e) {
    e.preventDefault() 
        var username = usernameinput.value;
        var password = passwordinput.value;
        var repassword = repasswordinput.value;
        var email = emailinput.value ;

        if ( username == "" || password == "" || email == "" ) {
            alert("thử lại đi em")
        }
        else if(password === repassword) {
            var newObj = {
                name: username,
                password: password, 
                email: email,  
            }
            var newJson = JSON.stringify(newObj);
            localStorage.setItem("tk_"+username, newJson);
            alert("đăng ký thành công rồi amazing em");
            window.location = "./login.html";
        }
        else {
            alert("thất bại rồi em ơi")
        }
}
)