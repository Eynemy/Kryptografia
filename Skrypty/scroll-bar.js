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