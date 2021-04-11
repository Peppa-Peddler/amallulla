$('.sesion').click(function(){
    $('.sesion').removeClass("selected");
    $(this).addClass("selected");
})

$('.play').click(function(){
    $(".thumb, .video-title").hide();
})
