var arrDrums = document.querySelectorAll(".drum");   //array of all drums

//listening for click events 
for(var drum of arrDrums){
    drum.addEventListener("click", function() {   //adding event for each drum
        makeSound(this.innerHTML);
        

        //toggling animation
        this.classList.add("pressed");  //adding animation to when the drum is clicked on
        var drum = this;
        setTimeout(function(){
            drum.classList.remove("pressed");
            
        }, 100);

    } )
}


//listening for keydown keyboard events
document.addEventListener("keydown", function(event){    //"event" is an object that has "key" property; event that triggered the function
    makeSound(event.key);

    //toggling animation
    var drum = document.querySelector("." + event.key);
    drum.classList.add("pressed");
    setTimeout(function(){
        drum.classList.remove("pressed");
        
    }, 100);

})





function makeSound(key){
    //click events for each key:
    switch(key){
        case "w":{
                var audioW = new Audio("sounds/crash.mp3");
                audioW.play();
           break;
        }

        case "a":{
                var audioA = new Audio("sounds/kick-bass.mp3");
                audioA.play();
           
           break;
        }

        case "s":{
                var audioS = new Audio("sounds/snare.mp3");
                audioS.play();
           break;
        }

        case "d":{
                var audioD = new Audio("sounds/tom-1.mp3");
                audioD.play();
           break;
        }

        case "j":{
                var audioJ = new Audio("sounds/tom-2.mp3");
                audioJ.play();
           break;
        }

        case "k":{
                var audioK = new Audio("sounds/tom-3.mp3");
                audioK.play();
           break;
        }

        case "l":{
                var audioL = new Audio("sounds/tom-4.mp3");
                audioL.play();
           break;
        }

        default: console.log("no sound for key: "+ key);
    } 
}




