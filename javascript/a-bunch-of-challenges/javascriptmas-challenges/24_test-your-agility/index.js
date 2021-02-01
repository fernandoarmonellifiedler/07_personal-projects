//HINT: ONLY EDIT THE SPIN() AND STOP() FUNCTIONS

//globals
var pushed = false //Has the stop button been pushed - false is default
var targetInt; //The target number to stop the wheel on
var spinningElem = document.getElementById('spinning'); //The spinning number

//event listener
document.getElementById("buttonPressed").addEventListener("click", buttonPressed);

//When the stop button is pushed
function buttonPressed(){
    pushed = true;
}

//set the target Int
function setTargetInt(){
    var targetElem = document.getElementById('targetNum');
    targetInt=Math.floor(Math.random() * 101)
    targetElem.innerHTML = targetInt;
}

//sleep const
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}



//EDIT THIS FUNCTION
const spin = async () => {
    //WRITE YOUR CODE HERE
    for (let i = 0 ; i <= 100 ; i++) {
        spinningElem.innerHTML = i;
        if (pushed) {
            stop(i); //Trigger this function when the STOP button has been pushed
            break;
        } else {
            await sleep(75) //Paste this wherever you need to sleep the incrimentor 
        }
    }
}

//EDIT THIS FUNCTION
function stop(userSelectedNumber){
    //WRITE YOUR CODE HERE
    var result = document.getElementById('result'); //display your result message here
    if (userSelectedNumber === targetInt) {
        result.innerHTML = "Sucess: Great job!"
    } else {
        result.innerHTML = "You didn´t hit it, try again."
    }
}


//main
setTargetInt();
spin()