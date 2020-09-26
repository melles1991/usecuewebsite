---
layout:
---

{% include js/detectscroll.js %}
{% include js/newwindowfix.js %}
{% include js/lightbox.js %}

function toggleLightmode() {
    if(document.getElementById('top').classList.contains('lightmode')){
        document.getElementById('top').classList.remove('lightmode');
        document.getElementById('top').classList.add('darkmode');
        localStorage.setItem('mode', 'dark'); 
    } else if (document.getElementById('top').classList.contains('darkmode')) {
        document.getElementById('top').classList.remove('darkmode');
        localStorage.setItem('mode', 'blue'); 
    } else {
        document.getElementById('top').classList.add('lightmode');
        localStorage.setItem('mode', 'light'); 
    }
    document.getElementById('lightmode').blur();
}

if(document.body.classList.contains('error') && window.location.href.indexOf("/nl/") != -1) {
    var elements = document.querySelectorAll('.english');
    for (var i=0; i < elements.length; i ++) {
        elements[i].style.display = 'none';
    }
    var elements = document.querySelectorAll('.nederlands');
    for (var i=0; i < elements.length; i ++) {
        elements[i].style.display = 'block';
    }
} else {
    var elements = document.querySelectorAll('.english');
    for (var i=0; i < elements.length; i ++) {
        elements[i].style.display = 'block';
    }
    var elements = document.querySelectorAll('.nederlands');
    for (var i=0; i < elements.length; i ++) {
        elements[i].style.display = 'none';
    }
}
var loaded = false;
document.body.addEventListener('mousemove', function() {
    if(loaded==false){
        var oImg = document.createElement("img");
        oImg.setAttribute('src', '/img/bananaleft2.svg');
        oImg.setAttribute('alt', 'bananaleafs');
        oImg.setAttribute('id', 'bananaleft');
        oImg.setAttribute('style', 'transition: all .7s ease-in-out;');
        document.body.appendChild(oImg);
        var oImg = document.createElement("img");
        oImg.setAttribute('src', '/img/bananaright2.svg');
        oImg.setAttribute('alt', 'bananaleafs');
        oImg.setAttribute('id', 'bananaright');
        oImg.setAttribute('style', 'transition: all .7s ease-in-out;');
        document.body.appendChild(oImg);
        loaded = true;
        setTimeout(function(){document.body.classList.add('loaded');},0);
    }
});
