
var numbers = document.querySelectorAll('#numbers > div');
var clearOperators = document.querySelectorAll('#clearOperators > div');
var mathOperators = document.querySelectorAll('#mathOperators > div');


var inputScreen = document.getElementById('inputScreen');
var inputHead = document.getElementById('inputHead');



var amountOne = '';
var amountTwo = '';
var stashOperator = '';
var resetOperator; 
var amountThree = 0;



window.onload = windowFunctions; 

function windowFunctions() {
    getNumbers();
    getOperators();
};

function getNumbers() {
    for (let i = 0; i < numbers.length; i++) {
     numbers[i].addEventListener("click", (event) => {
        if(resetOperator) {


            input.clear();
            calculate.clearMemory();
            effects.numbersPress(event);
            input.inputNumbers(event); 

            stashOperator = '';
            resetOperator = false; 

        }
        else {


        effects.numbersPress(event);
        input.inputNumbers(event); 

        }
     }) 
    };
};


function getOperators() {
    
    /*clearOperators*/

    // equal button
    clearOperators[0].addEventListener("click", (event) => {
        // calculate.convertNum();
        calculate.Math();
        effects.clearoperatorsPress(event);
        input.show();
        calculate.clearMemory();

        // resetOperator = true;
    });


    //clear button 
    clearOperators[1].addEventListener("click", (event) => {
        effects.animateBounce(event);
        effects.clearoperatorsPress(event);
        input.clear();
        calculate.clearMemory();
    });


    /*mathOperators*/

    for (let i = 0; i < mathOperators.length; i++) {

    mathOperators[i].addEventListener("click", (event) => {
        calculate.getAmount();
        calculate.convertNum();
        calculate.stashMath(event);
        calculate.stashNum();
        // calculate.clearMemory();
        input.clear();
        effects.animatePulse();


    });
    }
};


var effects = {

    /* button press effects */

    numbersPress: function(event) {
        let press = event.target.classList;
        press.add('hover:bg-slate-900');
        setTimeout(() => {
            press.remove('hover:bg-slate-900');
        }, 100);
    },

    clearoperatorsPress: function(event) {
        let press = event.target.classList;
        press.add('hover:bg-orange-800');
        setTimeout(() => {
            press.remove('hover:bg-orange-800');
        }, 100);
    },


    /* animation effects */

    animateBounce : function(event) {    
        inputHead.classList.add('animate-bounce-short');

        setTimeout(() => {
            inputHead.classList.remove('animate-bounce-short');
        }, 1000);
    },

    animatePulse : function(event) {    
        inputHead.classList.add('animate-pulse-short');
        setTimeout(() => {
            inputHead.classList.remove('animate-pulse-short');
        }, 1000);
    },

};

var input = {

    inputNumbers : function(event) {
       let press = Number(event.target.innerHTML);
        inputScreen.innerHTML += press; 
    },

    clear: function() {
        inputScreen.innerHTML = " "; 
    },

    show : function() {
        


        inputScreen.innerHTML = amountOne; 
    },

};







var calculate = {

    getAmount : function() {
        amountOne = inputScreen.innerHTML;
        console.log(amountOne);
        
    },
    clearMemory : function() {
        amountOne = 0;
        amountTwo = 0;
    },

    stashMath : function(event) {
        stashOperator = event.target.innerHTML; 
    },

    convertNum : function() {
        console.log(amountOne);
        let convNumOne = Number(amountOne);
        let convNumTwo = Number(amountTwo);
        console.log(convNumOne);
        console.log(convNumTwo);
        amountOne = convNumOne;
        amountTwo = convNumTwo;


    },



    // logic isn't working here



    stashNum : function() {
        amountTwo += amountOne;
        console.log(amountTwo);
    },
    Math : function() {
   
        switch(stashOperator) {
            case '+':
                amountOne += amountTwo
            break;
            case '-':
                amountOne -= amountTwo
            break;
            case '/':
                amountOne / amountTwo
            break;
            case 'x':
                amountOne * amountTwo
            break; 
        }



    }


//     Plus : function() {
//         amountOne += amountTwo + Number(inputScreen.innerHTML); 
//     },



//    Equals : function() {


//    },

    //     //amount gets put in 
    //     // plus button clicked 
    //     // get amount before or during click ?         
    //     //amount before  plus clicked

    //     // amount gets put in 
    //     // equal button clicked or plus button or minus button or other button 
    //     // get amount after button clicked.

};
