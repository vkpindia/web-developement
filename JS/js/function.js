/**
 * Function: In javaScript, a function allows you to define a block of code 
 * give it a name and then execute it as many times.
 * 
 * A javaScript 'function' can be defined using function keyword.
 * 
 * Function Parameter: function can have one or more parameters, which
 * will supplied by the calling function and can be used inside a function
 * Javascript  is a dynamic typing language, so a function parameter can 
 * have value of any type. 
 * 
 *  */ 


 // defining a function
 function hellowWorld() {
    // ccode to be executed
    alert("Hello World!!");
    console.log('Hello World!');
 }

 // parameterized function
 function showFullname(firstName, lastName){

    let fullName = firstName + ' ' + lastName;
    console.log('fullName: ', fullName);
    // console.log('fullName: ', arguments[0] + ' ' + arguments[1]);
 }

 var number1 = document.getElementById('number1')
var number2 = document.getElementById('number2')
var btn = document.getElementById('btnAdd');
var result = document.getElementById('result');

function calculator(calculationType) {
    let calResult = 0;
    
    if(calculationType == 'add'){
        calResult = parseInt(number1.value) + parseInt(number2.value);
        if(isNaN(calResult)){
            calResult = 0;
        }
    } else if (calculationType == 'mul') {
        calResult = parseInt(number1.value) * parseInt(number2.value);
        if(isNaN(calResult)){
            calResult = 0;
        }
    } else if (calculationType == 'div') {
        calResult = parseInt(number1.value) / parseInt(number2.value);
        if(isNaN(calResult)){
            calResult = 0;
        }
    } else {
        calResult = parseInt(number1.value) - parseInt(number2.value);
        if(isNaN(calResult)){
            calResult = 0;
        }
    }
    // result.append('Result: '+sum);   
    result.innerText = 'Result: ' + calResult;

    // reset input boxes
    number1.value = "";
    number2.value = "";
}

 // calling a function
//  hellowWorld();
showFullname('Angular', 'Talk');





