/**
 * Created by Kirik on 11.05.2017.
 */
var CLOUDINARY_URL = '	https://api.cloudinary.com/v1_1/dd1kiqdyi/upload'
var CLOUDINARY_UPLOAD_PRESET = 'gt9tk6wr'

var fileUpload = document.getElementById('file_upload');

fileUpload.addEventListener('change', function(event) {
    var file = event.target.files[0];
    var formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    axios({
        url: CLOUDINARY_URL,
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
    }).then(function (res) {
        console.log(res);
    }).catch(function (err) {
        console.error(err);
    });
});