/* DETECT WINDOW SCROLL */

function windowScroll() {
    var top = window.pageYOffset || document.documentElement.scrollTop;
    if (top > 0) {
        document.body.parentElement.classList.add('scrollstart');
    } else {
        document.body.parentElement.classList.remove('scrollstart');
    }
    if (top > 100) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
    if (window.innerHeight + top >= document.documentElement.scrollHeight) {
        document.body.classList.add('scrolledend');
    } else {
        document.body.classList.remove('scrolledend');
    }
    resizeCanvas();
}

function resizeCanvas() {
    var canvasheight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    document.body.parentElement.style.height = canvasheight+'px';
}

window.addEventListener("scroll",windowScroll);

windowScroll();