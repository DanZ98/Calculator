
// stores and retrieves ids from html file
const numField1 = document.getElementById('numField1');

const numField2 = document.getElementById('numField2');

const resultField = document.getElementById('resultField');

const form = document.getElementById('xIsWhatPerentOfY');

// adding event listener and function to form element
form.addEventListener('submit', function(event){
   
    // if and else statment to execute operations
    if(!numField1.value || !numField2.value){
        alert('Please enter values in the fields');
    }else{

        // stores fields 1 and 2 and transforms strings into a floating integer
        const x = parseFloat(numField1.value);
        const y = parseFloat(numField2.value);

        // stores and executes fields 1 and 2 into percentages
        const result = x / y;
        const percent = result * 100;

        // prints actual results
        resultField.innerText = 'Answer: ' + percent + '%';

        // disables refresh of page when using form element
        event.preventDefault();
    }

});



