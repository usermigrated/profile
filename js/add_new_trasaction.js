 /////////////////////////////////////////// Add new trasaction ////////////////////////////// 

 // action goes here!!
 $("#add_new_trans").click(function() {
     var modal = $("#add_new_trasaction");
     var span = $(".close")[2];
     $(modal).css({ display: "block" });
     span.onclick = function() {
         $(modal).css({ display: "none" });
         //  modal.style.display = "none";
     }
     window.onclick = function(event) {
         if (event.target == modal) {
             $(modal).css({ display: "none" });
         }
     }
 });
 $("#add_new_trans_btn").click(function() {
     //  alert("in submit button");
     var firstname = $('#add_modal_fname').val();
     var midlename = $('#add_modal_mname').val();
     var lastname = $('#add_modal_lname').val();
     var email = $('#add_modal_email').val();
     var phone = $('#add_modal_phone').val();
     var address = $('#add_modal_address').val();
     var dob = $('#add_modal_dob').val();
     var services = $('#add_modal_services').val();
     var country = $('#add_modal_country').val();
     var ref = $('#add_modal_reference').val();
     var issuedate = $('#add_modal_issuedate').val();
     var status = $('#add_modal_status').val();

     var mytime = new Date().toLocaleString("en-US", { timeZone: "Asia/Karachi" });
     mytime = new Date(mytime);
     currenttime = mytime.toLocaleString();
     if (firstname == "") {
         $("#add_modal_fname").css("border", "red solid 2px");
         $("#error_trsansaction_msg").css({ display: "block" });
         return false;
     } else if (midlename == "") {
         $("#add_modal_mname").css("border", "red solid 2px");
         $("#error_trsansaction_msg").css({ display: "block" });
         return false;
     } else if (lastname == "") {
         $("#add_modal_lname").css("border", "red solid 2px");
         $("#error_trsansaction_msg").css({ display: "block" });
         return false;
     } else if (email == "") {
         $("#add_modal_email").css("border", "red solid 2px");
         $("#error_trsansaction_msg").css({ display: "block" });
         return false;
     } else if (phone == "") {
         $("#add_modal_phone").css("border", "red solid 2px");
         $("#error_trsansaction_msg").css({ display: "block" });
     } else if (address == "") {
         $("#add_modal_address").css("border", "red solid 2px");
         $("#error_trsansaction_msg").css({ display: "block" });
         return false;
     } else if (dob == "") {
         $("#add_modal_dob").css("border", "red solid 2px");
         $("#error_trsansaction_msg").css({ display: "block" });
         return false;
     } else if (services == "") {
         $("#add_modal_services").css("border", "red solid 2px");
         $("#error_trsansaction_msg").css({ display: "block" });
         return false;
     } else if (country == "") {
         $("#add_modal_country").css("border", "red solid 2px");
         $("#error_trsansaction_msg").css({ display: "block" });
         return false;
     } else if (ref == "") {
         $("#add_modal_reference").css("border", "red solid 2px");
         $("#error_trsansaction_msg").css({ display: "block" });
         return false;
     } else if (issuedate == "") {
         $("#add_modal_issuedate").css("border", "red solid 2px");
         $("#error_trsansaction_msg").css({ display: "block" });
         return false;
     } else if (status == "") {
         $("#add_modal_status").css("border", "red solid 2px");
         $("#error_trsansaction_msg").css({ display: "block" });
         return false;
     } else {
         let totaljson_data = JSON.parse(localStorage.getItem("2_fedtest_json_file"));
         if (totaljson_data == null) {
             totaljson_data = [];
         }
         let NewTrans = {
             'request_id': "",
             'email': email,
             'country_name': country,
             'created_at': currenttime,
             'encrypted_id': "",
             'reference': ref,
             'phone': phone,
             'verification_status': "verification.declined",
             'is_deleted': null,
             'used_services_in_request': services,
             'document_first_name': firstname,
             'document_middle_name': midlename,
             'document_last_name': lastname,
             'document_dob': dob,
             'address_first_name': null,
             'address_middle_name': null,
             'address_last_name': null,
             'address_full_address': address,
             'bgc_first_name': null,
             'bgc_middle_name': null,
             'bgc_last_name': null,
             'bgc_dob': null,
             'verify_last_state': "",
             'declined_steps': null,
             'last_raw_response': ""
         }
         for (let i = 0; i < totaljson_data.length; i++) {
             if (NewTrans.email == totaljson_data[i].email) {
                 alert('Email you Entered is already exist');
                 return false;
             }
         }
         totaljson_data.push(NewTrans);
         localStorage.setItem("2_fedtest_json_file", JSON.stringify(totaljson_data));
         $("#error_trsansaction_msg").css({ display: "none" });
         $("#new_trsansaction_msg").css({ display: "block" });

         setTimeout(function() {
             window.location.reload();
         }, 2000);
         return false;
     }
 });