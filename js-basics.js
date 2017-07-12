//Question 1
var x=12
var y=50
function addNums(){
	console.log(x + y);
}
addNums();

var first="Wesley"
var last="Stuckemeyer"

function addName(){
	console.log(first + " " + last);
}

addName();

//Question 2
var fruits=['grapes', 'apples', 'donuts', 'raisins'];
var veggies=['onion', 'potato', 'carrot', 'kale'];

var foods=[fruits,veggies];

console.log(foods[0][2]);

//Questions 3
var userNum= prompt("Enter a number");

if(userNum>100){
	alert("Your number is greater that 100");
}else if(userNum<100){
	alert("Your number is smaller than 100");
}

//Question 4
var animal= prompt("Do you like fish, sharks, or whales?");

if(animal==="fish"){
	alert("That's basic.");
}else if(animal==="sharks"){
	alert("That's a good choice.");
}else if(animal==="whales"){
	alert("No, Whales are scary.");
}else{
	alert("Learn more about the Ocean.");
}

//Question 6

var name= prompt("Whats your name?");

function giveName(name){
	alert("Hi " + name);
}
giveName(name);

//Question 7
function saySomething(){
	console.log("What?");
}
saySomething();

//Question 8

var doorPrize= prompt("Would you like door 1, 2, or 3?")

if(doorPrize==1){
	alert("You've won Bees!");
}
else if(doorPrize==2){
	alert("You've won a years supply of Cats");
}
else if(doorPrize==3){
	alert("You've won a toothpick!");
}else{
	alert("Uhh...pick a number.");
}