function get_pagination_data_logs(i) {
    let last_page_value;
    if (i == 1) {
        record_perpage = 4;
        last_page_value = 0;
    } else if (i == 2) {
        record_perpage = 8;
        last_page_value = 4;
    } else if (i == 3) {
        record_perpage = 12;
        last_page_value = 8;
    } else if (i == 4) {
        record_perpage = 16;
        last_page_value = 12;
    } else if (i == 5) {
        record_perpage = 20;
        last_page_value = 16;
    } else if (i == 6) {
        record_perpage = 24;
        last_page_value = 20;
    } else if (i == 7) {
        record_perpage = 28;
        last_page_value = 24;
    } else if (i == 8) {
        record_perpage = 32;
        last_page_value = 28;
    } else if (i == 9) {
        record_perpage = 36;
        last_page_value = 32;
    } else if (i == 10) {
        record_perpage = 40;
        last_page_value = 36;
    }
    $.each($('#log_table tr'), function(key, tr) {
        if ((key <= record_perpage) && (key > last_page_value)) {
            $(tr).show();
        } else {
            $(tr).not($('#logs_header')).hide(); // hide everything that isn't "this"
        }
    });
}
window.onload = function() {
    var logged_in_user = {};
    logged_in_user = JSON.parse(localStorage.getItem('current_login_user')); //get data from storage
    users = JSON.parse(localStorage.getItem('all_users')); //get data from storage
    if (logged_in_user == undefined) {
        window.location.href = 'login.html';
    }
    var profile_image = logged_in_user.image;
    var email = logged_in_user.email;
    var user_name = logged_in_user.name;

    $("#dashboard_image").attr({ "src": profile_image });
    var i;
    for (i = 0; i < users.length; i++) {
        if (users[i].email == email) {
            // alert(email);
            $("#Username").html("<b>Welcome, </b>" + users[i].name);
        }
    }
    let logs;
    if (localStorage.getItem('logs') === null) {
        this.logs = [];
    } else {
        this.logs = JSON.parse(localStorage.getItem('logs'));
    }

    let log_table_body = $("#logs_table_body");
    let tr_data = "";
    for (let i = 0; i < this.logs.length; i++) {
        if (email == this.logs[i].email) {
            $("#log_table tbody").append("<tr><td>" +
                this.logs[i].email + "</td><td>" + this.logs[i].ip +
                "</td><td><img style='height: 80px;width: 80px' src=" + this.logs[i].user_login_image + " >" +
                "</td><td>" + this.logs[i].Time + "</td><td>" +
                this.logs[i].User_Agent + "</td></tr>");
        }
    }
    // pagination for logs start

    var $logs_btn = $('.myinputt');
    var $tablee = $('#log_table');
    var $total_rows = $('#log_table tr').length;
    var $record_perpage = "10";
    var $total_pages = Math.ceil($total_rows / $record_perpage);
    var $table_pagination = $("#log_table");
    var my_div = $('<div id="pagination_numbers"></div>')
    for (var i = 1; i <= $total_pages; i++) {
        $('<button id=hey' + i + ' onclick="get_pagination_data_logs(' + i + ')">' + i + ' </button>').appendTo(my_div);
    }

    // console.log($('#log_table tr'));

    $.each($('#log_table tr'), function(key, tr) {
        if (key <= $record_perpage) {
            $(tr).show();
        } else {
            $(tr).hide();
        }
    });
    my_div.appendTo($logs_btn);


    // End pagination logs
};