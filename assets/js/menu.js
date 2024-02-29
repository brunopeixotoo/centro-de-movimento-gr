var menu = document.getElementById('nav');
var burger = document.getElementById('burguer');

burger.addEventListener('click', function() {
    if (menu.style.display == 'block'){
        menu.style.display = 'none';
    }else{
        menu.style.display = 'block';
    }
});