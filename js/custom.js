$(document).ready(function(){

    $("#privacyModal").hide(); //처음에 숨김
    
        //모달팝업
        var posY;
        $('a[href="#privacyModal"]').click(function(event) {
            event.preventDefault();
            if($(this).attr("rel") == "modal:open"){
                if($(window).width() < 1024){
                    posY = $(document).scrollTop();
                    $(".wrap").css("top", -posY);
                }
                $("#privacyModal").fadeIn();  
                $("html, body").addClass("not_scroll");    
            } else if($(this).attr("rel") == "modal:close"){
                if($(window).width() < 1024){
                    posY = $(document).scrollTop();
                    $(".wrap").css("top", posY);
                }
                $("#privacyModal").fadeOut();  
                $("html, body").removeClass("not_scroll");
            }
        });

        //팝업창 높이 계산
        var modalH = $(".modalWrap").height();
        var titleH = $(".modalWrap h3").height();
        if($(window).width() < 630){
            modalH = $(window).height();
        }
        $(".popupContWrap").css("height", modalH-titleH+"px");
    
});