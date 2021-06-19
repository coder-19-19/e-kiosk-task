$(document).ready(function (){
    const dropdownBtn = $('.hamburger')
    const mode = $('.mode')
    const modeIcon = $('.mode-icon')

    dropdownBtn.on('click',() => {
        $('.menu').toggleClass('active')
        dropdownBtn.toggleClass('active')
    })

    modeIcon.on('click',() => {
        if(modeIcon.attr('src') === './asset/img/dark.png'){
            modeIcon.attr('src','./asset/img/light.png')
            $('.logo').attr('src','./asset/img/light-logo.png')
            document.documentElement.style.setProperty('--main-color','#333')
            document.documentElement.style.setProperty('--secondary-color','#39393A')
            document.documentElement.style.setProperty('--text-color','#fff')
            document.documentElement.style.setProperty('--body','#232425')
        }
        else{
            modeIcon.attr('src','./asset/img/dark.png')
            $('.logo').attr('src','./asset/img/dark-logo.png')
            document.documentElement.style.setProperty('--main-color','#fff')
            document.documentElement.style.setProperty('--secondary-color','#eee')
            document.documentElement.style.setProperty('--text-color','#333')
            document.documentElement.style.setProperty('--body','#fff')
        }
    })

    $(window).scroll(() => {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn('slow');
        } else {
            $('#back-to-top').fadeOut('slow');
        }
    })

    $('#back-to-top').on('click',() => {
        $('html, body').animate({
            scrollTop: 0
        }, 1000,);
        return false;
    });

    $('.news .cards').slick({
        slidesToShow: 4,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 200,
    });

})