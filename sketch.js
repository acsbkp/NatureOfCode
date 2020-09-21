// Https://github.com/AbhiroopKar-p5Creator/NatureOfCode/Constructing_Random_walker/sketch.js
// Nature Of Code
// Abhiroop Kar

var particle;
var choise;
var x = 683
var y = 338.5

function setup() {
	createCanvas(1366,677)
}

function draw() {
	stroke(255,0,0)
	point(x,y)

 choise = round(random(0,3)) 
 
 if(choise === 0){
 	x = x + 1
 } else if (choise === 1){
 	y = y - 1
 } else if(choise === 2){
 	x = x - 1
 } else if(choise ===3) {
 	y = y + 1
 }
}
// So,this is asimplified version of the nature of code
// this code example is obtainded by Nature of code First edition
// It is there without OOP(ObjectOrientedProgramming)edited by me(Abhiroop Kar)
// If you liked this code please contact me on my email (abhiroop.kar2010@gmail.com)
// Please comment, a part of it goes to Daniel Shiffmen my inspiration.
