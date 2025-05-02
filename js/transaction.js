var trans;

function get_pagination_data(i) {
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
    $.each($('#transaction_table tr'), function(key, tr) {
        if ((key <= record_perpage) && (key > last_page_value)) {
            $(tr).show();
        } else {
            $(tr).not($('.header_table')).hide(); // hide everything that isn't "this"
        }
    });
}

function check_user_online() {
    var logged_in_user = {};
    logged_in_user = JSON.parse(localStorage.getItem('current_login_user')); //get data from storage
    users = JSON.parse(localStorage.getItem('all_users')); //get data from storage
    if (logged_in_user == undefined) {
        window.location.href = 'login.html';
    } else {
        var profile_image = logged_in_user.image;
        var email = logged_in_user.email;
        var user_name = logged_in_user.name;
        $("#dashboard_image").attr({
            "src": profile_image
        });
        var i;
        for (i = 0; i < users.length; i++) {
            if (users[i].email == email) { // alert(email);

                $("#Username").html("<b>Welcome, </b>" + users[i].name);
            }
        }
        $.getJSON("2-fedtest.json", function(data) {
            if (localStorage.getItem("2_fedtest_json_file") == undefined) {
                trans = data.listing_data;
                localStorage.setItem('2_fedtest_json_file', JSON.stringify(trans));
            } else {
                trans = JSON.parse(localStorage.getItem("2_fedtest_json_file"));
            }
            response(trans);
        });

        function response(e) {
            let table = document.getElementById("transaction_table");
            let row, cell, button;
            for (let i = 0; i < e.length; i++) {
                row = table.insertRow();
                cell = row.insertCell();
                cell.textContent = e[i].document_first_name;
                cell = row.insertCell();
                cell.textContent = e[i].email;
                cell = row.insertCell();
                cell.textContent = e[i].document_dob;
                cell = row.insertCell();
                cell.textContent = e[i].used_services_in_request;
                cell = row.insertCell();
                cell.textContent = e[i].country_name;
                cell = row.insertCell();
                cell.textContent = e[i].reference;
                cell = row.insertCell();
                cell.textContent = e[i].created_at;
                cell = row.insertCell();
                cell.textContent = e[i].verification_status;
                cell = row.insertCell();
                const detailbutton = document.createElement("button");
                //////////////////////////////////////////////////////////////
                // Detail Button
                detailbutton.style.color = "#fff";
                detailbutton.id = i;
                detailbutton.style.background = "#000";
                detailbutton.innerHTML = 'Detail';
                $(detailbutton).click(function(e) {

                    // Get the modal
                    var  modal  =  $("#detailModal");                    
                    var  span  =  $(".close")[0];                    
                    modal.css({  display: "block"  });                    
                    span.onclick = function() {                        
                        modal.css({ display: "none" });                    
                    }                    
                    $(window).click(function(event) {
                        if  (event.target  ==  modal)  {  
                            modal.css({  display:   "none"  });                            
                        }                        
                    });
                    // get values from localstorage (2_fedtest_json_file)
                    var button_click_id = detailbutton.id;
                    var jsonfile_2_fedtest_json_file = JSON.parse(localStorage.getItem("2_fedtest_json_file"));
                    var index;
                    for (index = 0; index < jsonfile_2_fedtest_json_file.length; index++) {
                        if (button_click_id == index) { 
                            $("#modal_name").val(jsonfile_2_fedtest_json_file[index].document_first_name);                            
                            $("#modal_email").val(jsonfile_2_fedtest_json_file[index].email);                            
                            $("#modal_dob").val(jsonfile_2_fedtest_json_file[index].document_dob);                            
                            $("#modal_services").val(jsonfile_2_fedtest_json_file[index].used_services_in_request);                            
                            $("#modal_country").val(jsonfile_2_fedtest_json_file[index].country_name);                            
                            $("#modal_reference").val(jsonfile_2_fedtest_json_file[index].reference);                            
                            $("#modal_status").val(jsonfile_2_fedtest_json_file[index].verification_status);                            
                            $("#modal_time").val(jsonfile_2_fedtest_json_file[index].created_at);
                        }
                    }
                });

                cell.appendChild(detailbutton);

                /////////////////////////////////////////// Edit Button////////////////////////////
                cell = row.insertCell();
                const editebutton = document.createElement("button");
                editebutton.style.color = "#fff";
                editebutton.id = i;
                editebutton.style.background = "red";
                editebutton.innerHTML = 'Edit'; 
                $(editebutton).click(function(e) { // Get the modal

                    var modal = $("#editModal");
                    var span = $(".close")[1];
                    modal.css({
                        display: "block"
                    });
                    span.onclick = function() {
                        modal.css({
                            display: "none"
                        });
                    }
                    window.onclick = function(event) {
                            if (event.target == modal) {
                                modal.css({
                                    display: "none"
                                });
                            }
                        }
                        // get values from localstorage (2_fedtest_json_file)
                    var button_click_id = detailbutton.id;
                    var jsonfile_2_fedtest_json_file = JSON.parse(localStorage.getItem("2_fedtest_json_file"));
                    var index;
                    for (index = 0; index < jsonfile_2_fedtest_json_file.length; index++) {
                        if (button_click_id == index) {
                            $("#trasaction_index").val(index);                            
                            $("#edit_modal_name").val(jsonfile_2_fedtest_json_file[index].document_first_name);                            
                            $("#edit_modal_email").val(jsonfile_2_fedtest_json_file[index].email);                            
                            $("#edit_modal_dob").val(jsonfile_2_fedtest_json_file[index].document_dob);                            
                            $("#edit_modal_services").val(jsonfile_2_fedtest_json_file[index].used_services_in_request);                            
                            $("#edit_modal_country").val(jsonfile_2_fedtest_json_file[index].country_name);                            
                            $("#edit_modal_reference").val(jsonfile_2_fedtest_json_file[index].reference);                            
                            $("#edit_modal_status").val(jsonfile_2_fedtest_json_file[index].verification_status);                            
                            $("#edit_modal_time").val(jsonfile_2_fedtest_json_file[index].created_at);
                        }
                    }
                });
                cell.appendChild(editebutton);
                //////////////////////////////End Edit Button////////////////////////////////
                // 
                //
                // 
                //////////////////////////////Delete Button////////////////////////////////
                cell = row.insertCell();
                const deletebutton = document.createElement("button");
                deletebutton.style.color = "#fff";
                deletebutton.id = i;
                deletebutton.style.background = "red";
                deletebutton.innerHTML = 'Delete';
                $(deletebutton).click(function(e) {
                    key = deletebutton.id;
                    var trasaction_file = JSON.parse(localStorage.getItem("2_fedtest_json_file"));
                    // console.log(trasaction_file);
                    trasaction_file.splice(key, 1);
                    localStorage.setItem("2_fedtest_json_file", JSON.stringify(trasaction_file));
                    window.location.reload();
                });
                cell.appendChild(deletebutton);

                ////////////////////////////End delete button//////////////////////////////////
            }
            ///////////////////////////Pagination///////////////////////////////////////

            var $trans_btn = $('.myinputt');
            var $tablee = $('#transaction_table');
            var $total_rows = $('#transaction_table tr').length;
            var $record_perpage = "4";
            var $total_pages = Math.ceil($total_rows / $record_perpage);
            var $table_pagination = $("#transaction_table");
            var my_div = $('<div id="pagination_numbers"></div>')
            for (var i = 1; i <= $total_pages; i++) {
                $('<button id=hey' + i + ' onclick="get_pagination_data(' + i + ')">' + i + ' </button>').appendTo(my_div);
            }

            // console.log($('#transaction_table tr'));

            $.each($('#transaction_table tr'), function(key, tr) {
                if (key <= $record_perpage) {
                    $(tr).show();
                } else {
                    $(tr).hide();
                }
            });
            my_div.appendTo($trans_btn);
            // my_div.appendTo($tablee);
        }
        return true;
    }
}