$(document).ready(()=> {
    configView();
});

function configView() {
    var topheight = $('#sectionsNav').height();
    // $('.wrapper').css({'margin-top':'calc(' + topheight + 'px + 25px + 0.625rem)'})
    $('.wrapper').css({'margin-top':'120px'})
}

function GotoJob(id) {
    location.href = "/checkjob/" + id;
}

$('.box').on('click', function() {
    location.href = $(this).attr('src');
})