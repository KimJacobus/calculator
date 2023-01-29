var numbers = document.querySelectorAll('#numbers > div');
var clearOperators = document.querySelectorAll('#clearOperators > div');
var inputScreen = document.getElementById('inputScreen');
var inputHead = document.getElementById('inputHead');


window.onload = windowFunctions; 

function windowFunctions() {
    getNumbers();
    getOperators();


};

function getNumbers() {
    for (let i = 0; i < numbers.length; i++) {
     numbers[i].addEventListener("click", (event) => {

        console.log("getnumbers clicked");
        effects.press(event);
        input.inputNumbers(event);      
     }) 
    };
};

function getOperators() {
    // equal button
    clearOperators[0].addEventListener("click", () => {
        calculate.Equals(); 
    });
    //clear button 
    clearOperators[1].addEventListener("click", () => {
            input.clear(event);
    });





}




// put all button effects on single custom class ?

var effects = {
    press: function(event) {
        let press = event.target;
        press.setAttribute('class', 'darknumbers dosis');
        setTimeout(() => {
            press.setAttribute('class', 'numbers dosis');
            // console.log("press", press);
        }, 100);
    }
}



var clicked = true;
var ClickInput = 0;

var input = {

    inputNumbers : function(event) {
       let press = event.target.innerHTML;
        inputScreen.innerHTML += press; 
        return press; 
    },
    
    clear : function(event) {    
        let press = event.target.innerHTML; 
        console.log(press);
        
        inputHead.setAttribute('class', 'bg-red-400 row-span-1 col-span-2 lg:col-span-2 lg:col-start-3 rounded-xl animate-bounce-short');
        setTimeout(() => {
            inputHead.setAttribute('class', 'bg-red-400 row-span-1 col-span-2 lg:col-span-2 lg:col-start-3 rounded-xl');
            inputScreen.innerHTML = " "; 
        }, 1000);

        // retrieve functionality        
        // if(clicked) {
        //     ClickInput = inputScreen.innerHTML; 
        //     inputScreen.innerHTML = " "; 
        //     clicked = false; 
        // }
        // else  {
        //     inputScreen.innerHTML = ClickInput;
        //     ClickInput = 0;
        // }

    },
    // ass: function(check) {
    //     return check+1;
    // }

};


// convert into numbers
// get numbers
// do calculations
// return numbers ? or strings

// var getPress = 0;

// var press = 0;

var calculate = {
    convertNr : function(event) {

        // can't get number like this ? 
        // event is undefined, do I even need the event here ? 
        // except to get the clicked number via innerHTML
        press += Number(event.target.innerHTML);

        getPress += press;   
        // console.log(press);
        // console.log(getPress);
        return press;
    },



   Equals : function() {
        var x = press;
        console.log(x+1);


    
        // console.log("jup");
        this.check();


        return "butt";
    },


    
   

    Plus : function() {


        //amount gets put in 
        // plus button clicked 
        // get amount before or during click ?         
        //amount before  plus clicked

        // amount gets put in 
        // equal button clicked or plus button or minus button or other button 
        // get amount after button clicked.
    },
     
    check : function() {
        
        // console.log(this.Equals())
        // console.log(matrix.ass(1))
        },

};


calculate.check()