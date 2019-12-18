$(function() {
    "use strict";

    //****************************
    /* Top navbar Theme Change function Start */
    //****************************
    function handlenavbarbg() {
        if ( $('#main-wrapper').attr('data-navbarbg') == 'skin6' ) {
            // do this
            $(".topbar .navbar").addClass('navbar-light');
            $(".topbar .navbar").removeClass('navbar-dark');
        } else {
            // do that
        }
    };

    handlenavbarbg();


    $(".preloader").fadeOut();
    // this is for close icon when navigation open in mobile view
    $(".nav-toggler").on('click', function() {
        $("#main-wrapper").toggleClass("show-sidebar");
        $(".nav-toggler i").toggleClass("ti-menu");
    });
    $(".search-box a, .search-box .app-search .srh-btn").on('click', function() {
        $(".app-search").toggle(200);
        $(".app-search input").focus();
    });

    $("body, .page-wrapper").trigger("resize");
    var setsidebartype = function() {
        var width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
        if (width < 1170) {
            $("#main-wrapper").attr("data-sidebartype", "mini-sidebar");
        } else {
            $("#main-wrapper").attr("data-sidebartype", "full");
        }
    };
    $(window).ready(setsidebartype);
    $(window).on("resize", setsidebartype);
});

//退出登录

$("#out_btn").click(function(){
    var txt = "确定退出？";
    window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
    $('.ok').click(function(){
        $.ajaxSetup({
            data: {
                csrfmiddlewaretoken: '{{ csrf_token }}',
            },
        });
        $.post("/backLogoutPost/", function (data) {
            if(data=="1")
            window.location.href="/backstageLogin/";
        })
    });
})

