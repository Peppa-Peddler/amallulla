$('.voption').click(function(){
    $(this).parent().children().removeClass("selected");
    $(this).addClass("selected");
    $(this).parent().next().find("iframe").attr("src",$(this).data("src"));
})
