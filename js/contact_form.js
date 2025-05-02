$(".login-form-btn").click(function() {
    // document.getElementById('contact_form').onsubmit = function() {
    // alert("in function");
    console.log("Saad here");
    var  fname = $("#first_name").val(); 
    // alert(fname);
    var  middle = $("#middle_name").val();  
    var  lname = $("#last_name").val();  
    var  phone = $("#phone").val();  
    var  dob =  $("#dob").val(); 
    var  country = $("#country").val();  
    var  address = $("#address").val();  
    if (fname == "") {
        $("#first_name").css("border", "red solid 1px");
        return false;
    } else if (lname == "") {
        $("#last_name").css("border", "red solid 1px");
        return false;
    } else if (phone == "") {
        $("#phone").css("border", "red solid 1px");
        return false;
    } else if (dob == "") {
        $("#dob").css("border", "red solid 1px");
        return false;
    } else if (country == "") {
        $("#country").css("border", "red solid 1px");
        return false;
    } else if (address == "") {
        $("#address").css("border", "red solid 1px");
        return false;
    } else {
        var user = JSON.parse(localStorage.getItem("current_login_user"));
        user_email = user.email;

        user_flag = user.remember_flag;
        var existing_users = JSON.parse(localStorage.getItem("all_users"));
        var i;
        for (i = 0; i < existing_users.length; i++) {
            if (existing_users[i].email == user_email) {
                var localemail = existing_users[i].email;
                var localimage = existing_users[i].image;
                var localname = existing_users[i].name;
                var localpassword = existing_users[i].password;
                var new_user = {
                    "first_name": fname,
                    "middle_name": middle,
                    "last_name": lname,
                    "email": localemail,
                    "image": localimage,
                    "name": localname,
                    "password": localpassword,
                    "phone_number": phone,
                    "dob": dob,
                    "country": country,
                    "address": address,
                    "remember_flag": "1" 
                };

                existing_users[i] = new_user;
                localStorage.setItem("current_login_user", JSON.stringify(new_user));
                localStorage.setItem("all_users", JSON.stringify(existing_users));
                window.location.href = "http://127.0.0.1:5500/transaction.html"
                return false;
            }
        }

    }
});