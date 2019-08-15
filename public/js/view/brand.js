$(document).ready(() => {
    configView();
    $('#uploadForm').submit(function (e) {
        // e.preventDefault();
        // var form = $('#uploadForm')[0]; // You need to use standard javascript object here
        // var formData = new FormData(form);
        // $.ajax({
        //     url: 'http://ee17ada6.ngrok.io/get/1',
        //     data: formData,
        //     type: 'GET',
        //     crossDomain: true,
        //     contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
        //     processData: false, // NEEDED, DON'T OMIT THIS
        //     success: function (res) {alert('ok');
        //     }
        // });
    });
});

function configView() {
    var topheight = $('#sectionsNav').height();
    // $('.wrapper').css({'margin-top':'calc(' + topheight + 'px + 25px + 0.625rem)'})
    $('.wrapper').css({ 'margin-top': '120px' })
}
function gotoWear(brand, type, img) {
    $('#img_src').val(img);
    $('#brand_name').val(brand);
    $('#type_name').val(type);
    $('#wear_clothes').submit();
}
function addToCart(src) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert('cc');
        }
    };
    xhttp.open("POST", "/addtocard", true); 
    var formData = new FormData();
    formData.append('src', src); 
    xhttp.send(formData);
} 
