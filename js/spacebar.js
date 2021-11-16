

window.addEventListener("load", function() {

    console.log("astring")
    //make variables for images
    var spacebar = document.getElementById("home-image");
    var one = document.getElementById("img1");
    var two = document.getElementById("img2");

    //event listeners
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    //functions

});

function onKeyDown (evt) {
    //key code for space bar 
    if(evt.keycode === 32) {
        if (started === 0){
            number.textContent = count;
            
            if (started == 1){
                countNumber()
            }
            else
            {
                started = 1;
                spacebar.style.display="none";
                Element.style.display="inline"
            }
            
        }

    }

}

function onKeyUp(evt) {
    if(evt.keyCode === 32) {
        spacebar.src="images/1.png";

    }
}


