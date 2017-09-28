/**
 * Created by lenovo on 2017/8/30.
 */
$(function(){
    var $imgs = $("#nav-menu img");
    var $span = $("#nav-menu span");
    var $container = $("#container");
    $imgs.hover(function(){
        $imgs.attr("src","img/menu_icon2.svg");
    },function(){
        $imgs.attr("src","img/menu_icon.svg");
    });
    $("#receptacle").add("#mask").css({
        height: document.body.clientHeight
    });
    $imgs.add($span).on("click",function(){
        $container.css({
            display: "block"
        });
    });
    $("#mask").on("click",function(e){
        if(e.target == $("#receptacle")){
            $container.css({
                display: "block"
            })
        }else{
            $container.css({
                display: "none"
            });
        }
    });
});