const html = document.querySelector('html');

html.style.display = 'none';
setTimeout(function(){ 
    html.removeAttribute("style");
}, 2000);