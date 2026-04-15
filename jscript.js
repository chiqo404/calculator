function add(a, b) {return +a + +b}
function subtract(a,b){return +a - +b}
function multiply(a,b){return a * b}
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
const display = document.querySelector(".new");
const old = document.querySelector(".old");
const digits = document.querySelectorAll(".digit");
const cline = document.querySelector(".cline");
const clear = document.querySelector(".clear");
const del = document.querySelector(".delete");
const operations = document.querySelectorAll(".operation");
const buttons =document.querySelectorAll("#buttons");
const change = document.querySelector(".mp");
let counter = 0;
display.textContent = 0;
digits.forEach(button => {
    button.addEventListener("click", () => {
        if(op == '='){
            a = 0;
            display.textContent = 0;
            old.textContent = "";
            op = '';
        }
        if(button.textContent == '.' && !a.includes('.')){
             a = +a + '.';
             display.textContent = a;
        }
        else{
            if(button.textContent != '.')  a += button.textContent;
             display.textContent = +a;
        }
    });
});
del.addEventListener("click", () => {
    if(display.textContent != "ERROR"){
        a = a.slice(0,-1);
        let test = a[a.length-1];
        display.textContent = +a;
        if(test == '.') display.textContent += test;
        console.log(a);
    }
});
cline.addEventListener("click", () =>{
    if(display.textContent != "ERROR"){
            a = 0;
            display.textContent = +a;
    }
});
change.addEventListener("click", () =>{
    if(display.textContent != "ERROR"){
            a = -a;
            display.textContent = +a;
    }
});
clear.addEventListener("click", () =>{
    a = 0;
    b = 0;
    display.textContent = 0;
    old.textContent = "";
})
operations.forEach(operation =>{
operation.addEventListener("click", () =>{
    if(display.textContent != "ERROR"){
        let cop = operation.textContent;
        if(op == ''){
                op = operation.textContent;
                old.textContent = +a + op;
                b = a;
                if(cop != '='){
                    a = 0;
                    display.textContent = 0;
                }
                else op = '';
        }
        else{
            let result = 0;
            if(op == '+') result = add(a,b);
            else if(op == '-')  result = subtract(b,a);
            else if(op == '×')  result = multiply(a,b);
            else{
                if(a == 0) result = "ERROR";
                else result = divide(b,a);
            }
            if(cop == '='){
                old.textContent = +b + op + +a + '=';
                display.textContent = result;
                a = result;
                b = 0;
                op = '';
            }
            else{
                if(result != "ERROR"){
                    display.textContent = 0;
                    old.textContent = +result + cop;
                    op = cop;
                    b = result;
                    a = 0;
                }
                else{
                    a = 0;
                    b = 0;
                    display.textContent = result;
                    op = '';
                    old.textContent = "";
                }
            }
        }
    }
    operation.addEventListener("mouseenter", () =>{
        operation.style.backgroundColor = "rgb(233, 188, 105)";
    });
    operation.addEventListener("mouseleave", () =>{
        operation.style.backgroundColor = "rgb(235, 159, 17)";
    });
});
});
const equals = document.getElementById('equals');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const m = document.getElementById('m');
const d = document.getElementById('d');
const decimal = document.getElementById('decimal');
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
window.addEventListener("keydown", (e) =>{
     if (e.key === 'Escape') clear.click();
     if (e.key === 'Backspace') del.click();
     if (e.key === 'Enter' || e.key == '=') equals.click();
     if (e.key === '+') plus.click();
     if (e.key === '-') minus.click();
     if (e.key === '*') m.click();
     if (e.key === '/') d.click();
     if (e.key === '.') decimal.click();
     if (e.key === '1') one.click();
     if (e.key === '2') two.click();
     if (e.key === '3') three.click();
     if (e.key === '4') four.click();
     if (e.key === '5') five.click();
     if (e.key === '6') six.click();
     if (e.key === '7') seven.click();
     if (e.key === '8') eight.click();
     if (e.key === '9') nine.click();
    if (e.key === '0') zero.click();
});


