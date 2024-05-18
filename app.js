// var usernameinput = document.getElementById("username");
// var passwordinput = document.getElementById("password");
// var emailinput = document.getElementById("email")
// var repasswordinput = document.getElementById("repassword");
// var signupbutton = document.getElementById("button");

// let form = document.getElementById("registerForm")
// form.addEventListener("submit", function SignUp(e) {
//     e.preventDefault() 
//         var username = usernameinput.value;
//         var password = passwordinput.value;
//         var repassword = repasswordinput.value;
//         var email = emailinput.value ;

//         if ( username == "" || password == "" || email == "" ) {
//             alert("thử lại đi em")
//         }
//         else if(password === repassword) {
//             var newObj = {
//                 name: username,
//                 password: password, 
//                 email: email,  
//             }
//             var newJson = JSON.stringify(newObj);
//             localStorage.setItem("tk_"+username, newJson);
//             alert("đăng ký thành công rồi amazing em");
//             window.location = "./login.html";
//         }
//         else {
//             alert("thất bại rồi em ơi")
//         }
// }
// )

let hello = document.getElementById("loginForm")
hello.addEventListener("submit", function SignIn(e) {
    e.preventDefault() 

        var ndTklogin = document.getElementById("username").value;
        var ndMklogin = document.getElementById("password").value;
        var ndEmaillogin = document.getElementById("email").value;
        var checkJson = localStorage.getItem("tk_"+ndTklogin);

        console.log(ndTklogin)
        if(checkJson != null){
            var checkObj = JSON.parse(checkJson);
            if(ndMklogin == checkObj.password)
            {
                alert("Thành công rùi xin chúc mừng");
                window.location = "./index.html";
            }
            else{
                alert("Đăng nhập thất bại");
            }
        }
        else{
            alert("Tài khoản không thể tim thấy")
        }
    })

    function SignOut() {
        window.location = "./login.html";
    }


//cach ra


// let form = document.querySelector("form");
// form.addEventListener("submit", function(e) {
//     // e.preventDefault() 
// function validateLoginForm(){
//     let username = document.getElementById("username").value;
//     let password = document.getElementById("password").value;
//     let email = document.getElementById("email").value;
    
//     if (username.trim() === "" || password.trim() === "" || email.trim() === "") {
//        alert("Xin hãy điền đầy đủ thông tin");
//        return false;
//     }

//     alert("Đăng nhập thành công");
//     return true;
// }

// if (validateLoginForm()) {
//     window.location = "./index.html"
// }
// })