/**
 * Created by kyla.hudson432 on 11/1/16.
 */

function submit() {
    //array of colors
    var colors= [];
    colors[0]="blue";
    colors[1]="cyan";
    colors[2]="gold";
    colors[3]="gray";
    colors[4]="green";
    colors[5]="magenta";
    colors[6]="orange";
    colors[7]="red";
    colors[8]="white";
    colors[9]="yellow";
    // picks random number
     var x= Math.floor(Math.random()* 9)+ 0;
    //computer number pick
    var pick=colors[x];




    // human pick

     var guess;
    var myBody= document.getElementById("id").style.background;
    var count= guess;
    var finished= false;
    var text;
    var color=colors[x];

    do {

        guess = prompt("Guess a color ");

        if(guess == null) {
            //user cancelled
            break;
        }

        //1. Check if "guess" is in the array
        if (colors.indexOf(guess) == -1) {
            //invalid color
            alert("Invalid input\n\nTry entering one of the valid colors listed on the page")

        }
        else {
            //console.log("the color chosen is:" + pick);

            // prompts the user so page wont re-load

            //if human pick matches computer pick
            if(pick== guess) {

                alert("Congrats! You got it right! it only took you:\n\n"+ count +
                    "\n\ntrys");

                finished = true;


            //background change
            var myBody=document.getElementsByTagName("body")[0];
            myBody.style.background=color ;}

            //lower
            else if(pick > guess){

                alert("Wrong answer\n\nYour pick is alphabetically lower than the answer\n\nTry again!")
            }
            //higher
            else if(pick < guess) {

                alert("Wrong answer \n\nYour pick is alphabetically higher than the answer\n\nTry again!")
            }

        }

    } while(finished == false);

    try{
        if(pick==guess);

    }
    catch(err){
        console.log("the color chosen is:" + pick);
    }






}