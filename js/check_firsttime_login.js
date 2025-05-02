// check user to log-in first time to take personal information
function check_firsttime_login() {
    user = JSON.parse(localStorage.getItem("current_login_user"));
    user_email = user.emailaddress;
    user_flag = user.remember_flag;
    if (user_flag == 0) {
        window.location.assign('contact-form.html');
    } else {
        $("#login_success_message").css({ display: "block" });
        $("#login_success_gif").css({ display: "block" });
        setTimeout(function() {
            window.location.assign('transaction.html');
        }, 2000);
        // alert("Login Success");
    }
}