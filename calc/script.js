let numbers= document.querySelector(".numbers");
let num1 = numbers.querySelector('input[name="number_1"]');
let num2 = numbers.querySelector('input[name="number_2"]');

let operations= document.querySelector('.Operation');
let sumBtn= operations.querySelector('input[name="sumBtn"]');
let minusBtn= operations.querySelector('input[name="minusBtn"]');
let mulBtn= operations.querySelector('input[name="mulBtn"]');
let devBtn= operations.querySelector('input[name="devBtn"]');
let powBtn= operations.querySelector('input[name="powBtn"]');

let result = document.querySelector('.result label[name="calc_res"]');
sumBtn.onclick = ()=>result.innerText=  +num1.value + +num2.value;
minusBtn.onclick = ()=>result.innerText= +num1.value - +num2.value;
mulBtn.onclick =()=>result.innerText= +num1.value * +num2.value;
devBtn.onclick = ()=>{
if(+num2.value == 0){
    result.innerText = "Нельзя делить на 0";
    return;
}
result.innerText= +num1.value / +num2.value;
}
powBtn.onclick = ()=>{
   if(+num2.value <= 0){
    result.innerText="Степень не может быть меньше 0";
    return;
   }
    result.innerText=  Math.pow(+num1.value, +num2.value)
};
    
    
