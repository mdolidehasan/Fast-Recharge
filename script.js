let permission1 = false,
    permission2 = false,
    permission3 = false,
    permission4 = false;

let phone_number = document.getElementById('phone_number');
phone_number.addEventListener('input', function () {
    let num = phone_number.value;
    if (num.length === 11) {
        permission3 = true;
        enableButton();
    } else {
        permission3 = false;
        disableButton();
    }
});

let operators = document.getElementById('operators');
operators.addEventListener('change', function () {
    const selectedOption = operators.value;
    if (selectedOption !== '') {
        permission2 = true;
        enableButton();
    } else {
        permission2 = false;
        disableButton();
    }
});

let payment_method = document.getElementById('payment-method');
payment_method.addEventListener('change', function () {
    const selectedOption = payment_method.value;
    if (selectedOption !== '') {
        permission1 = true;
        enableButton();
    } else {
        permission1 = false;
        disableButton();
    }
});

let amount = document.getElementById('amount');
let total=0;
amount.addEventListener('input', function () {
    if (amount.value !== '') {
        permission4 = true;
        enableButton();
    } else {
        permission4 = false;
        disableButton();
    }
});

function enableButton() {
    if (permission1 && permission2 && permission3 && permission4) {
        btn.removeAttribute('disabled');
    }
}

function disableButton() {
    btn.setAttribute('disabled', true);
}

function valueBtn(){
   let valueBtn=document.getElementById('valueBtn').innerText;
   amount.value=valueBtn;
}
function valueBtn1(){
   let valueBtn=document.getElementById('valueBtn1').innerText; 
   amount.value=valueBtn;
  
}
function valueBtn2(){
   let valueBtn=document.getElementById('valueBtn2').innerText; 
   amount.value=valueBtn;
  
}
function valueBtn3(){
   let valueBtn=document.getElementById('valueBtn3').innerText; 
   amount.value=valueBtn;
  
}


