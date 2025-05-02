/*==================================================================*/
$(document).ready(function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var ip = JSON.parse(this.responseText);
            $("#ip_address").val(ip['ip']);
        }
    };
    xhttp.open("GET", "//api.ipify.org?format=json", true);
    xhttp.send();
});

const login = document.querySelector("#sign_in");

login.onclick = function() {
    // capture image
    Webcam.snap(function(img_url) {
        // display results in page
        $("#img_url").html('<img src="' + img_url + '" id="user-image"/>');
        $("#login_capture_img").val(img_url);
    });

    var ip = $("#ip_address").val();
    var uemail = $("#email").val();
    var image_capture = $("#login_capture_img").val();
    var upassword = $("#password").val();
    const users = JSON.parse(localStorage.getItem("all_users"));

    var i;
    for (i = 0; i < users.length; i++) {
        if (uemail == users[i].email && upassword == users[i].password) {
            var existingEntries = JSON.parse(localStorage.getItem("logs"));
            const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            var PST = new Date().toLocaleString("en-US", { timeZone });
            PST = new Date(PST);
            pakistantime = PST.toLocaleString();
            var Useragent = navigator.userAgent;
            if (existingEntries == null) existingEntries = [];
            var entry = {
                "email": uemail,
                "ip": ip,
                "User_Agent": Useragent,
                "Time": pakistantime,
                "image": users[i].image,
                "user_login_image": image_capture,
                "password": users[i].password,
                "remember_flag": users[i].remember_flag
            };
            localStorage.setItem("current_login_user", JSON.stringify(entry));
            // Save logs back to local storage
            existingEntries.push(entry);
            localStorage.setItem("logs", JSON.stringify(existingEntries));
            // CHECK IF REMEMBER_FLAG IS ZERO OR NOT REDIRECT TO PROFILE FORM OTHERWISE GO TO TRANSACTION PAGE
            check_firsttime_login();
            loginflag = true;
            break;
        } else {
            loginflag = false;
            continue;
        }
    }
    if (loginflag == false) {
        $("#error_message").css({ display: "block", textAlign: "center", color: "yellow" });
    }
    return false;
}