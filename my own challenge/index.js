

//DETECTING BUTTON SOUND

// this line of code is for the code to loop through all the button given to carried out the same target simultaneously
var numbersOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numbersOfDrumButtons; i++) {


    // this line of code find the first button in our html page and when the button is clicked, 
    //the addEventListerner ativates the function handleClick for the sound to be produced.
document.querySelectorAll(".drum")[i].addEventListener("click", function () {         //handleClick is been passed in as an input not as a function, so that it can be called ata later time, when the action takes place.
       
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

    
         });

}

//DETECTING KEYBOARD SOUND

document.addEventListener("keypress", function(event) {
    
    makeSound(event.key);
    buttonAnimation(event.key);

});

function makeSound(key) {

    switch (key) {
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3"); //adding sound to the images.
        tom1.play();
        break;
        
    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3"); //adding sound to the images.
        tom2.play();
        break;

    case "s":
        var tom3 = new Audio("sounds/tom-3.mp3"); //adding sound to the images.
        tom3.play();
        break;

    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3"); //adding sound to the images.
        tom4.play();
        break;

    case "j":
        var snare = new Audio("sounds/snare.mp3"); //adding sound to the images.
        snare.play();
        break;

    case "k":
        var kickbass = new Audio("sounds/kick-bass.mp3"); //adding sound to the images.
        kickbass.play();
        break;

    case "l":
        var crash = new Audio("sounds/crash.mp3"); //adding sound to the images.
        crash.play();
        break;



    default: console.log(buttonInnerHTML);
        break;
}


};

//CREATING AN KEYPRESS ANIMATION

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    
    activeButton.classList.add("pressed");

    //TO CREATE A DELAY FOR  SOME SECONDS TO THE PRESSED BUTTON TO GO BACK TO ITS DEFAULT DISPLAY: WE USE SETTIMER

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
};
