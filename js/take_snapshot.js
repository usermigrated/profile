/*==================================================================*/
// Take screenshot

function take_snapshot() {
    // take snapshot and get image data

    Webcam.snap(function(data_uri) {
        // display results in page
        document.getElementById('results').innerHTML =
            '<img src="' + data_uri + '" id="user-image"/>';
        localStorage.setItem('imgURL', data_uri);
        document.getElementById('can_img').value = data_uri;
    });
    document.getElementById('my_camera').style.display = 'none';
    document.getElementById('click-screenshot-btn').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    document.getElementById('click-new-btn').style.display = 'block';
}

/*==================================================================*/
// Take new if you dont like existing screenshot
function take_new_snapshot() {
    Webcam.snap(function(data_uri) {
        // display results in page
        document.getElementById('results').innerHTML =
            '<img src="' + data_uri + '"/>';
        localStorage.setItem('imgURL', data_uri);

    });
    document.getElementById('my_camera').style.display = 'block';
    document.getElementById('click-screenshot-btn').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    document.getElementById('click-new-btn').style.display = 'none';
}