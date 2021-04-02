 $(document).ready(function(){
    $(window).scroll(function(){
        console.log($(this).scrollTop());
        if($(this).scrollTop() > 50){
            $(".back-r").css("cssText","background:#fff !important;box-shadow: 1px 0px 2px 0px rgba(0,0,0,0.63);transition: 1s;");
            $(".navbar-expand-lg>.container, .navbar-expand-lg>.container-fluid").css("cssText","padding-top:0px;transition: 0.5s;");
                $(".nav-link").css("cssText","color:#000;transition: 1s;");


        }else{
            $(".back-r").css("cssText","background:transparent !important;");
            $(".navbar-expand-lg>.container, .navbar-expand-lg>.container-fluid").css("cssText","padding-top:17px;transition: 0.5s;");
                $(".nav-link").css("cssText","color:#FFF;transition: 1s;");
        }
    })
});



/*
$(window).scroll(function(){
    if($(this).scrollTop() > 700){
        $("#FEATURES").css("cssText","color:red !important;");
        $(".deffrent-navlink").css("cssText","color:#000 !important;");
        
    }

    if($(this).scrollTop() > 2900){
        $("#service").css("cssText","color:red !important;");
         $("#FEATURES").css("cssText","color:#000 !important;");
        $(".deffrent-navlink").css("cssText","color:#000 !important;");
    }

    if($(this).scrollTop() > 3500){
        $("#portolio").css("cssText","color:red !important;");
        $("#service").css("cssText","color:000 !important;");
         $("#FEATURES").css("cssText","color:#000 !important;");
        $(".deffrent-navlink").css("cssText","color:#000 !important;");
    }
})*/




var videoPlayButton,
	videoWrapper = document.getElementsByClassName('video-wrapper')[0],
    video = document.getElementsByTagName('video')[0],
    videoMethods = {
        renderVideoPlayButton: function() {
            if (videoWrapper.contains(video)) {
				this.formatVideoPlayButton()
                video.classList.add('has-media-controls-hidden')
                videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]
                videoPlayButton.addEventListener('click', this.hideVideoPlayButton)
            }
        },

        formatVideoPlayButton: function() {
            videoWrapper.insertAdjacentHTML('beforeend', '\
                <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">\
                    <circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#fff"/>\
                    <polygon points="70, 55 70, 145 145, 100" fill="#fff"/>\
                </svg>\
            ')
        },

        hideVideoPlayButton: function() {
            video.play()
            videoPlayButton.classList.add('is-hidden')
            video.classList.remove('has-media-controls-hidden')
            video.setAttribute('controls', 'controls')
        }
	}

videoMethods.renderVideoPlayButton();













$('.TESTIMONIALS .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        }
    }
})

$('.brands .owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})






$(".icon-setting").click(function () {

        $(".option").fadeToggle(500);
    });


    var colorLi = $(".option ul li"),
        scrollButton = $(".scroll");
    colorLi
        .eq(0).css("cssText","background:#108af9;border-radius:5px;").end()
        .eq(1).css("cssText","background:#26bdef;border-radius:5px;").end()
        .eq(2).css("cssText","background:#16d08e;border-radius:5px;").end()
        .eq(3).css("cssText","background:#ff4b36;border-radius:5px;").end()
        .eq(4).css("cssText","background:#e12454;border-radius:5px;").end()
        .eq(5).css("cssText","background:#f9bf26;border-radius:5px;").end();

    colorLi.click(function () {
        $("link[href *='thame']").attr("href", $(this).attr("data-value"));
    });






$(window).scroll(function () {
        console.log($(this).scrollTop());
        if ($(this).scrollTop() >= 700) {

            scrollButton.show();

        } else {
            scrollButton.hide();
        }
    });
    scrollButton.click(function () {
        $("html,body").animate({scrollTop: 0},  1000)
    });














$(window).on("load", function () { 
    "use strict";
    $("body").css("overflow", "auto");
    $(".sk-folding-cube").fadeOut(5200, function () {
        $(this).parent().fadeOut(5000);
    });       
});
