$("#contact_edit").submit(function(event) {
    trasaction_index = $("#trasaction_index").val();
    var localstorage_trasaction = JSON.parse(localStorage.getItem("2_fedtest_json_file"));
    var index;
    for (index = 0; index < localstorage_trasaction.length; index++) {
        if (trasaction_index == index) {
            var new_user = {
                "document_first_name": $("#edit_modal_name").val(),
                "email": $("#edit_modal_email").val(),
                "document_dob": $("#edit_modal_dob").val(),
                "used_services_in_request": $("#edit_modal_services").val(),
                "country_name": $("#edit_modal_country").val(),
                "reference": $("#edit_modal_reference").val(),
                "verification_status": $("#edit_modal_status").val(),
                "created_at": $("#edit_modal_time").val(),
            };
            localstorage_trasaction[index] = new_user;
            localStorage.setItem("2_fedtest_json_file", JSON.stringify(localstorage_trasaction));
            alert("Transaction Updated");
            window.location.href = "transaction.html";
            return false;
        }
    }

});