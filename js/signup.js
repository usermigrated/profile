// function store() {
//     var username = $('#user-name').val();
//     var email  = $('#email').val();
//     var password  = $('#password').val();
//     var conpassword  = $('#confirm-password').val();
//     var doc_img  = $('#can_img').val();

//     const user_data = JSON.parse(localStorage.getItem("all_users"));

//     if (user_data == null) {
//         var existing_users = JSON.parse(localStorage.getItem("all_users"));
//         if (existing_users == null) existing_users = [];
//         var new_user = {
//             "name": username,
//             "email": email,
//             "password": password,
//             "image": doc_img,
//             "remember_flag": "0"
//         };
//         localStorage.setItem("new_user", JSON.stringify(new_user));
//         existing_users.push(new_user);
//         localStorage.setItem("all_users", JSON.stringify(existing_users));
//         window.location.reload();
//     } else {
//         for (let i = 0; i < user_data.length; i++) {

//             if (user_data[i].email == email) {
//                 alert("Email already registered");
//                 return false;
//             }
//         }
//         var existing_users = JSON.parse(localStorage.getItem("all_users"));
//         if (existing_users == null) existing_users = [];
//         var new_user = {
//             "name": username,
//             "email": email,
//             "password": password,
//             "image": doc_img,
//             "remember_flag": "0" 
//         };
//         localStorage.setItem("new_user", JSON.stringify(new_user));
//         existing_users.push(new_user);
//         localStorage.setItem("all_users", JSON.stringify(existing_users));
//         alert("Signup Success");
//         return true;
//     }
//     return false;
// }
// Signup Class
class Users {
    constructor() {}
    signup() {
        var name = $('#name').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var doc_img  = $('#can_img').val();
        if (name == '') {
            $('input[type="text"]').css("border", "2px solid red");
        } else if (email == '') {
            $('input[type="email"]').css("border", "2px solid red");
        } else if (password == '') {
            $('input[type="password"]').css("border", "2px solid red");
        } else {
            const user_data = JSON.parse(localStorage.getItem("allusers"));

            if (user_data == null) {
                var existing_users = JSON.parse(localStorage.getItem("allusers"));
                if (existing_users == null) existing_users = [];
                var newuser = {
                    "name": name,
                    "email": email,
                    "password": password,
                    "image": doc_img,
                    "remember_flag": "0"
                };
                localStorage.setItem("newuser", JSON.stringify(newuser));
                existing_users.push(newuser);
                localStorage.setItem("allusers", JSON.stringify(existing_users));
                window.location.reload();
            } else {
                for (let i = 0; i < user_data.length; i++) {
                    if (user_data[i].email == email) {
                        alert("Email already registered");
                        return false;
                    }
                }
                var existing_users = JSON.parse(localStorage.getItem("allusers"));
                if (existing_users == null) existing_users = [];
                var newuser = {
                    "name": name,
                    "email": email,
                    "password": password,
                    "image": doc_img,
                    "remember_flag": "0" 
                };
                localStorage.setItem("newuser", JSON.stringify(newuser));
                existing_users.push(newuser);
                localStorage.setItem("allusers", JSON.stringify(existing_users));
                alert("Signup Success");
                return true;
            }
            return false;
        }
    }

    // get_logs
    getUsers() {
        const user_data = JSON.parse(localStorage.getItem("allusers"));
        return user_data;
    }
}
const user = new Users();
const signup = user.signup