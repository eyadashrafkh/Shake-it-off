var drumList = document.querySelectorAll(".drum");

drumList.forEach(clicked);

function clicked(element) {
    element.addEventListener("click", audiosou);
}

document.addEventListener("keypress", function(event){
    audiosou(event.key);
});

function audiosou(key) {
    if(this.innerHTML!=null)
        key=this.innerHTML; 
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            buttonAnimation(key)
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            buttonAnimation(key)
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            buttonAnimation(key)
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            buttonAnimation(key)
            break;
        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            buttonAnimation(key)
            break;
        case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            buttonAnimation(key)
            break;
        case "l":
            var snare= new Audio('sounds/snare.mp3');
            snare.play();
            buttonAnimation(key)
            break;
        default:
            var hehehe= new Audio('sounds/hehehe.mp3');
            snare.play();
            console.log("ERROR");
            break;
    }
}

function buttonAnimation(currentkey){
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100);
}

document.querySelector("video").addEventListener("click", audiosou);