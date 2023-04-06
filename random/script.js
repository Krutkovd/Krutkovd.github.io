
 let form = document.querySelector("form");
 let min = document.querySelector('input[name="min"]');
let max = document.querySelector('input[name="max"]');
let btn = form.querySelector('input[name="Generate"]');
let count =document.querySelector('input[name="count"]');
let res = document.querySelector('.result')
btn.onclick= function (){
  for(let i=0;i< +count.value;i++){
  let rand=Math.floor((+max.value + 1 - +min.value) * Math.random() + +min.value);
  res.innerText= res.innerText + " " + rand
 
  }
}


