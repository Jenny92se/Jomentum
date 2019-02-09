/*
- refer to "MDN" : when searching javascript event
- color site : https://flatuicolors.com/
/* 1. basic function
function sayHello(name,age)
{
    console.log('hello ${name} you are ${age} years old');
}
const greetJihee= sayHello("Jihee",15);

const calculator={

    plus: function(x,y){
        return x+y;
    }
}
const plus=calculator.plus(5,5);
console.log(plus);*/


/* 2. DOM
console.log(document);

const title=document.getElementById("title");

console.log(title);

title.innerHTML="Hi From JS";
title.style.color="red";
document.title="I own you now"
console.dir(document);
*/
// findByID : #title, findByName : .title


/* 3. EVENT
const title=document.querySelector("#title");

const BASE_COLOR="white";
const OTHER_COLOR="#3498db";

function handleClick(){
    //title.style.color="#3498db";
    const currentColor=title.style.color
    console.log(currentColor);

    if(currentColor==BASE_COLOR)
    {
        title.style.color=OTHER_COLOR;
    }
    else{
        title.style.color=BASE_COLOR;
    }
}

function init()
{
    title.style.color=BASE_COLOR;
    //title.addEventListener("click",handleClick);
    title.addEventListener("mouseenter",handleClick);
}
init();

// when network is in offline
window.addEventListener("offline",handleOffline);
window.addEventListener("online",handleOnline){

}
function handleOnline(){
    console.log("welcome back");
}
function handleOffline(){
    console.log("lalala");
}*/
/* 3. event

const CLICKED_CLASS="clicked";

function handleClick(){
    ///const currentClass=title.className;

    const hasClass=title.classList.contains(CLICKED_CLASS);
    //console.log(currentClass);
    if(hasClass)
    {
   //     title.className=CLICKED_CLASS;
   
   title.classList.remove(CLICKED_CLASS);
    }
    else{
        //title.className="";
        title.classList.add(CLICKED_CLASS);     
    }
}

function toggleClick()
{
title.classList.toggle(CLICKED_CLASS);
}

const title=document.getElementById("title");
function init()
{
    title.addEventListener("click",toggleClick);
}
init();
*/