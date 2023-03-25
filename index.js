menuElement = document.getElementById('menu');
closeElement= document.getElementById('close');
navElement= document.getElementById('nav-links');

menuElement.onclick = function() {
   
    menuElement.classList.add('hide');
    closeElement.classList.remove('hide');
    navElement.classList.remove('m-hide')
}

closeElement.onclick = function() {
    menuElement.classList.remove('hide');
    closeElement.classList.add('hide');
    navElement.classList.add('m-hide')
}

