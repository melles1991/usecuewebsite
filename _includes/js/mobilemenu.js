document.getElementById('toggle_mobile_menu').addEventListener("click", function() {
    if(document.body.classList.contains('menu_in')) document.body.classList.remove('menu_in');
    else document.body.classList.add('menu_in');    
});