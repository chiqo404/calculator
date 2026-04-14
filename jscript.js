function add(a, b) {return a+b}
function subtract(a,b){return a-b}
function multiply(a,b){return a*b}
function divide(a,b){return a/b}
let a = 0;
let op ='';
let b = 0; 
function operate(a,op,b){
    if(op == '+') add(a,b);
    if(op == '-') subtract(a,b);
    if(op == '*') multiply(a,b);
    if(op == '/') divide(a,b);
}
const display = document.querySelector("#screen");
const digits = document.querySelectorAll(".digit");
digits.forEach(button => {
    button.addEventListener("click", () => {
        a = button.textContent;
        const num = document.createElement("number");
        num.textContent = a;
        display.append(num);
        console.log(a);
    });
});
