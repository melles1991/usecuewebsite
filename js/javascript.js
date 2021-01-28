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
function writeImages() {
    var oImg = document.createElement("img");
    oImg.setAttribute('src', '/img/bananaleft2.svg');
    oImg.setAttribute('id', 'bananaleft');
    oImg.setAttribute('alt', 'Banana leafs left');
    document.body.appendChild(oImg);
    var oImg = document.createElement("img");
    oImg.setAttribute('src', '/img/bananaright2.svg');
    oImg.setAttribute('id', 'bananaright');
    oImg.setAttribute('alt', 'Banana leafs right');
    document.body.appendChild(oImg);
    if(!sessionStorage.loaded) var delay = 1000;
    else var delay = 0;
    setTimeout(function(){document.body.classList.add('loaded');},delay);
    sessionStorage.loaded = true;
}
if (sessionStorage.loaded) {
    writeImages();
} else {
    var loaded = false;

    //An array of DOM events that should be interpreted as
    //user activity.
    var activityEvents = [
        'mousedown', 'mousemove', 'keydown',
        'scroll', 'touchstart'
    ];
 
    //add these events to the document.
    //register the activity function as the listener parameter.
    activityEvents.forEach(function(eventName) {
        document.addEventListener(eventName, function() {
            if(loaded==false){
                writeImages();
                loaded = true;
            }
        });
    });
}
