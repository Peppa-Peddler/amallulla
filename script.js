$('.voption').click(function(){
    $(this).parent().children().removeClass("selected");
    $(this).addClass("selected");
    $(this).parent().next().find("iframe").attr("src",$(this).data("src"));
})

$('.ventana').click(function(){
    $('.ventana').removeClass("selected");
    $(this).addClass("selected");
    $('.recursos').hide();
    $('.recursos-'+$(this).data("option")).show();
})
