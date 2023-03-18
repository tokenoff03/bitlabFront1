
let input = document.getElementsByTagName("input")[0];
let kztBlock = document.getElementById("kzt");
let usdBlock = document.getElementById("usd");
let eurBlock = document.getElementById("eur");
let selector = document.getElementById("currency");
let selectorValue = "KZT";

input.addEventListener('change', (e)=>{
    calculate(input.value);
})
selector.addEventListener('change', (e)=>{
   selectorValue = selector.value;
   calculate(input.value)
})

function calculate(value){
    if(selectorValue == "KZT") {
        kztBlock.innerHTML="-";
        usdBlock.innerHTML= (value / 429).toFixed(2);
        eurBlock.innerHTML = (value / 507).toFixed(2);
    }
    else if (selectorValue == "USD"){
        kztBlock.innerHTML = (value * 431).toFixed(5);
        usdBlock.innerHTML = "-";
        eurBlock.innerHTML = ((value/431)/507).toFixed(8);
    }

    else if(selectorValue == "EUR") {
        kztBlock.innerHTML = (value * 509).toFixed(5);
        usdBlock.innerHTML = ((value / 509) / 429).toFixed(8);
        eurBlock.innerHTML = "-";
    }
}

