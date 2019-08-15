$(document).ready(()=> {
    configView();
});

function configView() {
    var topheight = $('#sectionsNav').height();
    // $('.wrapper').css({'margin-top':'calc(' + topheight + 'px + 25px + 0.625rem)'})
    $('#wear_trial_wrapper').css({'margin-top':'80px'})
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
