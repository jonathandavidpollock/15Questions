$(document).foundation()

// Global Variables
var i = 0;
var name;

// Self Executing Function
(function Start() {
// Start with Creation of Player
    name = prompt("Please enter your name.");
    var myPlayer = new Player1(name);
    displayToScreen();
})();

// Replace DOM Elements with JSON
function displayToScreen(){
var j= i +1;
    // Write Javascript to HTML
    document.getElementById("header").innerHTML = "Question " + j + "/15";
    document.getElementById("question").innerHTML = Questions[i].question;
    document.getElementById("answer1").innerHTML = Questions[i].answer1;
    document.getElementById("answer2").innerHTML = Questions[i].answer2;
    document.getElementById("answer3").innerHTML = Questions[i].answer3;
    document.getElementById("answer4").innerHTML = Questions[i].answer4;

    // Write Correct Answer to Console
    console.log("The correct is: ");
    console.log(Questions[i].correctAnswer);

    // Finding where the user clicks on the screen
    document.querySelector("#master").addEventListener("click",doSomething);

}

// Validating the Click for Correct Answer
function doSomething(e){
    console.log(e.target.id);
    var myVariable = e.target.innerHTML;
    if (myVariable == Questions[i].correctAnswer){
        i++;
        if (i<15){
            console.log("You were correct. Let's move on to the next question.");
            // Recursion
            displayToScreen();
        }
        else{
            Redirect();
        }
    }
    else {
        Redirect();
    }
}

function Redirect() {
    (i == 15) ? randomWinnerWindow() : randomLoserWindow();
}

function randomWinnerWindow(){
    alert("Congratulations, " + name + ". You have made it all the way through.");
    var randomNum = Math.floor((Math.random() * 10) + 1);
    (randomNum>=5)? window.location="http://giphy.com/gifs/reaction-7rj2ZgttvgomY/fullscreen" : window.location="https://giphy.com/gifs/cheers-congrats-14cDsqOkks6O8U/fullscreen";
}

function randomLoserWindow(){
    alert("YOU LOOSE. PLEASE TRY AGAIN LATER.");
    var randomNum = Math.floor((Math.random() * 10) + 1);
    (randomNum>=5) ? window.location="https://giphy.com/gifs/love-black-and-white-fail-dkuZHIQsslFfy/fullscreen" : window.location="http://giphy.com/gifs/nike-deal-with-it-unlimited-justdoit-l3fQf9ByIzJ3iLI5i/fullscreen";
}

function Player1(Myname){
    this.myName = Myname;
    console.log("Successful creation of new Player 1: " + this.myName);

    // Project Requirements include using a while and for loop

    // local variables
    var k = 18;

    while(k < 20){
        console.log(this.myName + "'s age is " + k + ".");
        console.log("But " + this.myName + " is growing up.");
        k++;
    }

    for (var foo = 0; foo < 1; foo++){
        console.log(this.myName + " must be 20 to play Who Wants To Be a Millionaire.");
    }

    this.age = k;
    console.log("Your person is now " + this.age + " years old.");
}