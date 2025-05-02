$("#change_password_form").submit(function() {
    var current_login_user = JSON.parse(localStorage.getItem("current_login_user"));
    var all_users_ls = JSON.parse(localStorage.getItem("all_users"));

    var user_input_password = $("#old_password").val();
    var local_storage_pass = current_login_user.password;
    var local_storage_email = current_login_user.email;
    if (local_storage_pass != user_input_password) {

        $("#wrong_pass").css({ display: "block" });
        $("#old_password").css("border", "red solid 1px");
        return false;
    } else {
        setTimeout(function() {
            window.location.reload(true);
        }, 1000);
        var i;
        for (i = 0; i < all_users_ls.length; i++) {
            // alert("in for loop");
            if (local_storage_email == all_users_ls[i].email) {
                var new_password = $("#new_password").val();
                var all_user_address_localstoragewala = all_users_ls[i].address;
                var all_user_country_localstoragewala = all_users_ls[i].country;
                var all_user_dob_localstoragewala = all_users_ls[i].dob;
                var all_user_email_localstoragewala = all_users_ls[i].email;
                var all_user_fname_localstoragewala = all_users_ls[i].first_name;
                var all_user_image_localstoragewala = all_users_ls[i].image;
                var all_user_lname_localstoragewala = all_users_ls[i].last_name;
                var all_user_mname_localstoragewala = all_users_ls[i].middle_name;
                var all_user_name_localstoragewala = all_users_ls[i].name;
                var all_user_new_password_localstoragewala = new_password;
                var all_user_phonenumber_localstoragewala = all_users_ls[i].phone_number;
                var all_user_flag_localstoragewala = all_users_ls[i].remember_flag;

                var new_user = {
                    "first_name": all_user_fname_localstoragewala,
                    "middle_name": all_user_mname_localstoragewala,
                    "last_name": all_user_lname_localstoragewala,
                    "email": all_user_email_localstoragewala,
                    "image": all_user_image_localstoragewala,
                    "name": all_user_name_localstoragewala,
                    "password": all_user_new_password_localstoragewala,
                    "phone_number": all_user_phonenumber_localstoragewala,
                    "dob": all_user_dob_localstoragewala,
                    "country": all_user_country_localstoragewala,
                    "address": all_user_address_localstoragewala,
                    "remember_flag": all_user_flag_localstoragewala
                };
                all_users_ls[i] = new_user;
                localStorage.setItem("current_login_user", JSON.stringify(new_user));
                localStorage.setItem("all_users", JSON.stringify(all_users_ls));
                $("#wrong_pass").css({ display: "none" });
                $("#right_pass").css({ display: "block" });
                setTimeout(function() {
                    window.location.href = 'change_password.html';
                }, 2000);
                return false;
            }
        }
    }
});