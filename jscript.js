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
        display.textContent = a;
        console.log(a);
    }
});
cline.addEventListener("click", () =>{
    if(display.textContent != "ERROR"){
            a = 0;
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
        if(b == 0){
            op = operation.textContent;
            old.textContent = +a + op;
            b = a;
            a = 0;
            display.textContent = 0;
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
                op = '=';
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
});
});

