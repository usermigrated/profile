////////////////////////////////// Advance Search //////////////////////////////////
$("#advance_search_btn").click(function() {
    var $name_advance = $("#name_advance").val().toLowerCase();
    var $email_advance = $("#email_advance").val().toLowerCase();
    var $dob_advance = $("#dob_advance").val().toLowerCase();
    var $services_advance = $("#services_advance").val().toLowerCase();
    var $country_advance = $("#country_advance").val().toLowerCase();
    var $reference_advance = $("#reference_advance").val().toLowerCase();
    var $time_advance = $("#time_advance").val().toLowerCase();
    var $status_advance = $("#status_advance").val().toLowerCase();
    $("#transaction_table tr:not(:first)").filter(function() {
        $(this).toggle(
            ($(this).find("td:eq(0)").text().toLowerCase().indexOf($name_advance) > -1) &&
            ($(this).find("td:eq(1)").text().toLowerCase().indexOf($email_advance) > -1) &&
            ($(this).find("td:eq(2)").text().toLowerCase().indexOf($dob_advance) > -1) &&
            ($(this).find("td:eq(3)").text().toLowerCase().indexOf($services_advance) > -1) &&
            ($(this).find("td:eq(4)").text().toLowerCase().indexOf($country_advance) > -1) &&
            ($(this).find("td:eq(5)").text().toLowerCase().indexOf($reference_advance) > -1) &&
            ($(this).find("td:eq(6)").text().toLowerCase().indexOf($time_advance) > -1) &&
            ($(this).find("td:eq(7)").text().toLowerCase().indexOf($status_advance) > -1)
        )
    });
    return false;
    // alert($name_advance);
});


////////////////////////////////// General Search //////////////////////////////////
$("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#transaction_table tr:not(:first)").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});

////////////////////////////////// Row By Row Search //////////////////////////////////
// name_input search
$("#name_input").on("keyup", function() {
    var input, filter, table, tr, td, i, txtValue;
    input = $("#name_input");
    filter = input[0].value.toUpperCase();
    table = $("tbody");
    tr = $("tr");
    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
});
// email_search
$("#email_input").on("keyup", function() {
    var input, filter, table, tr, td, i, txtValue;
    input = $("#email_input");
    filter = input[0].value.toUpperCase();
    table = $("tbody");
    tr = $("tr");
    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
});
// dob_search
$("#dob_input").on("keyup", function() {
    var input, filter, table, tr, td, i, txtValue;
    input = $("#dob_input");
    filter = input[0].value.toUpperCase();
    table = $("tbody");
    tr = $("tr");
    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
});
// services_input
$("#services_input").on("keyup", function() {
    var input, filter, table, tr, td, i, txtValue;
    input = $("#services_input");
    filter = input[0].value.toUpperCase();
    table = $("tbody");
    tr = $("tr");
    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
});
// country_input
$("#country_input").on("keyup", function() {
    var input, filter, table, tr, td, i, txtValue;
    input = $("#country_input");
    filter = input[0].value.toUpperCase();
    table = $("tbody");
    tr = $("tr");
    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[4];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
});
// reference_input
$("#reference_input").on("keyup", function() {
    var input, filter, table, tr, td, i, txtValue;
    input = $("#reference_input");
    filter = input[0].value.toUpperCase();
    table = $("tbody");
    tr = $("tr");
    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[5];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
});
// time_input
$("#time_input").on("keyup", function() {
    var input, filter, table, tr, td, i, txtValue;
    input = $("#time_input");
    filter = input[0].value.toUpperCase();
    table = $("tbody");
    tr = $("tr");
    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[6];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
});
// status_input
$("#status_input").on("keyup", function() {
    var input, filter, table, tr, td, i, txtValue;
    input = $("#status_input");
    filter = input[0].value.toUpperCase();
    table = $("tbody");
    tr = $("tr");
    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[7];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
});