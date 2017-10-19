// The first step is to declare constants for each button and variables for the display
// Number buttons
const ZERO = document.querySelector("#zero");
var zero;
const ONE = document.querySelector("#one");
var one;
const TWO = document.querySelector("#two");
var two;
const THREE = document.querySelector("#three");
var three;
const FOUR = document.querySelector("#four");
var four;
const FIVE = document.querySelector("#five");
var five;
const SIX = document.querySelector("#six");
var six;
const SEVEN = document.querySelector("#seven");
var seven;
const EIGHT = document.querySelector("#eight");
var eight;
const NINE = document.querySelector("#nine");
var nine;
const DECIMAL = document.querySelector("#decimal");
var decimal;

// Action buttons
const ADD = document.querySelector("#add");
const SUBTRACT = document.querySelector("#subtract");
const MULTIPLY = document.querySelector("#multiply");
const DIVIDE = document.querySelector("#divide");
const EQUAL = document.querySelector("#equal");
const CLEAR = document.querySelector("#clear");
const DELETE = document.querySelector("#delete");

// Display variables
var action;
var answer = "";
var result;

// Number Button Functions
function zeroKey() {
  document.querySelector("#result-display").innerHTML = "0";
  zero = "0";
  answer = answer + zero;
  document.querySelector("#calculation-display").innerHTML = answer;
}

function oneKey() {
  document.querySelector("#result-display").innerHTML = "1";
  one = "1";
  answer = answer + one;
  document.querySelector("#calculation-display").innerHTML = answer;
}

function twoKey() {
  document.querySelector("#result-display").innerHTML = "2";
  two = "2";
  answer = answer + two;
  document.querySelector("#calculation-display").innerHTML = answer;
}

function threeKey() {
  document.querySelector("#result-display").innerHTML = "3";
  three = "3";
  answer = answer + three;
  document.querySelector("#calculation-display").innerHTML = answer;
}

function fourKey() {
  document.querySelector("#result-display").innerHTML = "4";
  four = "4";
  answer = answer + four;
  document.querySelector("#calculation-display").innerHTML = answer;
}

function fiveKey() {
  document.querySelector("#result-display").innerHTML = "5";
  five = "5";
  answer = answer + five;
  document.querySelector("#calculation-display").innerHTML = answer;
}

function sixKey() {
  document.querySelector("#result-display").innerHTML = "6";
  six = "6";
  answer = answer + six;
  document.querySelector("#calculation-display").innerHTML = answer;
}

function sevenKey() {
  document.querySelector("#result-display").innerHTML = "7";
  seven = "7";
  answer = answer + seven;
  document.querySelector("#calculation-display").innerHTML = answer;
}

function eightKey() {
  document.querySelector("#result-display").innerHTML = "8";
  eight = "8";
  answer = answer + eight;
  document.querySelector("#calculation-display").innerHTML = answer;
}

function nineKey() {
  document.querySelector("#result-display").innerHTML = "9";
  nine = "9";
  answer = answer + nine;
  document.querySelector("#calculation-display").innerHTML = answer;
}

function decimalKey() {
  document.querySelector("#result-display").innerHTML = ".";
  decimal = ".";
  answer = answer + decimal;
  document.querySelector("#calculation-display").innerHTML = answer;
}

// Action Button Functions
function addKey() {
  //document.querySelector("#result-display").innerHTML = "+";
  action = "+";
  answer = answer + action;
  document.querySelector("#calculation-display").innerHTML = answer;
}

function subtractKey() {
  //document.querySelector("#result-display").innerHTML = "-";
  action = "-";
  answer = answer + action;
  document.querySelector("#calculation-display").innerHTML = answer;
}

function multiplyKey() {
  //document.querySelector("#result-display").innerHTML = "*";
  action = "*";
  answer = answer + action;
  document.querySelector("#calculation-display").innerHTML = answer;
}

function divideKey() {
  //document.querySelector("#result-display").innerHTML = "/";
  action = "/";
  answer = answer + action;
  document.querySelector("#calculation-display").innerHTML = answer;
}

function equalKey() {
  result = eval(answer);
  document.querySelector("#result-display").innerHTML = result;
  answer = answer + "=" + result;
  document.querySelector("#calculation-display").innerHTML = answer;
}

// Clear and Delete Functions
function clearKey() {
  document.querySelector("#result-display").innerHTML = "0";
  document.querySelector("#calculation-display").innerHTML = "0";
  answer = "";
  action = "";
  result;
}

function deleteKey() {
  var length = answer.length - 1;
  answer = answer.slice(0, length);
  document.querySelector("#result-display").innerHTML = "0";
  document.querySelector("#calculation-display").innerHTML = answer;
}

// Function Calls
ZERO.onclick = zeroKey;
ONE.onclick = oneKey;
TWO.onclick = twoKey;
THREE.onclick = threeKey;
FOUR.onclick = fourKey;
FIVE.onclick = fiveKey;
SIX.onclick = sixKey;
SEVEN.onclick = sevenKey;
EIGHT.onclick = eightKey;
NINE.onclick = nineKey;
DECIMAL.onclick = decimalKey;

ADD.onclick = addKey;
SUBTRACT.onclick = subtractKey;
MULTIPLY.onclick = multiplyKey;
DIVIDE.onclick = divideKey;
EQUAL.onclick = equalKey;

CLEAR.onclick = clearKey;
DELETE.onclick = deleteKey;
