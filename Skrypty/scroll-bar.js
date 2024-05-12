var indicator = document.querySelector(".scroll-bar");
var DocumentHeight = document.documentElement.scrollHeight;
var ClientHeigh = document.documentElement.clientHeight;

window.onscroll = function(){
    var position = (scrollY /(DocumentHeight - ClientHeigh)) * 100;
    if (position > 100){
        position = 100;
    }
    indicator.style.width = position + "%";
}

window.addEventListener('scroll', function() {
    var top = document.querySelector('#headline0');
    var ontop1 = document.querySelector('#headline1');
    var ontop2 = document.querySelector('#headline2');
    var ontop3 = document.querySelector('#headline3');
    var ontop4 = document.querySelector('#headline4');
    var icon1 = document.querySelector('.list_icon1');
    var icon2 = document.querySelector('.list_icon2');
    var icon3 = document.querySelector('.list_icon3');
    var icon4 = document.querySelector('.list_icon4');


    if (window.scrollY >= top.offsetTop) {
        icon1.style.display = 'none';
        icon2.style.display = 'none';
        icon3.style.display = 'none';
        if (icon4) {
            icon4.style.display = 'none';
        }
        
    }
    if (window.scrollY >= ontop1.offsetTop) {
        icon1.style.display = '';
        icon2.style.display = 'none';
        icon3.style.display = 'none';
        if (icon4) {
            icon4.style.display = 'none';
        }
    }
    if (window.scrollY >= ontop2.offsetTop) {
        icon1.style.display = 'none';
        icon2.style.display = '';
        icon3.style.display = 'none';
        if (icon4) {
            icon4.style.display = 'none';
        }
    }
    if (window.scrollY >= ontop2.offsetTop) {
        icon1.style.display = 'none';
        icon3.style.display = 'none';
        icon2.style.display = '';
        if (icon4) {
            icon4.style.display = 'none';
        }
    }
    if (window.scrollY >= ontop3.offsetTop) {
        icon1.style.display = 'none';
        icon2.style.display = 'none';
        icon3.style.display = '';
        if (icon4) {
            icon4.style.display = 'none';
        }
    }
    if (window.scrollY >= ontop4?.offsetTop) {
        icon1.style.display = 'none';
        icon2.style.display = 'none';
        icon3.style.display = 'none';
        icon4.style.display = '';
    }

  });

