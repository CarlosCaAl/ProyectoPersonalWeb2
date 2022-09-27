var btn = document.getElementById('display-btn');
btn.addEventListener('click',show,false);
var element = document.getElementById('displayed');
element.style.display = "none";
var state = 0;

function show(){
    if(state == 0){
        element.style.display = "inline-block";
        state = 1;
    }
    else{
        element.style.display = "none";
        state = 0;
    }
}