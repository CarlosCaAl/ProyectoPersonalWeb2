var btn = document.getElementById('display-menu');
btn.addEventListener('click',show,false);
var state = 0;

function show(){
    var menu = document.getElementById('move');
    if(state == 0){
        menu.style.display = "inline-block";
        state = 1;
        estilo = document.querySelector(':root');
        estilo.style.setProperty('--color1','red')
    }
    else{
        menu.style.display = "none";
        state = 0;
    }
}