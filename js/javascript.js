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