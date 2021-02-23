var number1 = document.getElementById('number1')
var number2 = document.getElementById('number2')
var btn = document.getElementById('btnAdd');
var result = document.getElementById('result');

btn.addEventListener('click', function(){
/*     console.log('number1', typeof number1.value);
    console.log('number2', typeof number2.value); */
    let sum = parseInt(number1.value) + parseInt(number2.value);
    if(isNaN(sum)){
        sum = 0;
    }
    // result.append('Result: '+sum);   
    result.innerText = 'Result: ' + sum;

    // reset input boxes
    number1.value = "";
    number2.value = "";
});