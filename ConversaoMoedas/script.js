
const currencyEL_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two= document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');


// fetch Exchange rates and update the DOM
function calculator(){

    const currency_one = currencyEL_one.value;
    const currency_two = currencyEl_two.value;

   fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
   .then(res => res.json())
   .then(data =>{
    //console.log(data);
    const rate = data.rates[currency_two];
   rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
   
amountEl_two.value = (amountEl_one.value * rate).toFixed(2);

});
}

// Events Listeners
currencyEL_one.addEventListener('change',calculator);
amountEl_one.addEventListener('input',calculator);
currencyEl_two.addEventListener('change',calculator);
amountEl_two.addEventListener('input',calculator);


swap.addEventListener('click', () => {
    const temp = currencyEL_one.value;
    currencyEL_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculator();
  });
calculator();