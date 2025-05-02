/*==================================================================*/
// Save local-storage

var username = $('#user-name');
var email = $('#email');
var password = $('#password');
var confirmPassword = $('#confirm-password');

function store() {
    let user;
    var doc_img = $('#can_img').val();
    var existingEntries = JSON.parse(localStorage.getItem("Userdata"));
    if (existingEntries == null) existingEntries = [];
    var username = $('#user-name').val();
    var email = $('#email').val();
    var password = $('#password').val();
    this.user = JSON.parse(localStorage.getItem("Userdata"));
    var flag;
    for (flag = 0; flag < this.user.length; flag++) {
        if (email != this.user[flag].email) {
            console.log(this.user[flag].email);
            var entry = {
                "remember_flag": "0",
                "user_name": this.username,
                "email": this.email,
                "password": this.password,
                "img": doc_img
            };
            console.log(entry);
            return false;
            existingEntries.push(entry);
            localStorage.setItem("Userdata", JSON.stringify(existingEntries));
            alert("You have successfully created yoor account");
            window.location.href = "login.html";
            return true;
        }
    }
    alert("Email is already exist! Please try other email");
    return false;
};
/*==================================================================*/
// check localstorage
var email = $('#email').val();
var password = $('#password').val();


$(document).ready(function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(this.responseText);
            var ip = JSON.parse(this.responseText);
            $('#ip_address').val(ip['ip']);
        }
    };
    xhttp.open("GET", "//api.ipify.org?format=json", true);
    xhttp.send();
});

function check() {
    var ip = $('#ip_address').val();
    let users;
    if (localStorage.getItem("Userdata") == null) {
        this.users = [];
    } else {
        this.users = JSON.parse(localStorage.getItem("Userdata"));
        console.log(this.users);
        user_email = $('#email').val();
        user_password = $('#password').val();
    }
    var i;
    for (i = 0; i < this.users.length; i++) {
        if (user_email == this.users[i].email && user_password == this.users[i].password) {
            var existingEntries = JSON.parse(localStorage.getItem("logs"));
            var Useragent = navigator.userAgent;
            if (existingEntries == null) existingEntries = [];
            var entry = {
                "emailaddress": user_email,
                "ip": ip,
                "User-Agent": Useragent
            };
            // Save logs back to local storage
            existingEntries.push(entry);
            localStorage.setItem("logs", JSON.stringify(existingEntries));
            window.location.href = "dashboard.html";
            // user_location(emailuserenter);
            return true;
        }
    }
    alert("Email or Password is Invalid");
    return false;
}


/*==================================================================*/
// Take screenshot

function take_snapshot() { // take snapshot and get image data


    Webcam.snap(function(data_uri) { // display results in page
        $("#results").html('<img src="' + data_uri + '" id="user-image"/>');

        localStorage.setItem('imgURL', data_uri);
        $('#can_img').val(data_uri);
        // document.getElementById('can_img').value = data_uri;
    });
    $("#my_camera").css({ display: "none" });
    $("#click-screenshot-btn").css({ display: "none" });
    $("#results").css({ display: "block" });
    $("#click-new-btn").css({ display: "block" });
}

/*==================================================================*/
// Take new if you dont like existing screenshot
function take_new_snapshot() {
    Webcam.snap(function(data_uri) { // display results in page
        document.getElementById('results').innerHTML = // '<h2>Here is your image:</h2>' +
            '<img src="' + data_uri + '"/>'; // store(data_uri);
        localStorage.setItem('imgURL', data_uri);
    });
    $("#my_camera").css({ display: "block" });
    $("#click-screenshot-btn").css({ display: "block" });
    $("#results").css({ display: "none" });
    $("#click-new-btn").css({ display: "none" });
}

/*==================================================================*/
// Signup-form JSON 
function downloadjsondata() {
    var form = document.getElementsByTagName('form')[0];
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var doc_img = $('#can_img').val();
        var data = {
            "user_name": this.username.value,
            "email": this.email.value,
            "password": this.password.value,
            "img": doc_img
        };
        // console.log(JSON.stringify(data)); // Function to download data to a file

        function download(data, filename, type) {
            var file = new Blob([data], {
                type: type
            }); // console.log(file);

            if (window.navigator.msSaveOrOpenBlob) // IE10+
                window.navigator.msSaveOrOpenBlob(file, filename);
            else { // Others

                var a = document.createElement("a"),
                    url = URL.createObjectURL(file);


                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                setTimeout(function() {
                    document.body.removeChild(a);
                    window.URL.revokeObjectURL(url);
                }, 0);
            }
        }
        download(JSON.stringify(data), "UserData.json", "text/plain");
    });
    alert("You have successfully created your account!!");
}
/*==================================================================*/