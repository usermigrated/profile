/*==================================================================*/
//sign-up form validation
function validateForm() {
    // $(".login-form-btn").click(function() {
    var username = $('#user-name').val();
    var email  = $('#email').val();
    var password  = $('#password').val();
    var confirm_password = $('#confirm-password').val();
    var doc_img  = $('#can_img').val();

    if (doc_img == "") {
        $("#my_camera").css("border", "red solid 1px");
        $("#error-message-snap").css({ display: "block" });
        return false;
    } else if (username == "") {
        $("#user-name").css("border", "red solid 1px");
        return false;
    } else if (email == "") {
        $("#email").css("border", "red solid 1px");
        return false;
    } else if (password == "") {
        $("#password").css("border", "red solid 1px");
        return false;
    } else if (confirm_password == "") {
        $("#confirm-password").css("border", "red solid 1px");
        return false;
    } else if (password != confirm_password) {
        $("#confirm-password").css("border", "red solid 1px");
        return false;
    } else {
        signup();
        // downloadjsondata();
    }
}