const body = document.querySelector('body');
body.innerHTML += "<div id='loadPage'></div>";
const load = document.getElementById('loadPage');
load.setAttribute('style', 'position: fixed; z-index: 199000; width: 100%; height: 100%; background: white; top: 0; left: 0;');

function randint(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rand(min, max) {
    return Math.random() * (max - min) + min;
}

range = randint(3000, 15000);

martop = rand(1, 10);
body.style.overflowY = "hidden";

function timeout() {
    setTimeout(function(){
        martop = martop + rand(1, 10);
        load.style.top = martop + 'vh';
        console.log(martop);
        console.log(range);
        range = randint(3000, 15000);
        if (martop < 120) {
            body.style.overflowY = "hidden";
        } else {
            body.style.overflowY = "auto";
        }
        timeout();
    }, range);
}
timeout();