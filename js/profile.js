function check_user_online() {

    var logged_in_user = {};
    logged_in_user = JSON.parse(localStorage.getItem('current_login_user')); //get data from storage
    users = JSON.parse(localStorage.getItem('all_users')); //get data from storage
    // alert(logged_in_user.img);
    if (logged_in_user == undefined) {
        window.location.href = 'login.html';
    } else {
        var profile_image = logged_in_user.image;
        var email = logged_in_user.email;
        $("#dashboard_image").attr({ "src": profile_image });

        var i;
        for (i = 0; i < users.length; i++) {
            if (users[i].email == email) {
                // alert(users[i].password);
                $("#profile_image").attr({ "src": users[i].image });
                $("#fname").val(users[i].first_name);
                $("#mname").val(users[i].middle_name);
                $("#lname").val(users[i].last_name);
                $("#dob").val(users[i].dob);
                $("#address").val(users[i].address);
                $("#phone").val(users[i].phone_number);
                $("#country").val(users[i].country);
                $("#Username").html("<b>Welcome, </b>" + users[i].name);
            }
        }
    }
}

function take_snapshot() {
    $("#my_camera").css({ display: "block" });
    $("#default_image").css({ display: "none" });
    $("#profile_image").css({ display: "none" });
    $("#click-screenshot-btn").css({ display: "none" });
    $("#click-new-screenshot-btn").css({ display: "block" });
    $("#results").css({ display: "none" });
    $("#click-new-btn").css({ display: "block" });
}

/*==================================================================*/
// Take new if you dont like existing screenshot
function take_new_snapshot() {
    Webcam.snap(function(data_uri) {
        // display results in page
        $("#results").html('<img src="' + data_uri + '" id="user-image"/>');
        $("#profile_image").attr({ "src": data_uri });
    });

    $("#my_camera").css({ display: "none" });
    $("#click-screenshot-btn").css({ display: "block" });
    $("#click-new-screenshot-btn").css({ display: "none" });
    $("#results").css({ display: "block" });
    $("#click-new-btn").css({ display: "block" });
}

function update_profile_btn() {

    new_image = $('#profile_image').attr('src');
    firstname = $("#fname").val();
    middlename = $("#mname").val();
    lastname = $("#lname").val();
    dateofbirth = $("#dob").val();
    address = $("#address").val();
    phone_number = $("#phone").val();
    country = $("#country").val();
    // alert("in first else");
    var user = JSON.parse(localStorage.getItem("current_login_user"));
    user_email = user.email;
    // alert(user_email);

    // user_flag = user.remember_flag;
    var existing_users = JSON.parse(localStorage.getItem("all_users"));
    var i;
    for (i = 0; i < existing_users.length; i++) {
        if (existing_users[i].email == user_email) {
            // alert(existing_users[i].email);
            var localemail = existing_users[i].email;
            var all_user_email = existing_users[i].email;
            var all_user_name = existing_users[i].name;
            var all_user_password = existing_users[i].password;

            var new_user = {
                "first_name": firstname,
                "middle_name": middlename,
                "last_name": lastname,
                "email": all_user_email,
                "image": new_image,
                "name": all_user_name,
                "password": all_user_password,
                "phone_number": phone_number,
                "dob": dateofbirth,
                "country": country,
                "address": address,
                "remember_flag": "1" 
            };
            alert("Your Profile has bee Updated!");
            existing_users[i] = new_user;
            localStorage.setItem("current_login_user", JSON.stringify(new_user));
            localStorage.setItem("all_users", JSON.stringify(existing_users));
            window.location.href = "profile.html"
            return true;
        }
    }
}