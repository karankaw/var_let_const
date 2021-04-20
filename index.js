// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

(function computeVar() {
  for (var i = 0; i < 10; i++) {
    //i is var, scoped to function
    console.log(i);
  }
  console.log(i);
})(); //IIFE Immediately Invoked Function Expression

console.log("--------------------------");

function computeLet() {
  for (let x = 0; x < 10; x++) {
    //x is let , Scoped to Block
    console.log(x);
  }
  //console.log(x); //Error X is not defined as its outside {} braces block
}
computeLet();
//console.log("After Loop", i)

// const PI //Constants need to be Intialised
//Missing initializer in const declaration
const PI = 3.14;
console.log(`Value of PI ${PI}`);
// PI = 6.28;
// console.log(`Value of PI ${PI}`);

/*Temporal dead zone (TDZ) -- let and const are hoisted and they are in TDZ untill Intialisation
let variables cannot be read/written until they have been fully initialized, which happens when they are declared (if no initial value is specified on declaration, the variable is initialized with a value of undefined). Accessing the variable before the initialization results in a ReferenceError.*/
