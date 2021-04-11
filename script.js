$('.sesion').click(function(){
    $('.sesion').removeClass("selected");
    $(this).addClass("selected");
    $(".video iframe").attr("src",$(this).data("src"));
})
